import { Instruction } from "./RustCompiler";
import RustHeap from "./RustHeap";
import { Tag } from "./RustHeap";

class RustIdealizedVM {
  private E; // heap Address
  private RTS = []; // JS array (stack) of Addresses
  private OS = []; // JS array (stack) of words (Addresses, word-encoded literals, numbers)
  private instrs: Instruction[];
  private PC: number = 0;
  private unassigned = () => {};
  private HEAP = new RustHeap(1000000);

  private False = this.HEAP.heap_allocate(Tag.False_tag, 1);
  private is_False = (address) =>
    this.HEAP.heap_get_tag(address) === Tag.False_tag;
  private True = this.HEAP.heap_allocate(Tag.True_tag, 1);
  private is_True = (address) =>
    this.HEAP.heap_get_tag(address) === Tag.True_tag;
  private is_Boolean = (address) =>
    this.is_True(address) || this.is_False(address);
  private Unassigned = this.HEAP.heap_allocate(Tag.Unassigned_tag, 1);
  private is_Unassigned = (address) =>
    this.HEAP.heap_get_tag(address) === Tag.Unassigned_tag;
  private Undefined = this.HEAP.heap_allocate(Tag.Undefined_tag, 1);
  private is_Undefined = (address) =>
    this.HEAP.heap_get_tag(address) === Tag.Undefined_tag;
  private is_Number = (address) =>
    this.HEAP.heap_get_tag(address) === Tag.Number_tag;
  private is_String = (address) =>
    this.HEAP.heap_get_tag(address) === Tag.String_tag;
  private is_Pointer = (address) =>
    this.HEAP.heap_get_tag(address) === Tag.Pointer_tag;

  private word_to_string = (word) => {
    const buf = new ArrayBuffer(8);
    const view = new DataView(buf);
    view.setFloat64(0, word);
    let binStr = "";
    for (let i = 0; i < 8; i++) {
      binStr += ("00000000" + view.getUint8(i).toString(2)).slice(-8) + " ";
    }
    return binStr;
  };

  private heap_allocate_Number = (n) => {
    const number_address = this.HEAP.heap_allocate(Tag.Number_tag, 2);
    this.HEAP.heap_set(number_address + 1, n);
    return number_address;
  };

  private heap_allocate_Pointer = (pos) => {
    const pointer_address = this.HEAP.heap_allocate(Tag.Pointer_tag, 3);
    this.HEAP.heap_set(pointer_address + 1, pos[0]);
    this.HEAP.heap_set(pointer_address + 2, pos[1]);
    return pointer_address;
  };

  private string_pool = [];
  private string_pool_map = {};
  private default_owner_frame = -1;
  private default_owner_value = -1;
  // string
  // [1 byte tag, 2 byte address of string in the str pool, 2 bytes unused,
  // 2 bytes #children, 1 byte unused]

  // alternative [1 byte tag, 2 byte address, 5 bytes unused]
  // followed by two indexes of the the owner (frame and )
  private heap_allocate_String = (str) => {
    const string_pool_add = (str) => {
      if (this.string_pool_map.hasOwnProperty(str)) {
        return this.string_pool_map[str];
      } else {
        const id = this.string_pool.length;
        this.string_pool_map[str] = id;
        this.string_pool.push(str);
        return id;
      }
    };

    const address = this.HEAP.heap_allocate(Tag.String_tag, 3);
    const id = string_pool_add(str);
    this.HEAP.heap_set_2_bytes_at_offset(address, 1, id);

    this.HEAP.heap_set(address + 1, this.default_owner_frame);
    this.HEAP.heap_set(address + 2, this.default_owner_value);
    return address;
  };

  // closure
  // [1 byte tag, 1 byte arity, 2 bytes pc, 1 byte unused,
  //  2 bytes #children, 1 byte unused]
  // followed by the address of env
  // note: currently bytes at offset 4 and 7 are not used;
  //   they could be used to increase pc and #children range

  private heap_allocate_Closure = (arity, pc, env) => {
    const address = this.HEAP.heap_allocate(Tag.Closure_tag, 2);
    this.HEAP.heap_set_byte_at_offset(address, 1, arity);
    this.HEAP.heap_set_2_bytes_at_offset(address, 2, pc);
    this.HEAP.heap_set(address + 1, env);
    return address;
  };

  private heap_get_Closure_arity = (address) =>
    this.HEAP.heap_get_byte_at_offset(address, 1);

  private heap_get_Closure_pc = (address) =>
    this.HEAP.heap_get_2_bytes_at_offset(address, 2);

  private heap_get_Closure_environment = (address) =>
    this.HEAP.heap_get_child(address, 0);

  private is_Closure = (address) =>
    this.HEAP.heap_get_tag(address) === Tag.Closure_tag;

  // block frame
  // [1 byte tag, 4 bytes unused,
  //  2 bytes #children, 1 byte unused]
  // followed by address of env

  private heap_allocate_Blockframe = (env) => {
    const address = this.HEAP.heap_allocate(Tag.Blockframe_tag, 2);
    this.HEAP.heap_set(address + 1, env);
    return address;
  };

  private heap_get_Blockframe_environment = (address) =>
    this.HEAP.heap_get_child(address, 0);

  private is_Blockframe = (address) =>
    this.HEAP.heap_get_tag(address) === Tag.Blockframe_tag;

  // call frame
  // [1 byte tag, 1 byte unused, 2 bytes pc,
  //  1 byte unused, 2 bytes #children, 1 byte unused]
  // followed by the address of env

  private heap_allocate_Callframe = (env, pc) => {
    const address = this.HEAP.heap_allocate(Tag.Callframe_tag, 2);
    this.HEAP.heap_set_2_bytes_at_offset(address, 2, pc);
    this.HEAP.heap_set(address + 1, env);
    return address;
  };

  private heap_get_Callframe_environment = (address) =>
    this.HEAP.heap_get_child(address, 0);

  private heap_get_Callframe_pc = (address) =>
    this.HEAP.heap_get_2_bytes_at_offset(address, 2);

  private is_Callframe = (address) =>
    this.HEAP.heap_get_tag(address) === Tag.Callframe_tag;

  // environment frame
  // [1 byte tag, 4 bytes unused,
  //  2 bytes #children, 1 byte unused]
  // followed by the addresses of its values

  private heap_allocate_Frame = (number_of_values) =>
    this.HEAP.heap_allocate(Tag.Frame_tag, number_of_values + 1);

  // environment
  // [1 byte tag, 4 bytes unused,
  //  2 bytes #children, 1 byte unused]
  // followed by the addresses of its frames

  private heap_allocate_Environment = (number_of_frames) =>
    this.HEAP.heap_allocate(Tag.Environment_tag, number_of_frames + 1);

  private heap_empty_Environment = this.heap_allocate_Environment(0);

  // access environment given by address
  // using a "position", i.e. a pair of
  // frame index and value index
  private heap_get_Environment_value = (env_address, position) => {
    const [frame_index, value_index] = position;
    const frame_address = this.HEAP.heap_get_child(env_address, frame_index);
    return this.HEAP.heap_get_child(frame_address, value_index);
  };

  private heap_set_Environment_value = (env_address, position, value) => {
    //display(env_address, "env_address:")
    const [frame_index, value_index] = position;
    const frame_address = this.HEAP.heap_get_child(env_address, frame_index);
    this.HEAP.heap_set_child(frame_address, value_index, value);
  };

  // extend a given environment by a new frame:
  // create a new environment that is bigger by 1
  // frame slot than the given environment.
  // copy the frame Addresses of the given
  // environment to the new environment.
  // enter the address of the new frame to end
  // of the new environment
  private heap_Environment_extend = (frame_address, env_address) => {
    const old_size = this.HEAP.heap_get_size(env_address);
    const new_env_address = this.heap_allocate_Environment(old_size);
    let i;
    for (i = 0; i < old_size - 1; i++) {
      this.HEAP.heap_set_child(
        new_env_address,
        i,
        this.HEAP.heap_get_child(env_address, i)
      );
    }
    this.HEAP.heap_set_child(new_env_address, i, frame_address);
    return new_env_address;
  };

  private JS_value_to_address = (x) => {
    console.log("this is x from JS_value_to_address: ", x, " with type of", typeof x)
    return x === undefined
      ? this.Undefined
      : typeof x === "boolean"
      ? x
        ? this.True
        : this.False
      : typeof x === "number"
      ? this.heap_allocate_Number(x)
      : typeof x === "object"
      ? this.heap_allocate_Pointer(x)
      : typeof x === "string"
      ? this.heap_allocate_String(x)
      : "unknown word tag from JS_value_to_address: " + x;
  };

  private address_to_JS_value = (x) => {
    return this.is_Boolean(x)
      ? this.is_True(x)
        ? true
        : false
      : this.is_Number(x)
      ? this.HEAP.heap_get(x + 1)
      : this.is_String(x)
      ? this.string_pool[this.HEAP.heap_get_2_bytes_at_offset(x, 1)]
      : this.is_Closure(x)
      ? "<closure>"
      : this.is_Pointer(x)
      ? [this.HEAP.heap_get(x + 1), this.HEAP.heap_get(x + 2)]
      : this.is_Undefined(x)
      ? undefined
      : "unknown word tag: " + x;
  };

  public constructor(instrs: Instruction[]) {
    this.instrs = instrs;
  }

  public execute() {
    // console.log("try")
    const frame_address = this.heap_allocate_Frame(0);
    this.E = this.heap_Environment_extend(
      frame_address,
      this.heap_empty_Environment
    );
    // console.log(`Initial environment at ${this.E}`)
    while (this.instrs[this.PC].tag !== "DONE") {
      // console.log(`Current environment at ${this.E} at PC ${this.PC}`)
      const instr = this.instrs[this.PC++];
      this.microcode[instr.tag](instr);
    }

    console.log("Final OS ", this.OS);

    if (this.OS.length > 0) {
      return this.address_to_JS_value(this.peek(this.OS, 0).val);
    } else {
      return undefined;
    }
  }

  private push = (array, ...items) => {
    for (let item of items) {
      array.push(item);
    }
    return array;
  };

  private apply_unop = (op, v) =>
    this.JS_value_to_address(
      this.unop_microcode[op](this.address_to_JS_value(v))
    );

  private apply_binop = (op, v1, v2) => {
    // console.log("apply binop with values of ", v1)
    return this.JS_value_to_address(
      this.binop_microcode[op](
        this.address_to_JS_value(v1),
        this.address_to_JS_value(v2)
      )
    );
  };

  private unop_microcode = {
    "-": (x) => -x,
    "!": (x) => !x,
    "&": (x) => x,
    "*": (x) =>
      this.address_to_JS_value(this.heap_get_Environment_value(this.E, x)),
  };

  private binop_microcode = {
    "+": (x, y) => x + y,
    "*": (x, y) => x * y,
    "-": (x, y) => x - y,
    "/": (x, y) => x / y,
    "%": (x, y) => x % y,
    "<": (x, y) => x < y,
    "<=": (x, y) => x <= y,
    ">=": (x, y) => x >= y,
    ">": (x, y) => x > y,
    "==": (x, y) => x === y,
    "!=": (x, y) => x !== y,
  };

  private extend = (xs, vs, e) => {
    if (vs.length > xs.length) throw new Error("too many arguments");
    if (vs.length < xs.length) throw new Error("too few arguments");
    const new_frame = {};
    for (let i = 0; i < xs.length; i++) new_frame[xs[i]] = vs[i];
    return [new_frame, ...e];
  };

  private lookup = (x, E) => {
    for (let i = 0; i < E.length; i++) {
      let e = E[i];
      if (e.hasOwnProperty(x)) {
        const v = e[x];
        if (v === this.unassigned)
          throw new Error(`unassigned name:${x} at ${this.PC}`);
        return v;
      }
    }
    throw new Error(`unbound name:${x} at ${this.PC}`);
  };

  private assign_value(x, v, E) {
    for (let i = 0; i < E.length; i++) {
      let e = E[i];
      if (e.hasOwnProperty(x)) {
        e[x] = v;
        return undefined;
      }
    }
    // console.log(this.E);
    throw new Error(`unbound name: ${x} at ${this.PC}`);
  }

  private peek = (array, address) => array.slice(-1 - address)[0];

  private microcode = {
    LDC: (instr) =>
      this.push(this.OS, { val: this.JS_value_to_address(instr.val) }),
    UNOP: (instr) => {
      if (instr.sym === "&mut") {
        const pos = this.OS.pop().pos;
        return this.push(this.OS, { val: this.JS_value_to_address(pos) });
      }
      return this.push(this.OS, {
        val: this.apply_unop(instr.sym, this.OS.pop().val),
      });
    },
    BINOP: (instr) => {
      // console.log("BINOP microcode with OS of", this.OS)
      const val2 = this.OS.pop().val;
      const val1 = this.OS.pop().val;
      return this.push(this.OS, {
        val: this.apply_binop(instr.sym, val1, val2),
      });
    },
    POP: (instr) => this.OS.pop(),
    JOF: (instr) =>
      (this.PC = this.is_True(this.OS.pop().val) ? this.PC : instr.addr),
    GOTO: (instr) => (this.PC = instr.addr),
    ENTER_SCOPE: (instr) => {
      this.push(this.RTS, this.heap_allocate_Blockframe(this.E));
      // console.log(`E1: Current free pointer at ${this.HEAP.free}, current environment at ${this.E}`)
      const frame_address = this.heap_allocate_Frame(instr.num);
      // console.log(`E2: Current free pointer at ${this.HEAP.free}, current environment at ${this.E}`)
      this.E = this.heap_Environment_extend(frame_address, this.E);
      for (let i = 0; i < instr.num; i++) {
        this.HEAP.heap_set_child(frame_address, i, this.Unassigned);
      }
      // console.log(`E3: Current free pointer at ${this.HEAP.free}, current environment at ${this.E} at PC ${this.PC}`)
      // console.log("ENTER_SCODE succ")
    },
    EXIT_SCOPE: (instr) => {
      this.E = this.heap_get_Blockframe_environment(this.RTS.pop());
      // console.log("EXIT_SCOPE succ");
    },
    LD: (instr) => {
      let val;
      // console.log("LD instruction random")
      val = this.heap_get_Environment_value(this.E, instr.pos);
      // console.log("environment value of LD", val)
      if (this.is_Unassigned(val)) {
        // console.log("unassigned error instruction:", instr)
        throw new Error("access of unassigned variable");
      }
      this.push(this.OS, { val: val, pos: instr.pos });
    },
    ASSIGN: (instr) => {
      const heap_node_addr = this.peek(this.OS, 0).val;
      this.heap_set_Environment_value(this.E, instr.pos, heap_node_addr);
    },
    ASSIGN_PTR: (instr) => {
      // dereference the pointer
      const heap_node_addr = this.peek(this.OS, 0).val;
      const pos = this.heap_get_Environment_value(this.E, instr.pos);
      this.heap_set_Environment_value(this.E, this.address_to_JS_value(pos), heap_node_addr);
    },
    LDF: (instr) => {
      const closure_address = this.heap_allocate_Closure(
        instr.arity,
        instr.addr,
        this.E
      );
      this.push(this.OS, { val: closure_address });
    },
    CALL: (instr) => {
      // console.log("Call Microcode", instr)
      const arity = instr.arity;
      const fun = this.peek(this.OS, arity).val;
      const frame_address = this.heap_allocate_Frame(arity);
      for (let i = arity - 1; i >= 0; i--) {
        const popped_value = this.OS.pop().val;
        this.HEAP.heap_set_child(frame_address, i, popped_value);
      }
      this.OS.pop(); // pop fun
      this.push(this.RTS, this.heap_allocate_Callframe(this.E, this.PC));
      this.E = this.heap_Environment_extend(
        frame_address,
        this.heap_get_Closure_environment(fun)
      );
      this.PC = this.heap_get_Closure_pc(fun);
    },
    TAIL_CALL: (instr) => {
      const arity = instr.arity;
      const fun = this.peek(this.OS, arity).val;
      // NO BUILTIN FUNCTIONS YET
      // if (is_Builtin(fun)) {
      //   return this.apply_builtin(this.heap_get_Builtin_id(fun));
      // }
      const frame_address = this.heap_allocate_Frame(arity);
      for (let i = arity - 1; i >= 0; i--) {
        this.HEAP.heap_set_child(frame_address, i, this.OS.pop().val);
      }
      this.OS.pop(); // pop fun
      // don't push on RTS here
      this.E = this.heap_Environment_extend(
        frame_address,
        this.heap_get_Closure_environment(fun)
      );
      this.PC = this.heap_get_Closure_pc(fun);
    },
    RESET: (instr) => {
      this.PC--;
      // keep popping...
      const top_frame = this.RTS.pop();
      if (this.is_Callframe(top_frame)) {
        // ...until top frame is a call frame
        this.PC = this.heap_get_Callframe_pc(top_frame);
        this.E = this.heap_get_Callframe_environment(top_frame);
      }
    },
  };
}

export default RustIdealizedVM;

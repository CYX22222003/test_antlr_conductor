export type Type =
  | "num"
  | "bool"
  | "string"
  | { type: "function"; params: Type[]; returnType: Type }
  | null
  | "undefined-CYX";

export type ParameterType = {
  name: string;
  type: Type;
};

export class Environment {
  private symbols: Map<string, Type> = new Map();
  public parent: Environment = null;

  public declare(name: string, type: Type): void {
    if (this.symbols.has(name)) {
      throw new Error(`Symbol '${name}' is already declared in this scope.`);
    }
    this.symbols.set(name, type);
  }

  public lookup(name: string): Type | null {
    if (this.symbols.has(name)) {
      return this.symbols.get(name)!;
    } else if (this.parent) {
      return this.parent.lookup(name);
    } else {
      return null;
    }
  }
}

export type TypeOwnership = {
  type: Type;
  ownershipFlag?: boolean;
  referenceFlag?: boolean;
  paramsTypeOwnership?: TypeOwnership[];
  returnTypeOwnership?: TypeOwnership;
};

export type ParameterTypeOwnership = {
  name: string;
  typeOwnership: TypeOwnership;
};

export class OwnershipEnvironment {
  private symbols: Map<string, TypeOwnership> = new Map();
  public parent: OwnershipEnvironment = null;

  public declare(name: string, type: TypeOwnership): void {
    if (this.symbols.has(name)) {
      throw new Error(`Symbol '${name}' is already declared in this scope.`);
    }
    this.symbols.set(name, type);
  }

  public lookup(name: string): TypeOwnership | null {
    if (this.symbols.has(name)) {
      return this.symbols.get(name)!;
    } else if (this.parent) {
      return this.parent.lookup(name);
    } else {
      return null;
    }
  }

  public isInClosestEnvironment(name: string): boolean {
    return this.symbols.has(name);
  }
}

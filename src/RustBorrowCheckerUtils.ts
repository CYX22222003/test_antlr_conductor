import { Type } from "./RustLangTypeCheckerUtils"

export type TypeOwnership = {
    type: Type,
    ownershipFlag?: boolean
    paramsTypeOwnership?: TypeOwnership[]
    returnTypeOwnership?: TypeOwnership
}

export type ParameterTypeOwnership = {
    name: string,
    typeOwnership: TypeOwnership
}

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
}
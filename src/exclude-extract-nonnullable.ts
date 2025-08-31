export {};

type DebugType = () => void;
type someTypes = string | number | DebugType;

type FunctionType = Exclude<someTypes, string | number>;
type nonFunctionType = Exclude<someTypes, DebugType>;
type TypeExcludingFunction = Exclude<someTypes, Function>;

type FunctionTypeByExtract = Extract<someTypes, DebugType>;
type nonFunctionTypeByExtract = Extract<someTypes, string | number>;
type FunctionTypeByExtractingFunction = Extract<someTypes, Function>;

type NullableType = string | number | null | undefined;
type NonNullableType = NonNullable<NullableType>;
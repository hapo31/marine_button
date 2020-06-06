export type ObjectArg<T> = Partial<T>;

export default function CreateObjectWithDefaultValue<
  SrcObject extends Record<string, unknown>
>(
  optsDefault: SrcObject,
  optsValue?: ObjectArg<SrcObject> | Partial<SrcObject>
): SrcObject {
  return optsValue == null
    ? optsDefault
    : Object.assign({
        ...optsDefault,
        ...optsValue,
      });
}

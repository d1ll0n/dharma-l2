import { ClassDef, BufferLike } from "../TypeDef";
import { DefinedClass, FieldsInput } from "../DefinedClass";

import { PrefixType, HardTransactionIndexType, ToIndexType, ValueType, ToAddressType, StateRootType, FromIndexType } from './Overrides'

const HardCreateType = <ClassDef> {
  bytes: 49,
  fields: [
    PrefixType,               // 1 byte
    HardTransactionIndexType, // 5 bytes
    FromIndexType,            // 4 bytes
    ValueType,                // 7 bytes
    StateRootType             // 32 bytes
  ]
}

export class HardCreate extends DefinedClass {
  public prefix: number;
  public hardTransactionIndex: number;
  public fromIndex: number;
  public value: number;
  public stateRoot: string;

  constructor(options: FieldsInput) {
    super(HardCreateType, options);
  }

  static decode(input: BufferLike): HardCreate {
    return <HardCreate> this._decode(input, HardCreateType);
  }
}
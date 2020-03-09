import { TypeDef, BufferLike } from './TypeDef';

import { DefinedType } from './DefinedType';

export const AddressType = <TypeDef> {
  bytes: 20,
  defaultGetType: 'hex',
  allowEmpty: true,
  default: Buffer.alloc(20, 0),
  name: 'address'
};

export class Address extends DefinedType {
  constructor(input?: BufferLike) {
    super(AddressType, input);
  }
}
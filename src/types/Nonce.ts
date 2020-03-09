import { TypeDef, BufferLike } from './TypeDef';

import { DefinedType } from './DefinedType';

export const NonceType = <TypeDef> {
  bytes: 3,
  defaultGetType: 'number',
  allowEmpty: true,
  default: Buffer.alloc(3, 0),
  name: 'nonce'
};

export class Nonce extends DefinedType {
  constructor(input?: BufferLike) {
    super(NonceType, input);
  }
}
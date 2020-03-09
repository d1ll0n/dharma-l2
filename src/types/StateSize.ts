import { TypeDef, BufferLike } from './TypeDef';

import { DefinedType } from './DefinedType';

export const StateSizeType = <TypeDef> {
  bytes: 4,
  defaultGetType: 'number',
  allowEmpty: true,
  default: Buffer.alloc(4, 0),
  name: 'stateSize'
};

export class StateSize extends DefinedType {
  constructor(input?: BufferLike) {
    super(StateSizeType, input);
  }
}
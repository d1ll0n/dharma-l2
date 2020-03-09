import { TypeDef, BufferLike } from './TypeDef';

import { DefinedType } from './DefinedType';

export const CurrencyAmountType = <TypeDef> {
  bytes: 7,
  defaultGetType: 'number',
  allowEmpty: true,
  default: Buffer.alloc(7, 0),
  name: 'amount'
};

export class CurrencyAmount extends DefinedType {
  constructor(input?: BufferLike) {
    super(CurrencyAmountType, input);
  }
}
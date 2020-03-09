import * as test from "tape";
import {CurrencyAmount} from '../src/types/CurrencyAmount';
import { setLength } from "ethereumjs-util";

test("Test CurrencyAmount", (t) => {
  let v: CurrencyAmount;
  const goodValue = 100;
  const badValue = 2**56;
  
  t.test("Creates CurrencyAmount from integer", (st) => {
    v = new CurrencyAmount(goodValue)
    st.equals(v.toNumber(), goodValue);
    st.end()
  });

  t.test("Throws error on value too high", (st) => {
    st.equals(v.toNumber(), goodValue);
    try {
      v.value = badValue;
      throw new Error('Should have thrown.')
    } catch (err) {
      st.equals(err.toString(), `Error: Input too large. Maximum ${7} bytes, value had ${8}`)
    }
    st.end()
  });
  
  t.test("Converts to hex", (st) => {
    st.equals(v.toHex(), '0x64')
    st.end()
  })

  t.test("Converts to buffer", (st) => {
    let buf = setLength(Buffer.from('64', 'hex'), 7);
    st.deepEquals(v.toBuffer(), buf)
    st.equals(buf.length, 7)
    st.end()
  })
  t.end();
})
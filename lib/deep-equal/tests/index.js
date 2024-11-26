var tape = require("tape");

var deepEqual = require("..");

tape.test('deepEqual - monkey patched Buffer', function (test) {
  test.equal(deepEqual(Buffer.from("2"), Buffer.from("2")), true, "should equal same buffer values");
  test.equal(deepEqual(new Uint8Array([23, 31]), new Uint8Array([23, 31])), true, "should equal same Uint8Array values");
  test.equal(deepEqual(new Uint8Array([23, 31]), [23, 31]), true, "should equal Uint8Aray and Array values");

  test.equal(deepEqual(Buffer.from("2"), "2"), false, "should not equal different types");
  test.equal(deepEqual(Buffer.from("2"), Buffer.from("13")), false, "should not equal different buffer values");
  test.equal(deepEqual(Buffer.from("1234"), Buffer.from("12343")), false, "should not equal different buffer values");

  test.end();
});
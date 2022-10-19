const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test('it should return a string', ()=>{
    expect(typeof addCommas(10)).toEqual('string');
    expect(typeof addCommas(1000)).toEqual('string');
    expect(typeof addCommas(-1000000000)).toEqual('string');
  })

  test('3 or less digits have no comma', () =>{
    expect(addCommas(1)).toEqual('1');
    expect(addCommas(10)).toEqual('10');
    expect(addCommas(100)).toEqual('100');
  })

  test('more than 3 digits should include a comma', ()=>{
    expect(addCommas(100)).toEqual('100');
    expect(addCommas(1000)).toEqual('1,000');
    expect(addCommas(10000)).toEqual('10,000');
    expect(addCommas(100000)).toEqual('100,000');
    expect(addCommas(1900600300)).toEqual('1,900,600,300');
  });

  test('it works with negative numbers', ()=>{
    expect(addCommas(-100)).toEqual('-100');
    expect(addCommas(-1100)).toEqual('-1,100');
    expect(addCommas(-1900600300)).toEqual('-1,900,600,300');
  });
});

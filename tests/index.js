const test = require('ava');
const dig = require('../dist/index.js').default;

test('test deep search found', t => {
  const testObj = [
    { x: Symbol('hi'), symbol: 'es', a: { b: '#c' }, c: () => {}, f: String('X'), y: Number(99) },
    { symbol: '#test1' },
    { symbol: 'testx2' },
    { symbol: '#test3', b: null },
    { symbol: 'testX4' },
    [ 'yo', 'dawg']
  ];

  testObj[1].cyclic = testObj;

  const actual = dig.deepFilter(testObj, (v) => `${v}`.toLowerCase().indexOf('x'.toLowerCase()) > -1);
  const expected = '[{"symbol":"es","a":{"b":"#c"},"f":"X","y":99},{"symbol":"testx2"},{"symbol":"testX4"}]';
  t.is(expected, JSON.stringify(actual));

});

test('test deep search object also works', t => {
  const testObj = {
    a: { x: Symbol('hi'), symbol: 'es', a: { b: '#c' }, c: () => {}, f: String('X'), y: Number(99) },
    b: { symbol: '#test1' },
    c: { symbol: 'testx2' },
    d: { symbol: '#test3', b: null },
    e: { symbol: 'testX4' }
  };

  testObj.b.cyclic = testObj;

  const actual = dig.deepFilter(testObj, (v) => `${v}`.toLowerCase().indexOf('x'.toLowerCase()) > -1);
  const expected = '[{"symbol":"es","a":{"b":"#c"},"f":"X","y":99},{"symbol":"testx2"},{"symbol":"testX4"}]';
  t.is(expected, JSON.stringify(actual));

});

test('test deep search not found', t => {
  const testObj = [
    { x: Symbol('hi'), symbol: 'es', a: { b: '#c' }, c: () => {}, f: String('X'), y: Number(99) },
    { symbol: '#test1' },
    { symbol: 'testx2' },
    { symbol: '#test3' },
    { symbol: 'testX4' },
  ];

  testObj.cyclic = testObj;

  let actual = testObj.filter((item) =>
    dig.deepValues(item).some((v) => `${v}`.toLowerCase().indexOf('yo'.toLowerCase()) > -1)
  );
  const expected = '[]';

  t.is(expected, JSON.stringify(actual));

});


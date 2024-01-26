# deep values
> deep capture version of Object.values  


## Why?
> In the modern day, let say we want to do things like the old angularjs filter function?

```ts
import deepValues from 'deep-values'

const req: any[] = [
  { x: Symbol('hi'), symbol: 'es', a: { b: '#c' }, c: () => {}, f: String('X'), y: Number(1) },
  { symbol: '#test1' },
  { symbol: 'testx2' },
  { symbol: '#test3', b: null },
  { symbol: 'testX4' },
];

// not case-sensitive `string.contains` search
let result: any[] = req.filter((item) =>
  // note: we want to pass the original object in as array item of stack/2nd parameter
  // to prevent cyclic issue
  deepValues(item).some((v) => `${v}`.toLowerCase().indexOf('x'.toLowerCase()) > -1)
);

console.log(result); /*
[
  {
    x: Symbol(hi),
    symbol: 'es',
    a: { b: '#c' },
    c: [Function: c],
    f: 'X',
    y: 1
  },
  { symbol: 'testx2' },
  { symbol: 'testX4' }
]
*/

// JSON.stringify filter, case-sensitive `string.contains` search
result = req.filter((item) => JSON.stringify(item).indexOf('x') > -1);

console.log(result); // [ { symbol: 'testx2' } ]

req[0].win = window;

result = req.filter((item) =>
  // note: we want to pass the original object in as array item of stack/2nd parameter
  // to prevent cyclic issue
  deepValues(item).some((v) => `${v}`.toLowerCase().indexOf('x'.toLowerCase()) > -1)
);

console.log('clear'); // cyclic or window object works fine

// while JSON.stringify result in Error: cyclic object value
result = req.filter((item) => JSON.stringify(item).indexOf('x') > -1);

```

## Install

```bash
$ npm install deep-values
```

## MIT

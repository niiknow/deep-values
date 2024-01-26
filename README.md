# deep values
> deep capture version of Object.values  


## Why?
> In the modern day, let say we want to do things like the old angularjs filter function?

```ts
import { deepFilter, deepValues } from 'deep-values'

const req: any[] = [
  { x: Symbol('hi'), symbol: 'es', a: { b: '#c' }, c: () => {}, f: String('X'), y: Number(1) },
  { symbol: '#test1' },
  { symbol: 'testx2' },
  { symbol: '#test3', b: null },
  { symbol: 'testX4' },
];

// not case-sensitive `string.contains` search with deepValues
let result: any[] = req.filter((item) =>
  // note: we want to pass the original object in as array item of stack/2nd parameter
  // as with `[req]` to prevent cyclic issue
  deepValues(item, [req]).some((v) => `${v}`.toLowerCase().indexOf('x'.toLowerCase()) > -1)
);

// or use: deepFilter(req, (v) => `${v}`.toLowerCase().indexOf('x'.toLowerCase()) > -1);

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

result = deepFilter(req, (v) => `${v}`.toLowerCase().indexOf('x'.toLowerCase()) > -1);

console.log('clear'); // cyclic or window object works fine

// while JSON.stringify result in Error: cyclic object value
result = req.filter((item) => JSON.stringify(item).indexOf('x') > -1);

```

See typescript file for methods [usage/definition](dist/index.d.ts)

## Install

```bash
$ npm install deep-values
```

## Signature
```ts

```
## Note
```html
<!-- old angularjs days -->
<!-- simple -->
<div ng-repeat="product in products | filter:{ colour: 'red' }"> 
<!-- advanced -->
<div ng-repeat="product in products | filter:'x'"> 


<!-- modern day alpinejs -->
<!-- simple with built-in Array.filter function -->
<div x-for="product in products.filter(item => item.colour === 'red')"> 

<!-- advanced -->
<div x-for="product in deepFilter(item, v => `${v}`.toLowerCase().indexOf('x'.toLowerCase()) > -1)">

```

## MIT

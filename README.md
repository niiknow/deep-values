# deepValues and deepFilter
- `deepValues` capture version of Object.values that return all object's primative values
- `deepFilter` piggy-back on `deepValues` to allow for deep filtering on object's primative values

Finally, we keep it simple (KISS/xoxo) and 0(zero)/no dependency.

## Install

```bash
$ npm install deep-values
```

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
  deepValues(item, [req]).some((v) => `${v}`.toLowerCase().indexOf('x') > -1)
);

// or use: deepFilter(req, (v) => `${v}`.toLowerCase().indexOf('x') > -1);

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

result = deepFilter(req, (v) => `${v}`.toLowerCase().indexOf('x') > -1);

console.log('clear'); // cyclic or window object works fine

// while JSON.stringify result in Error: cyclic object value
result = req.filter((item) => JSON.stringify(item).indexOf('x') > -1);

```

See typescript file for methods [usage/definition](dist/index.d.ts)


## Examples
```html
<!-- old angularjs days -->
<!-- simple -->
<div ng-repeat="product in products | filter:{ colour: 'red' }"> 
<!-- advanced: let say product.departments[].name or product.location can both
contains the word pharmacy/Pharmacy -->
<div ng-repeat="product in products | filter:'pharmacy'"> 


<!-- modern day alpinejs -->
<!-- simple with built-in Array.filter function -->
<div x-for="product in products.filter(item => item.colour === 'red')"> 
 
<!-- advanced: let say product.departments[].name or product.location can both
contains the word pharmacy/Pharmacy -->
<div x-for="product in deepFilter(products, v => `${v}`.toLowerCase().indexOf('pharmacy') > -1)">

<!-- obvious, we would simply use v-for in Vuejs -->
<div v-for="product in deepFilter(products, v => `${v}`.toLowerCase().indexOf('pharmacy') > -1)">

```

> And in reactjs, we would use the `map` function like in regular javascript or example below with JSX templating:
```JSX
  return (
    <ul>
      {deepFilter(products, v => `${v}`.toLowerCase().indexOf('pharmacy') > -1).map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ul>
  );

```

## MIT

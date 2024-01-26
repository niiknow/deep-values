/**
 * return all values of source
 *
 * @param  {any}   source
 * @param  {any[] = new Array() }  stack   optional array to track all objects we processed
 * @return {any[]}        array of values
 */

function deepValues(source: any, stack: any[] = new Array()): any[] {
  let result: any[] = [],
    values: any[] = source,
    sourceType: string = source === null ? 'null' : typeof source;

  if ((source && source.window === source) || stack.includes(source)) {
    sourceType = 'cyclic';
  } else if (Array.isArray(source) || source instanceof Array) {
    sourceType = 'array';
  }

  stack.push(source);

  switch (sourceType) {
    case 'string':
    case 'number':
    case 'bigint':
    case 'boolean':
      // simply return known primitives
      result.push(source);
      break;

    // @ts-ignore TS2445
    case 'object':
      // convert object to array
      values = Object.values(source);
    case 'array':
      // deepValues all
      values.forEach((v) => (result = result.concat(deepValues(v, stack))));
      break;
    default:
      // else, ignore all example: null, undefined, function, symbol
      break;
  }

  return result;
}

export default deepValues;

/**
 * deep return all primative values of an object
 *
 * @param  {any}   source    can be anything, including primatives, object or array
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


/**
 * helper method to deep filtering an array
 * this basically short-cutting the usage of deepValues
 *
 * @param  {T[] | T[]}     source  array of specific type
 * @param  {(any, number, any[]) => boolean }     valueFilterFn  predicate filtering on the Object primative values
 * @return {T[]}            items matching filter in array
 */
function deepFilter<T>(source: T | T[], valueFilterFn: (value: any, index: number, object: any[]) => boolean): T[] {

  if ((Array.isArray(source) || source instanceof Array)) {
    return source.filter(item => deepValues(item, [source]).some(valueFilterFn));
  }

  let myArray = Object.values(source);

  return myArray.filter(item => deepValues(item, [source, myArray]).some(valueFilterFn));
}

export default { deepValues, deepFilter };

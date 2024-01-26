/**
 * deep return all primative values of an object
 *
 * @param  {any}   source
 * @param  {any[] = new Array() }  stack   optional array to track all objects we processed
 * @return {any[]}        array of values
 */
declare function deepValues(source: any, stack?: any[]): any[];
export default deepValues;

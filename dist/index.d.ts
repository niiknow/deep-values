/**
 * deep return all primative values of an object
 *
 * @param  {any}   source    can be anything, including primatives, object or array
 * @param  {any[] = new Array() }  stack   optional array to track all objects we processed
 * @return {any[]}        array of values
 */
declare function deepValues(source: any, stack?: any[]): any[];
/**
 * helper method to deep filtering an array
 * this basically short-cutting the usage of deepValues
 *
 * @param  {T[] | T[]}     source  array of specific type
 * @param  {(any, number, any[]) => boolean }     valueFilterFn  predicate filtering on the Object primative values
 * @return {T[]}            items matching filter in array
 */
declare function deepFilter<T>(source: T | T[], valueFilterFn: (value: any, index: number, object: any[]) => boolean): T[];
declare const _default: {
    deepValues: typeof deepValues;
    deepFilter: typeof deepFilter;
};
export default _default;

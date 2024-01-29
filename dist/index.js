"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * deep return all primative values of an object
 *
 * @param  {any}   source    can be anything, including primatives, object or array
 * @param  {any[] = new Array() }  stack   optional array to track all objects we processed
 * @return {any[]}        array of values
 */
function deepValues(source, stack) {
    if (stack === void 0) { stack = new Array(); }
    var result = [], values = source, sourceType = source === null ? 'null' : typeof source;
    if ((source && source.window === source) || stack.includes(source)) {
        sourceType = 'cyclic';
    }
    else if (Array.isArray(source) || source instanceof Array) {
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
            values.forEach(function (v) { return (result = result.concat(deepValues(v, stack))); });
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
function deepFilter(source, valueFilterFn) {
    if ((Array.isArray(source) || source instanceof Array)) {
        return source.filter(function (item) { return deepValues(item, [source]).some(valueFilterFn); });
    }
    var myArray = Object.values(source);
    return myArray.filter(function (item) { return deepValues(item, [source, myArray]).some(valueFilterFn); });
}
exports.default = { deepValues: deepValues, deepFilter: deepFilter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0dBTUc7QUFDSCxTQUFTLFVBQVUsQ0FBQyxNQUFXLEVBQUUsS0FBMEI7SUFBMUIsc0JBQUEsRUFBQSxZQUFtQixLQUFLLEVBQUU7SUFDekQsSUFBSSxNQUFNLEdBQVUsRUFBRSxFQUNwQixNQUFNLEdBQVUsTUFBTSxFQUN0QixVQUFVLEdBQVcsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQztJQUVoRSxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25FLFVBQVUsR0FBRyxRQUFRLENBQUM7SUFDeEIsQ0FBQztTQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLFlBQVksS0FBSyxFQUFFLENBQUM7UUFDNUQsVUFBVSxHQUFHLE9BQU8sQ0FBQztJQUN2QixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVuQixRQUFRLFVBQVUsRUFBRSxDQUFDO1FBQ25CLEtBQUssUUFBUSxDQUFDO1FBQ2QsS0FBSyxRQUFRLENBQUM7UUFDZCxLQUFLLFFBQVEsQ0FBQztRQUNkLEtBQUssU0FBUztZQUNaLGlDQUFpQztZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLE1BQU07UUFFUixvQkFBb0I7UUFDcEIsS0FBSyxRQUFRO1lBQ1gsMEJBQTBCO1lBQzFCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLEtBQUssT0FBTztZQUNWLGlCQUFpQjtZQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO1lBQ3RFLE1BQU07UUFDUjtZQUNFLDhEQUE4RDtZQUM5RCxNQUFNO0lBQ1YsQ0FBQztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsU0FBUyxVQUFVLENBQUksTUFBZSxFQUFFLGFBQW9FO0lBRTFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sWUFBWSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3ZELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXBDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQXZELENBQXVELENBQUMsQ0FBQztBQUN6RixDQUFDO0FBRUQsa0JBQWUsRUFBRSxVQUFVLFlBQUEsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBkZWVwIHJldHVybiBhbGwgcHJpbWF0aXZlIHZhbHVlcyBvZiBhbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0gIHthbnl9ICAgc291cmNlICAgIGNhbiBiZSBhbnl0aGluZywgaW5jbHVkaW5nIHByaW1hdGl2ZXMsIG9iamVjdCBvciBhcnJheVxuICogQHBhcmFtICB7YW55W10gPSBuZXcgQXJyYXkoKSB9ICBzdGFjayAgIG9wdGlvbmFsIGFycmF5IHRvIHRyYWNrIGFsbCBvYmplY3RzIHdlIHByb2Nlc3NlZFxuICogQHJldHVybiB7YW55W119ICAgICAgICBhcnJheSBvZiB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gZGVlcFZhbHVlcyhzb3VyY2U6IGFueSwgc3RhY2s6IGFueVtdID0gbmV3IEFycmF5KCkpOiBhbnlbXSB7XG4gIGxldCByZXN1bHQ6IGFueVtdID0gW10sXG4gICAgdmFsdWVzOiBhbnlbXSA9IHNvdXJjZSxcbiAgICBzb3VyY2VUeXBlOiBzdHJpbmcgPSBzb3VyY2UgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2Ygc291cmNlO1xuXG4gIGlmICgoc291cmNlICYmIHNvdXJjZS53aW5kb3cgPT09IHNvdXJjZSkgfHwgc3RhY2suaW5jbHVkZXMoc291cmNlKSkge1xuICAgIHNvdXJjZVR5cGUgPSAnY3ljbGljJztcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkgfHwgc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBzb3VyY2VUeXBlID0gJ2FycmF5JztcbiAgfVxuXG4gIHN0YWNrLnB1c2goc291cmNlKTtcblxuICBzd2l0Y2ggKHNvdXJjZVR5cGUpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgY2FzZSAnYmlnaW50JzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIC8vIHNpbXBseSByZXR1cm4ga25vd24gcHJpbWl0aXZlc1xuICAgICAgcmVzdWx0LnB1c2goc291cmNlKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gQHRzLWlnbm9yZSBUUzI0NDVcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgLy8gY29udmVydCBvYmplY3QgdG8gYXJyYXlcbiAgICAgIHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoc291cmNlKTtcbiAgICBjYXNlICdhcnJheSc6XG4gICAgICAvLyBkZWVwVmFsdWVzIGFsbFxuICAgICAgdmFsdWVzLmZvckVhY2goKHYpID0+IChyZXN1bHQgPSByZXN1bHQuY29uY2F0KGRlZXBWYWx1ZXModiwgc3RhY2spKSkpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIGVsc2UsIGlnbm9yZSBhbGwgZXhhbXBsZTogbnVsbCwgdW5kZWZpbmVkLCBmdW5jdGlvbiwgc3ltYm9sXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogaGVscGVyIG1ldGhvZCB0byBkZWVwIGZpbHRlcmluZyBhbiBhcnJheVxuICogdGhpcyBiYXNpY2FsbHkgc2hvcnQtY3V0dGluZyB0aGUgdXNhZ2Ugb2YgZGVlcFZhbHVlc1xuICpcbiAqIEBwYXJhbSAge1RbXSB8IFRbXX0gICAgIHNvdXJjZSAgYXJyYXkgb2Ygc3BlY2lmaWMgdHlwZVxuICogQHBhcmFtICB7KGFueSwgbnVtYmVyLCBhbnlbXSkgPT4gYm9vbGVhbiB9ICAgICB2YWx1ZUZpbHRlckZuICBwcmVkaWNhdGUgZmlsdGVyaW5nIG9uIHRoZSBPYmplY3QgcHJpbWF0aXZlIHZhbHVlc1xuICogQHJldHVybiB7VFtdfSAgICAgICAgICAgIGl0ZW1zIG1hdGNoaW5nIGZpbHRlciBpbiBhcnJheVxuICovXG5mdW5jdGlvbiBkZWVwRmlsdGVyPFQ+KHNvdXJjZTogVCB8IFRbXSwgdmFsdWVGaWx0ZXJGbjogKHZhbHVlOiBhbnksIGluZGV4OiBudW1iZXIsIG9iamVjdDogYW55W10pID0+IGJvb2xlYW4pOiBUW10ge1xuXG4gIGlmICgoQXJyYXkuaXNBcnJheShzb3VyY2UpIHx8IHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgIHJldHVybiBzb3VyY2UuZmlsdGVyKGl0ZW0gPT4gZGVlcFZhbHVlcyhpdGVtLCBbc291cmNlXSkuc29tZSh2YWx1ZUZpbHRlckZuKSk7XG4gIH1cblxuICBsZXQgbXlBcnJheSA9IE9iamVjdC52YWx1ZXMoc291cmNlKTtcblxuICByZXR1cm4gbXlBcnJheS5maWx0ZXIoaXRlbSA9PiBkZWVwVmFsdWVzKGl0ZW0sIFtzb3VyY2UsIG15QXJyYXldKS5zb21lKHZhbHVlRmlsdGVyRm4pKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBkZWVwVmFsdWVzLCBkZWVwRmlsdGVyIH07XG4iXX0=
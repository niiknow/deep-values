"use strict";
/**
 * return all values of source
 *
 * @param  {any}   source
 * @param  {any[] = new Array() }  stack   optional array to track all objects we processed
 * @return {any[]}        array of values
 */
Object.defineProperty(exports, "__esModule", { value: true });
function deepValues(source, stack = new Array()) {
    let result = [], values = source, sourceType = source === null ? 'null' : typeof source;
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
            values.forEach((v) => (result = result.concat(deepValues(v, stack))));
            break;
        default:
            // else, ignore all example: null, undefined, function, symbol
            break;
    }
    return result;
}
exports.default = deepValues;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRzs7QUFFSCxTQUFTLFVBQVUsQ0FBQyxNQUFXLEVBQUUsUUFBZSxJQUFJLEtBQUssRUFBRTtJQUN6RCxJQUFJLE1BQU0sR0FBVSxFQUFFLEVBQ3BCLE1BQU0sR0FBVSxNQUFNLEVBQ3RCLFVBQVUsR0FBVyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDO0lBRWhFLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkUsVUFBVSxHQUFHLFFBQVEsQ0FBQztJQUN4QixDQUFDO1NBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sWUFBWSxLQUFLLEVBQUUsQ0FBQztRQUM1RCxVQUFVLEdBQUcsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRW5CLFFBQVEsVUFBVSxFQUFFLENBQUM7UUFDbkIsS0FBSyxRQUFRLENBQUM7UUFDZCxLQUFLLFFBQVEsQ0FBQztRQUNkLEtBQUssUUFBUSxDQUFDO1FBQ2QsS0FBSyxTQUFTO1lBQ1osaUNBQWlDO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsTUFBTTtRQUVSLG9CQUFvQjtRQUNwQixLQUFLLFFBQVE7WUFDWCwwQkFBMEI7WUFDMUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsS0FBSyxPQUFPO1lBQ1YsaUJBQWlCO1lBQ2pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RSxNQUFNO1FBQ1I7WUFDRSw4REFBOEQ7WUFDOUQsTUFBTTtJQUNWLENBQUM7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQsa0JBQWUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiByZXR1cm4gYWxsIHZhbHVlcyBvZiBzb3VyY2VcbiAqXG4gKiBAcGFyYW0gIHthbnl9ICAgc291cmNlXG4gKiBAcGFyYW0gIHthbnlbXSA9IG5ldyBBcnJheSgpIH0gIHN0YWNrICAgb3B0aW9uYWwgYXJyYXkgdG8gdHJhY2sgYWxsIG9iamVjdHMgd2UgcHJvY2Vzc2VkXG4gKiBAcmV0dXJuIHthbnlbXX0gICAgICAgIGFycmF5IG9mIHZhbHVlc1xuICovXG5cbmZ1bmN0aW9uIGRlZXBWYWx1ZXMoc291cmNlOiBhbnksIHN0YWNrOiBhbnlbXSA9IG5ldyBBcnJheSgpKTogYW55W10ge1xuICBsZXQgcmVzdWx0OiBhbnlbXSA9IFtdLFxuICAgIHZhbHVlczogYW55W10gPSBzb3VyY2UsXG4gICAgc291cmNlVHlwZTogc3RyaW5nID0gc291cmNlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHNvdXJjZTtcblxuICBpZiAoKHNvdXJjZSAmJiBzb3VyY2Uud2luZG93ID09PSBzb3VyY2UpIHx8IHN0YWNrLmluY2x1ZGVzKHNvdXJjZSkpIHtcbiAgICBzb3VyY2VUeXBlID0gJ2N5Y2xpYyc7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2UpIHx8IHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgc291cmNlVHlwZSA9ICdhcnJheSc7XG4gIH1cblxuICBzdGFjay5wdXNoKHNvdXJjZSk7XG5cbiAgc3dpdGNoIChzb3VyY2VUeXBlKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ2JpZ2ludCc6XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAvLyBzaW1wbHkgcmV0dXJuIGtub3duIHByaW1pdGl2ZXNcbiAgICAgIHJlc3VsdC5wdXNoKHNvdXJjZSk7XG4gICAgICBicmVhaztcblxuICAgIC8vIEB0cy1pZ25vcmUgVFMyNDQ1XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIC8vIGNvbnZlcnQgb2JqZWN0IHRvIGFycmF5XG4gICAgICB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHNvdXJjZSk7XG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAgLy8gZGVlcFZhbHVlcyBhbGxcbiAgICAgIHZhbHVlcy5mb3JFYWNoKCh2KSA9PiAocmVzdWx0ID0gcmVzdWx0LmNvbmNhdChkZWVwVmFsdWVzKHYsIHN0YWNrKSkpKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBlbHNlLCBpZ25vcmUgYWxsIGV4YW1wbGU6IG51bGwsIHVuZGVmaW5lZCwgZnVuY3Rpb24sIHN5bWJvbFxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWVwVmFsdWVzO1xuIl19
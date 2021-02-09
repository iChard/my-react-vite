// @ts-check
/** @module myModule */
/** will be module:myModule~foo */
export const foo = 1;

/** will be module:myModule.bar */
export const bar = function() {};

/**
 * 加法
 * @param { Number } x 
 * @param { Number } y 
 * @returns { Number } 
 */
function add(x, y) {
    return x + y; 
}
let z = add(1, {})

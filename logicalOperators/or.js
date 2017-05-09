/**
 * Logical Operator ::: Or
 *
 * Human friendly style
 * 
 * function Or(x) {
 *   return function(y) {
 *      return If(x)(True)(y);
 *   }
 * }
 */

import If from '../conditionalStatements/if';

import True from '../booleanConstants/true';

const Or  = x => y => If(x)(True)(y);

export default Or;
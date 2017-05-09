/**
 * Logical Operator ::: And
 *
 * Human friendly style
 * 
 * function And(x) {
 *   return function(y) {
 *      return If(x)(y)(False);
 *   }
 * }
 */

import False from '../booleanConstants/false';

import If from '../conditionalStatements/if';

const And = x => y => If(x)(y)(False);

export default And;

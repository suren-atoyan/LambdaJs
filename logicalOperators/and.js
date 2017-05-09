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

import False from '../constants/false';

import If from '../conditional/if';

const And = x => y => If(x)(y)(False);

export default And;

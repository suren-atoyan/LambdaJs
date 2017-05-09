/**
 * Logical Operator ::: Xor
 *
 * Human friendly style
 * 
 * function Xor(x) {
 *   return function(y) {
 *      return If(x)(Not(y))(y);
 *   }
 * }
 */

import If from '../conditional/if';

import Not from './not';

const Xor = x => y => If(x)(Not(y))(y);

export default Xor;
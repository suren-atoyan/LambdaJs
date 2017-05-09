/**
 * Logical Operator ::: Not
 *
 * Human friendly style
 * 
 * function Nor(x) {
 *   return If(x)(False)(True);
 * }
 */

import True from '../constants/true';

import False from '../constants/false';

import If from '../conditional/if';

const Not = x => If(x)(False)(True);

export default Not;

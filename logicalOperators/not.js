/**
 * Logical Operator ::: Not
 *
 * Human friendly style
 * 
 * function Nor(x) {
 *   return If(x)(False)(True);
 * }
 */

import True from '../booleanConstants/true';

import False from '../booleanConstants/false';

import If from '../conditionalStatements/if';

const Not = x => If(x)(False)(True);

export default Not;

/**
 * Logical false
 *
 * Human friendly style
 * 
 * function False(t) {
 *   return function(f) {
 *      return f;
 *   }   
 * }
 */

const False = t => f => f;

export default False;

/**
 * Logical true
 *
 * Human friendly style
 * 
 * function True(t) {
 *   return function(f) {
 *      return t;
 *   }   
 * }
 */

const True = t => f => t;

export default True;

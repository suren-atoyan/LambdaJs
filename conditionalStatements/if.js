/**
 * Conditional If
 *
 * Human friendly style
 * 
 * function If(t) {
 *   return function(b) {
 *      return function(t) {
 *        return function(f) {
 *          return b(t)(f);
 *        }
 *      }
 *   }   
 * }
 */

const If = b => t => f => b(t)(f);

export default If;

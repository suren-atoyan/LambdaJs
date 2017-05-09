import True from './constants/true';

import False from './constants/false';

import If from './conditional/if';

import And from './logicalOperators/and';

import Not from './logicalOperators/not';

import Or from  './logicalOperators/or';

import Xor from './logicalOperators/xor';

console.log('Implementation "True"');
console.log(1 == True(1)(2));

console.log('Implementation "False"');
console.log(2 == False(1)(2));

console.log('Implementation "If"');
console.log(1 == If(True)(1)(2));
console.log(2 == If(False)(1)(2));

console.log('Implementation "Not"');
console.log(Not(False) == True);
console.log(Not(True) == False);

console.log('Implementation "And"');
console.log(And(False)(False) == False);
console.log(And(False)(True) == False);
console.log(And(True)(False) == False);
console.log(And(True)(True) == True);

console.log('Implementation "Or"');
console.log(Or(False)(False) == False);
console.log(Or(False)(True) == True);
console.log(Or(True)(False) == True);
console.log(Or(True)(True) == True);

console.log('Implementation "Xor"');
console.log(Xor(False)(False) == False);
console.log(Xor(False)(True) == True);
console.log(Xor(True)(False) == True);
console.log(Xor(True)(True) == False);

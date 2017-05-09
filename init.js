// Boolean Constants

import True       from './booleanConstants/true';

import False      from './booleanConstants/false';

// Conditional Statements

import If         from './conditionalStatements/if';

// Logical Operators

import Not        from './logicalOperators/not';

import And        from './logicalOperators/and';

import Or         from  './logicalOperators/or';

import Xor        from './logicalOperators/xor';

// Data Structure

import Pair       from './dataStructure/pair';

import Fst        from './dataStructure/fst';

import Snd        from './dataStructure/snd';

import Triplet    from './dataStructure/triplet';

import Pentuplet  from './dataStructure/pentuplet';

// Arithmetic

import Zero       from './arithmetic/zero';

import One        from './arithmetic/one';

import Two        from './arithmetic/two';

import Three      from './arithmetic/three';

import Succ       from './arithmetic/succ';

import Add        from './arithmetic/add';

import Mul        from './arithmetic/mul';

import Pow        from './arithmetic/pow';

// Convert?

import toInt      from './convert/toInt';

// simple logger

import log from './log';

log('Test ::: "True"');
log(1 == True(1)(2));

log('Test ::: "False"');
log(2 == False(1)(2));

log('Test ::: "If"');
log(1 == If(True)(1)(2));
log(2 == If(False)(1)(2));

log('Test ::: "Not"');
log(Not(False) == True);
log(Not(True) == False);

log('Test ::: "And"');
log(And(False)(False) == False);
log(And(False)(True) == False);
log(And(True)(False) == False);
log(And(True)(True) == True);

log('Test ::: "Or"');
log(Or(False)(False) == False);
log(Or(False)(True) == True);
log(Or(True)(False) == True);
log(Or(True)(True) == True);

log('Test ::: "Xor"');
log(Xor(False)(False) == False);
log(Xor(False)(True) == True);
log(Xor(True)(False) == True);
log(Xor(True)(True) == False);

log('Test ::: "Pair"');
let pair = Pair(1)(2);
log(Fst(pair) == Pair(1)(2)(True) == True(1)(2));

log('Test ::: "toInt"');
log(0 == toInt(Zero))
log(1 == toInt(One))
log(2 == toInt(Two))

// log('Test ::: "Zero"');
// log('Test ::: "One"');
// log('Test ::: "Two"');
// log('Test ::: "Three"');
// log('Test ::: "Succ"');
// log('Test ::: "Add"');
// log('Test ::: "Mul"');
// log('Test ::: "Pow"');


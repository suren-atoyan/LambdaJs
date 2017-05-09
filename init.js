import True from './constants/true';

import False from './constants/false';

import If from './conditional/if';

import And from './logicalOperators/and';

import Not from './logicalOperators/not';

import Or from  './logicalOperators/or';

import Xor from './logicalOperators/xor';

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

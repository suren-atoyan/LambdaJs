import Add from './add';

import Zero from './zero';

const Mul = n => m => m(Add(n))(Zero);

export default Mul;

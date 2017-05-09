import Succ from './succ';

const Add = n => m => m(Succ)(n);

export default Add;

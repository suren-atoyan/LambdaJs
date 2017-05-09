# LambdaJs

## Synopsys

This project is representing the fundamental concepts of functional programming and the implementation of lambda-calculus by javascript.
```javascript
True      = t => f => t
False     = t => f => f
If        = b => t => f => b(t)(f)
Not       = x => If(x)(False)(True)
And       = x => y => If(x)(y)(False)
Or        = x => y => If(x)(True)(y)
Xor       = x => y => If(x)(Not(y))(y)
Pair      = x => y => (f => f(x)(y))
Fst       = p => p(True)
Snd       = p => p(False)
Triplet   = x => y => z => (f => f(x)(y)(z))
Pentuplet = x => y => z => u => v => (f => f(x)(y)(z)(u)(v))
Zero      = s => z => z
One       = s => z => s(z)
Two       = s => z => s(s(z))
Three     = s => z => s (s(s(z)))
Succ      = n => (s => z => s (n(s)(z)))
Add       = n => m => m(Succ)(n)
Mul       = n => m => m(Add(n))(Zero)
Pow       = n => p => p (Mul(n))(One)
toInt     = n => n(x => x + 1)(0)
// ...
```

## Install

```
git clone https://github.com/SurenAt93/LambdaJs.git
cd LambdaJs
```

```
npm run install
```

## Playground

You can play with it and see the result in your browser.

```
npm start
```

## Thanks

This concept and its technical solutions are based on the following [article](https://habrahabr.ru/post/322052/).
I would  like to thank @ibessonov for this article and my wife for helping me in Functional Programming, Theory of Algorithms and Mathematical Logic.

let a: Sprite = null
let d: Sprite = null
let x: Sprite = null
let c: Sprite = null
let g: Sprite = null
let j: Sprite = null
let i: Sprite = null
forever(function () {
    a = sprites.createProjectileFromSide(img`
. . . . . 3 3 b 3 3 d d 3 3 . . 
. . . . 3 1 1 d 3 d 1 1 1 1 3 . 
. . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
. . 3 d d 1 1 1 d d 1 1 1 3 3 3 
. 3 1 1 d 1 1 1 1 d d 1 1 b . . 
. 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
. b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
. 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
. 4 4 d 1 1 1 1 1 1 d d d b b . 
. 4 d b d 1 1 1 1 1 1 1 1 3 . . 
4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
4 5 5 d 5 5 d b b b d d 3 . . . 
4 5 5 5 d d d d 4 4 b 3 . . . . 
. 4 5 5 5 4 4 4 . . . . . . . . 
. . 4 4 4 . . . . . . . . . . . 
`, 0, 100)
    a.setPosition(1, 1)
    d = sprites.createProjectileFromSide(img`
. . . . . . b b b b a a . . . . 
. . . . b b d d d 3 3 3 a a . . 
. . . b d d d 3 3 3 3 3 3 a a . 
. . b d d 3 3 3 3 3 3 3 3 3 a . 
. b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
. b 3 3 3 3 3 a a 3 3 3 3 3 a b 
b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
a a 3 3 3 d d d a a 4 4 4 e e . 
. e a a a a a a 4 4 4 4 e e . . 
. . e e b b 4 4 4 4 b e e . . . 
. . . e e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 100)
    d.setPosition(25, 2)
    x = sprites.createProjectileFromSide(img`
. . . . . . . e e e e . . . . . 
. . . . . e e 4 5 5 5 e e . . . 
. . . . e 4 5 6 2 2 7 6 6 e . . 
. . . e 5 6 6 7 2 2 6 4 4 4 e . 
. . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
. e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
. e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
e 5 e c 5 4 5 4 5 5 5 e e . . . 
e 5 e e 5 5 5 5 5 4 e . . . . . 
4 5 4 e 5 5 5 5 e e . . . . . . 
. 4 5 4 5 5 4 e . . . . . . . . 
. . 4 4 e e e . . . . . . . . . 
`, 0, 100)
    x.setPosition(50, 2)
    c = sprites.createProjectileFromSide(img`
. . . . . . b b b b . . . . . . 
. . . . . . b 4 4 4 b . . . . . 
. . . . . . b b 4 4 4 b . . . . 
. . . . . b 4 b b b 4 4 b . . . 
. . . . b d 5 5 5 4 b 4 4 b . . 
. . . . b 3 2 3 5 5 4 e 4 4 b . 
. . . b d 2 2 2 5 7 5 4 e 4 4 e 
. . . b 5 3 2 3 5 5 5 5 e e e e 
. . b d 7 5 5 5 3 2 3 5 5 e e e 
. . b 5 5 5 5 5 2 2 2 5 5 d e e 
. b 3 2 3 5 7 5 3 2 3 5 d d e 4 
. b 2 2 2 5 5 5 5 5 5 d d e 4 . 
b d 3 2 d 5 5 5 d d d 4 4 . . . 
b 5 5 5 5 d d 4 4 4 4 . . . . . 
4 d d d 4 4 4 . . . . . . . . . 
4 4 4 4 . . . . . . . . . . . . 
`, 0, 100)
    c.setPosition(75, 2)
    g = sprites.createProjectileFromSide(img`
. . 2 2 b b b b b . . . . . . . 
. 2 b 4 4 4 4 4 4 b . . . . . . 
2 2 4 4 4 4 d d 4 4 b . . . . . 
2 b 4 4 4 4 4 4 d 4 b . . . . . 
2 b 4 4 4 4 4 4 4 d 4 b . . . . 
2 b 4 4 4 4 4 4 4 4 4 b . . . . 
2 b 4 4 4 4 4 4 4 4 4 e . . . . 
2 2 b 4 4 4 4 4 4 4 b e . . . . 
. 2 b b b 4 4 4 b b b e . . . . 
. . e b b b b b b b e e . . . . 
. . . e e b 4 4 b e e e b . . . 
. . . . . e e e e e e b d b b . 
. . . . . . . . . . . b 1 1 1 b 
. . . . . . . . . . . c 1 d d b 
. . . . . . . . . . . c 1 b c . 
. . . . . . . . . . . . c c . . 
`, 0, 100)
    g.setPosition(100, 2)
    j = sprites.createProjectileFromSide(img`
. . . . . 3 3 b 3 3 d d 3 3 . . 
. . . . 3 1 1 d 3 d 1 1 1 1 3 . 
. . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
. . 3 d d 1 1 1 d d 1 1 1 3 3 3 
. 3 1 1 d 1 1 1 1 d d 1 1 b . . 
. 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
. b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
. 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
. 4 4 d 1 1 1 1 1 1 d d d b b . 
. 4 d b d 1 1 1 1 1 1 1 1 3 . . 
4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
4 5 5 d 5 5 d b b b d d 3 . . . 
4 5 5 5 d d d d 4 4 b 3 . . . . 
. 4 5 5 5 4 4 4 . . . . . . . . 
. . 4 4 4 . . . . . . . . . . . 
`, 0, 100)
    j.setPosition(126, 2)
    i = sprites.createProjectileFromSide(img`
4 4 4 . . 4 4 4 4 4 . . . . . . 
4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
. b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
. b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
. c 4 5 5 5 5 d d d 5 5 5 5 5 b 
. c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
. . c 4 4 d 4 4 4 4 4 d d 5 d c 
. . . c 4 4 4 4 4 4 4 4 5 5 5 4 
. . . . c c b 4 4 4 b b 4 5 4 4 
. . . . . . c c c c c c b b 4 . 
`, 0, 100)
    i.setPosition(152, 2)
})

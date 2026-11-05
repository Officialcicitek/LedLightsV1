let a = 0
let b = 0
basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            basic.pause(100)
        }
    }
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            a = 4 - i
            b = 4 - j
            led.unplot(a, b)
            basic.pause(100)
        }
    }
})

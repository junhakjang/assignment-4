input.onButtonPressed(Button.A, function () {
    Sprite.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Sprite.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    Sprite.change(LedSpriteProperty.X, 1)
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})

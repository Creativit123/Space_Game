namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
    export const Food2 = SpriteKind.create()
    export const Asteroid = SpriteKind.create()
    export const Planet = SpriteKind.create()
    export const Torpedo = SpriteKind.create()
    export const Camera = SpriteKind.create()
}
namespace StatusBarKind {
    export const AsteroidFuel = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Planet, function (sprite, otherSprite) {
    Alien.setVelocity(0, 0)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    PlayerShip.setImage(assets.image`SpaceShip Sprite`)
    Ship_Direction = 0
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    music.bigCrash.playUntilDone()
    info.changeScoreBy(5)
    Explosion = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Fuel, 0, 0)
    Explosion.lifespan = 800
    animation.runImageAnimation(
    Explosion,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `],
    200,
    false
    )
    sprite.destroy()
    Fuel.setPosition(PlayerShip.x + randint(-65, 65), PlayerShip.y + randint(-45, 45))
})
controller.combos.attachCombo("" + controller.combos.idToString(controller.combos.ID.up) + controller.combos.idToString(controller.combos.ID.up) + controller.combos.idToString(controller.combos.ID.down) + controller.combos.idToString(controller.combos.ID.down) + controller.combos.idToString(controller.combos.ID.left) + controller.combos.idToString(controller.combos.ID.right) + controller.combos.idToString(controller.combos.ID.left) + controller.combos.idToString(controller.combos.ID.right) + controller.combos.idToString(controller.combos.ID.A), function () {
    Fuel_Bar.max = 100000000000000
    Fuel_Bar.value = 100000000000000
    info.setLife(1000)
    PlayerShip.say("Test Mode On", 5000)
    Asteroid = sprites.createProjectileFromSide(assets.image`Asteroid`, randint(-10, 10), randint(-10, 10))
    Asteroid.setKind(SpriteKind.Asteroid)
    Asteroid.setFlag(SpriteFlag.AutoDestroy, false)
    Asteroid.lifespan = 60000
    Asteroid_Bar = statusbars.create(20, 4, StatusBarKind.AsteroidFuel)
    Asteroid_Bar.max = 30
    Asteroid_Bar.attachToSprite(Asteroid, 0, 0)
    Asteroid_Bar.setColor(5, 0)
    Asteroid_Bar.setLabel("Fuel")
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    PlayerShip2.setImage(assets.image`SpaceShip Sprite2 down`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    PlayerShip.setImage(assets.image`SpaceShip Left`)
    Ship_Direction = 3
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Asteroid, function (sprite, otherSprite) {
    music.bigCrash.playUntilDone()
    info.changeScoreBy(30)
    Explosion = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, otherSprite, 0, 0)
    Explosion.lifespan = 800
    animation.runImageAnimation(
    Explosion,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `],
    200,
    false
    )
    sprite.destroy()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Food2, SpriteKind.Planet, function (sprite, otherSprite) {
    Fuel2.setPosition(PlayerShip.x + randint(-65, 65), PlayerShip.y + randint(-45, 45))
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    PlayerShip2.setImage(assets.image`SpaceShip Sprite2`)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food2, function (sprite, otherSprite) {
    music.bigCrash.playUntilDone()
    info.changeScoreBy(5)
    Explosion = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Fuel2, 0, 0)
    Explosion.lifespan = 800
    animation.runImageAnimation(
    Explosion,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `],
    200,
    false
    )
    sprite.destroy()
    Fuel2.setPosition(PlayerShip.x + randint(-65, 65), PlayerShip.y + randint(-45, 45))
})
sprites.onOverlap(SpriteKind.Torpedo, SpriteKind.Food2, function (sprite, otherSprite) {
    music.bigCrash.playUntilDone()
    info.changeScoreBy(5)
    Explosion = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Fuel2, 0, 0)
    Explosion.lifespan = 800
    animation.runImageAnimation(
    Explosion,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `],
    200,
    false
    )
    sprite.destroy()
    Fuel2.setPosition(PlayerShip.x + randint(-65, 65), PlayerShip.y + randint(-45, 45))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    PlayerShip.setImage(assets.image`SpaceShip Right`)
    Ship_Direction = 1
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    PlayerShip2.setImage(assets.image`SpaceShip Sprite2 right`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Asteroid, function (sprite, otherSprite) {
    if (Math.abs(PlayerShip.vx - otherSprite.vx) + Math.abs(PlayerShip.vy - otherSprite.vy) > 60) {
        info.changeLifeBy(-2)
        music.bigCrash.playUntilDone()
        Explosion = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Asteroid, 0, 0)
        Explosion.lifespan = 800
        animation.runImageAnimation(
        Explosion,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `],
        200,
        false
        )
        PlayerShip.setVelocity(Asteroid.vx, Asteroid.vy)
        otherSprite.destroy()
    } else {
        PlayerShip.setVelocity(otherSprite.vx, otherSprite.vy)
        statusbars.getStatusBarAttachedTo(StatusBarKind.AsteroidFuel, otherSprite).value += -0.5
        Fuel_Bar.value += Difficulty / 4 - info.score() / 40000
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        info.changeScoreBy(2)
        PlayerShip.follow(otherSprite, 1)
    }
})
controller.combos.attachCombo("" + controller.combos.idToString(controller.combos.ID.A) + controller.combos.idToString(controller.combos.ID.right) + controller.combos.idToString(controller.combos.ID.left) + controller.combos.idToString(controller.combos.ID.right) + controller.combos.idToString(controller.combos.ID.left) + controller.combos.idToString(controller.combos.ID.down) + controller.combos.idToString(controller.combos.ID.down) + controller.combos.idToString(controller.combos.ID.up) + controller.combos.idToString(controller.combos.ID.up), function () {
    Fuel_Bar.max = 60
    Fuel_Bar.value = 20
    info.setLife(10)
    PlayerShip.say("Test Mode Off", 5000)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Planet, function (sprite, otherSprite) {
    Fuel.setPosition(PlayerShip.x + randint(-65, 65), PlayerShip.y + randint(-45, 45))
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    PlayerShip.setImage(assets.image`SpaceShip Down`)
    Ship_Direction = 2
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    PlayerShip2.setImage(assets.image`SpaceShip Sprite2 left`)
})
sprites.onOverlap(SpriteKind.Torpedo, SpriteKind.Food, function (sprite, otherSprite) {
    music.bigCrash.playUntilDone()
    info.changeScoreBy(5)
    Explosion = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Fuel, 0, 0)
    Explosion.lifespan = 800
    animation.runImageAnimation(
    Explosion,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `],
    200,
    false
    )
    sprite.destroy()
    Fuel.setPosition(PlayerShip.x + randint(-65, 65), PlayerShip.y + randint(-45, 45))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Fuel.setPosition(PlayerShip.x + randint(-65, 65), PlayerShip.y + randint(-45, 45))
    music.baDing.playUntilDone()
    info.changeScoreBy(10)
    Fuel_Bar.value += Difficulty - info.score() / 1000
})
sprites.onOverlap(SpriteKind.Torpedo, SpriteKind.Enemy, function (sprite, otherSprite) {
    Alien_Health.value += -1000
    sprite.destroy(effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Torpedo, SpriteKind.Asteroid, function (sprite, otherSprite) {
    music.bigCrash.playUntilDone()
    info.changeScoreBy(30)
    Explosion = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, otherSprite, 0, 0)
    Explosion.lifespan = 800
    animation.runImageAnimation(
    Explosion,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `],
    200,
    false
    )
    sprite.destroy()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Asteroid, function (sprite, otherSprite) {
    Alien.setPosition(otherSprite.x, otherSprite.y)
    Asteroid_Bar.value += -0.25
})
statusbars.onZero(StatusBarKind.Energy, function (status) {
    info.changeLifeBy(-1)
    Fuel_Bar.value = 2
    music.smallCrash.play()
    scene.cameraShake(4, 500)
})
statusbars.onZero(StatusBarKind.AsteroidFuel, function (status) {
    status.spriteAttachedTo().destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Planet, function (sprite, otherSprite) {
    Fuel_Bar.value += 0.015
    PlayerShip.setVelocity(0, 0)
    Landed = -0.5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food2, function (sprite, otherSprite) {
    Fuel2.setPosition(PlayerShip.x + randint(-65, 65), PlayerShip.y + randint(-45, 45))
    music.baDing.playUntilDone()
    info.changeScoreBy(10)
    Fuel_Bar.value += Difficulty - info.score() / 1000
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Alien_Health.value += -25
    sprite.destroy()
    music.zapped.playUntilDone()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    pause(500)
    if (PlayerShip.overlapsWith(Alien)) {
        info.changeLifeBy(-1)
        Fuel_Bar.value += -3
        music.bigCrash.play()
    }
})
let Torpedo_Y_Velocity = 0
let Torpedo_X_velocity = 0
let Torpedo: Sprite = null
let projectile: Sprite = null
let projectile_x_velocity = 0
let projectile_y_velocity = 0
let Earth_Distance = 0
let Landed = 0
let Asteroid_Bar: StatusBarSprite = null
let Asteroid: Sprite = null
let Explosion: Sprite = null
let Ship_Direction = 0
let Alien_Health: StatusBarSprite = null
let Alien: Sprite = null
let Camera: Sprite = null
let PlayerShip2: Sprite = null
let Fuel_Bar: StatusBarSprite = null
let Fuel2: Sprite = null
let Fuel: Sprite = null
let PlayerShip: Sprite = null
let Difficulty = 0
game.splash("Use Arrow Keys and Space")
let Players = game.askForNumber("How many players? (Maximum 2)", 1)
for (let index = 0; index < 100; index++) {
    if (Players > 2) {
        Players = game.askForNumber("How many players? (Maximum 2)", 1)
    }
}
if (Players > 2) {
    game.splash("Player 2, use UIOJKL.")
}
Difficulty = game.askForNumber("Select a Difficulty (2=Normal Higher=Easier)", 2)
if (Difficulty >= 25) {
    Difficulty = game.askForNumber("Lol no, too high", 2)
}
if (Difficulty >= 25) {
    Difficulty = game.askForNumber("I said too high", 2)
}
for (let index = 0; index < 50; index++) {
    if (Difficulty >= 25) {
        Difficulty = game.askForNumber("Try below 25", 2)
    }
}
if (Difficulty >= 25) {
    Difficulty = game.askForNumber("You sure?", 2)
}
if (Difficulty >= 25) {
    game.splash("OK fine")
}
game.splash("Arrow keys to move", "Space to fire lasers")
game.splash("X to fire torpedoes")
PlayerShip = sprites.create(assets.image`SpaceShip Sprite`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`Starry Background`)
PlayerShip.setStayInScreen(true)
Fuel = sprites.create(assets.image`Fuel`, SpriteKind.Food)
Fuel2 = sprites.create(assets.image`Fuel`, SpriteKind.Food2)
PlayerShip.setVelocity(70, 0)
scene.cameraFollowSprite(PlayerShip)
Fuel_Bar = statusbars.create(50, 8, StatusBarKind.Energy)
Fuel_Bar.attachToSprite(PlayerShip, 43, 0)
Fuel_Bar.max = 60
Fuel_Bar.value = 8 + Difficulty
Fuel_Bar.setLabel("Fuel")
if (Players > 1) {
    PlayerShip2 = sprites.create(assets.image`SpaceShip Sprite2`, SpriteKind.Player)
    PlayerShip2.setStayInScreen(true)
    PlayerShip2.setVelocity(70, 0)
    Camera = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Camera)
    Fuel_Bar.attachToSprite(Camera, 43, 0)
}
info.setLife(10)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
scroller.setCameraScrollingMultipliers(0.5, 0.5)
let Health_Bar = statusbars.create(10, 2, StatusBarKind.Health)
Health_Bar.attachToSprite(PlayerShip, 1, 0)
Health_Bar.setLabel("HP")
Health_Bar.setColor(7, 2)
Alien = sprites.create(assets.image`Alien up`, SpriteKind.Enemy)
Alien.setPosition(-100, 100)
Alien.z = 1
Alien.follow(PlayerShip, PlayerShip.vx + PlayerShip.vy - 20)
Alien_Health = statusbars.create(10, 2, StatusBarKind.Health)
Alien_Health.attachToSprite(Alien, 4, 0)
Alien_Health.setLabel("HP")
let Alien_Label = statusbars.create(0, 0, StatusBarKind.Health)
Alien_Label.attachToSprite(Alien, 10, 0)
Alien_Label.setLabel("Alien")
let Shield = sprites.create(assets.image`Shield`, SpriteKind.Player)
let Shield_Bar = statusbars.create(10, 2, StatusBarKind.Health)
Shield_Bar.max = 10
Shield_Bar.setColor(9, 0)
let Earth = sprites.create(assets.image`Earth`, SpriteKind.Planet)
Earth.z = -2
Earth.y = 150
scene.setTile(9, assets.image`Light Blue`, true)
forever(function () {
    if (Players > 1) {
        scene.centerCameraAt((PlayerShip.x + PlayerShip2.x) / 2, (PlayerShip.y + PlayerShip2.y) / 2)
        Camera.setPosition((PlayerShip.x + PlayerShip2.x) / 2, (PlayerShip.y + PlayerShip2.y) / 2)
    }
})
forever(function () {
    if (Math.abs(PlayerShip.x - Alien.x) > 600 || Math.abs(PlayerShip.y - Alien.y) > 600) {
        Alien.follow(PlayerShip, 0)
        Alien.setPosition(PlayerShip.x + randint(-300, -150), PlayerShip.y + randint(-300, -150))
        Alien_Health.value = 100
        pause(5000)
        Alien.follow(PlayerShip, 50)
    }
})
forever(function () {
    if (controller.left.isPressed()) {
        PlayerShip.vx += -5
        music.thump.play()
        PlayerShip.startEffect(effects.fire, 100)
    }
    if (controller.up.isPressed()) {
        PlayerShip.vy += -5
        music.thump.play()
        PlayerShip.startEffect(effects.fire, 100)
    }
    if (controller.right.isPressed()) {
        PlayerShip.vx += 5
        music.thump.play()
        PlayerShip.startEffect(effects.fire, 100)
    }
    if (controller.down.isPressed()) {
        PlayerShip.vy += 5
        music.thump.play()
        PlayerShip.startEffect(effects.fire, 100)
    }
})
forever(function () {
    if (true) {
        pause(randint(20000, 30000))
        Asteroid = sprites.createProjectileFromSide(assets.image`Asteroid`, randint(-10, 10), randint(-10, 10))
        Asteroid.setKind(SpriteKind.Asteroid)
        Asteroid.setFlag(SpriteFlag.AutoDestroy, false)
        Asteroid.lifespan = 60000
        Asteroid_Bar = statusbars.create(20, 4, StatusBarKind.AsteroidFuel)
        Asteroid_Bar.max = 30
        Asteroid_Bar.attachToSprite(Asteroid, 0, 0)
        Asteroid_Bar.setColor(5, 0)
        Asteroid_Bar.setLabel("Fuel")
    }
})
forever(function () {
    if (info.life() > 10) {
        Shield.setPosition(PlayerShip.x, PlayerShip.y)
        Shield_Bar.attachToSprite(PlayerShip, 3, 6)
        Shield_Bar.value = info.life() - 10
    } else {
        Shield.setPosition(1000000000000, 1000000000)
        Shield_Bar.attachToSprite(PlayerShip, 100000, 0)
    }
})
forever(function () {
    Health_Bar.value = info.life() * 10
})
forever(function () {
    if (controller.player2.isPressed(ControllerButton.Left)) {
        PlayerShip2.vx += -5
        music.thump.play()
        PlayerShip2.startEffect(effects.fire, 100)
    }
    if (controller.player2.isPressed(ControllerButton.Up)) {
        PlayerShip2.vy += -5
        music.thump.play()
        PlayerShip2.startEffect(effects.fire, 100)
    }
    if (controller.player2.isPressed(ControllerButton.Right)) {
        PlayerShip2.vx += 5
        music.thump.play()
        PlayerShip2.startEffect(effects.fire, 100)
    }
    if (controller.player2.isPressed(ControllerButton.Down)) {
        PlayerShip2.vy += 5
        music.thump.play()
        PlayerShip2.startEffect(effects.fire, 100)
    }
})
forever(function () {
    Earth_Distance = Math.sqrt((Earth.x - PlayerShip.x) ** 2 + (Earth.y - PlayerShip.y) ** 2)
    PlayerShip.ax = 500000 * (Earth.x - PlayerShip.x) / Earth_Distance ** 3 * Landed
    PlayerShip.ay = 500000 * (Earth.y - PlayerShip.y) / Earth_Distance ** 3 * Landed
})
forever(function () {
    if (Ship_Direction == 0) {
        projectile_y_velocity = PlayerShip.vy + -100
        projectile_x_velocity = 0
    } else {
        if (Ship_Direction == 2) {
            projectile_y_velocity = PlayerShip.vy + 100
            projectile_x_velocity = 0
        } else {
            if (Ship_Direction == 3) {
                projectile_x_velocity = PlayerShip.vx + -100
                projectile_y_velocity = 0
            } else {
                if (Ship_Direction == 1) {
                    projectile_x_velocity = PlayerShip.vx + 100
                    projectile_y_velocity = 0
                }
            }
        }
    }
})
forever(function () {
    if (Earth_Distance > 46) {
        Landed = 1
    }
})
forever(function () {
    while (controller.A.isPressed()) {
        music.pewPew.play()
        projectile = sprites.createProjectileFromSprite(assets.image`Laser things updown`, PlayerShip, projectile_x_velocity + randint(-10, 10), projectile_y_velocity + randint(-10, 10))
        projectile.setKind(SpriteKind.Projectile)
        if (Ship_Direction == 0 || Ship_Direction == 2) {
            projectile.setImage(assets.image`Laser things updown`)
        } else {
            projectile.setImage(assets.image`Laser things leftright`)
        }
        pause(200)
    }
})
forever(function () {
    if (Alien_Health.value == 0) {
        Alien.follow(PlayerShip, 0)
        music.bigCrash.playUntilDone()
        Explosion = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Alien, 0, 0)
        Explosion.lifespan = 800
        Fuel_Bar.value += 5
        animation.runImageAnimation(
        Explosion,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `],
        200,
        false
        )
        pause(500)
        Alien.setPosition(PlayerShip.x + randint(-300, -150), PlayerShip.y + randint(-300, -150))
        info.changeLifeBy(1)
        Alien_Health.value = 100
        info.changeScoreBy(50)
        pause(5000)
        Alien.follow(PlayerShip, 50)
    }
})
forever(function () {
    while (controller.anyButton.isPressed()) {
        Fuel_Bar.value += -0.1
        pause(100)
    }
})
forever(function () {
    while (controller.B.isPressed()) {
        Torpedo = sprites.createProjectileFromSprite(assets.image`Torpedo Up`, PlayerShip, 0, 0)
        Torpedo.ax = Torpedo_X_velocity
        Torpedo.ay = Torpedo_Y_Velocity
        Torpedo.setFlag(SpriteFlag.AutoDestroy, false)
        Torpedo.setVelocity(Torpedo_X_velocity / 2, Torpedo_Y_Velocity / 2)
        Torpedo.lifespan = 10000
        Torpedo.setKind(SpriteKind.Torpedo)
        Torpedo.startEffect(effects.fire)
        Fuel_Bar.value += -3
        if (Ship_Direction == 0) {
            Torpedo.setImage(assets.image`Torpedo Up`)
        } else if (Ship_Direction == 2) {
            Torpedo.setImage(assets.image`Torpedo Down`)
        } else if (Ship_Direction == 1) {
            Torpedo.setImage(assets.image`Torpedo Right`)
        } else {
            Torpedo.setImage(assets.image`Torpedo Left`)
        }
        music.sonar.play()
        pause(1000)
    }
})
forever(function () {
    Fuel_Bar.value += -0.05
    pause(100)
})
forever(function () {
    if (Ship_Direction == 0) {
        Torpedo_Y_Velocity = PlayerShip.vy + -100
        Torpedo_X_velocity = 0
    } else if (Ship_Direction == 1) {
        Torpedo_X_velocity = PlayerShip.vx + 100
        Torpedo_Y_Velocity = 0
    } else if (Ship_Direction == 2) {
        Torpedo_Y_Velocity = PlayerShip.vy + 100
        Torpedo_X_velocity = 0
    } else {
        Torpedo_X_velocity = PlayerShip.vx + -100
        Torpedo_Y_Velocity = 0
    }
})
forever(function () {
    pause(5000)
    Fuel.setPosition(PlayerShip.x + randint(-65, 65), PlayerShip.y + randint(-45, 45))
    pause(5000)
    Fuel2.setPosition(PlayerShip.x + randint(-65, 65), PlayerShip.y + randint(-45, 45))
})

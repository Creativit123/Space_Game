namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
    export const Food2 = SpriteKind.create()
    export const Asteroid = SpriteKind.create()
    export const Planet = SpriteKind.create()
    export const Torpedo = SpriteKind.create()
    export const Camera = SpriteKind.create()
    export const Shield = SpriteKind.create()
    export const Map = SpriteKind.create()
    export const Marker = SpriteKind.create()
    export const Big_Enemy = SpriteKind.create()
    export const Enemy_Torpedo = SpriteKind.create()
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
    PlayerShip.say("Test Mode 1 On", 5000)
    Asteroid = sprites.createProjectileFromSide(assets.image`Asteroid`, randint(-10, 10), randint(-10, 10))
    Asteroid.setKind(SpriteKind.Asteroid)
    Asteroid.setFlag(SpriteFlag.AutoDestroy, false)
    Asteroid.lifespan = 60000
    Asteroid_Bar = statusbars.create(20, 4, StatusBarKind.AsteroidFuel)
    Asteroid_Bar.max = 30
    Asteroid_Bar.attachToSprite(Asteroid, 0, 0)
    Asteroid_Bar.setColor(5, 0)
    Asteroid_Bar.setLabel("Fuel")
    info.setScore(10000)
    PlayerShip.setFlag(SpriteFlag.ShowPhysics, true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy_Torpedo, function (sprite, otherSprite) {
    music.bigCrash.play()
    music.zapped.play()
    sprite.destroy()
    otherSprite.destroy()
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (Players == 2) {
        PlayerShip2.setImage(assets.image`SpaceShip Sprite2 down`)
        Ship_Direction2 = 2
    }
})
sprites.onOverlap(SpriteKind.Torpedo, SpriteKind.Big_Enemy, function (sprite, otherSprite) {
    Big_Alien_HP.value += -12
    sprite.destroy(effects.fire, 100)
    music.smallCrash.play()
})
controller.combos.attachCombo("" + controller.combos.idToString(controller.combos.ID.up) + controller.combos.idToString(controller.combos.ID.up) + controller.combos.idToString(controller.combos.ID.down) + controller.combos.idToString(controller.combos.ID.down) + controller.combos.idToString(controller.combos.ID.left) + controller.combos.idToString(controller.combos.ID.right) + controller.combos.idToString(controller.combos.ID.left) + controller.combos.idToString(controller.combos.ID.right) + controller.combos.idToString(controller.combos.ID.B), function () {
    PlayerShip.setFlag(SpriteFlag.GhostThroughSprites, true)
    PlayerShip.say("Test Mode 2 On", 5000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Big_Enemy, function (sprite, otherSprite) {
    Big_Alien_HP.value += -5
    sprite.destroy()
    music.zapped.playUntilDone()
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
sprites.onCreated(SpriteKind.Enemy_Torpedo, function (sprite) {
    if (sprite.vx == 0 && sprite.vy == 0) {
        sprite.destroy()
    }
})
sprites.onOverlap(SpriteKind.Food2, SpriteKind.Planet, function (sprite, otherSprite) {
    Fuel2.setPosition(PlayerShip.x + randint(-65, 65), PlayerShip.y + randint(-45, 45))
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (Players == 2) {
        PlayerShip2.setImage(assets.image`SpaceShip Sprite2`)
        Ship_Direction2 = 0
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    if (Game_Mode == 2 && Health_Bar.value == 0) {
        game.splash("Player 2 Wins!")
        game.over(true)
    } else if (Game_Mode == 2) {
        game.splash("Player 1 Wins!")
        game.over(true)
    } else {
    	
    }
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Torpedo, function (sprite, otherSprite) {
    if (Game_Mode == 2) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, sprite).value += -3
        otherSprite.destroy(effects.fire, 100)
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
            `, sprite, 0, 0)
        Explosion.z = 10
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
        music.bigCrash.playUntilDone()
    }
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (Game_Mode == 2) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, sprite).value += -1
        otherSprite.destroy(effects.fire, 100)
        music.zapped.playUntilDone()
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (Players == 2) {
        PlayerShip2.setImage(assets.image`SpaceShip Sprite2 right`)
        Ship_Direction2 = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Asteroid, function (sprite, otherSprite) {
    if (Math.abs(sprite.vx - otherSprite.vx) + Math.abs(sprite.vy - otherSprite.vy) > 60) {
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
        sprite.setVelocity(otherSprite.vx, otherSprite.vy)
        otherSprite.destroy()
    } else {
        sprite.setVelocity(otherSprite.vx, otherSprite.vy)
        statusbars.getStatusBarAttachedTo(StatusBarKind.AsteroidFuel, otherSprite).value += -0.5
        Fuel_Bar.value += Math.constrain(Difficulty / 4 - info.score() / 40000, 0.2, 1000)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        info.changeScoreBy(2)
        sprite.follow(otherSprite, 1)
    }
})
controller.combos.attachCombo("" + controller.combos.idToString(controller.combos.ID.A) + controller.combos.idToString(controller.combos.ID.right) + controller.combos.idToString(controller.combos.ID.left) + controller.combos.idToString(controller.combos.ID.right) + controller.combos.idToString(controller.combos.ID.left) + controller.combos.idToString(controller.combos.ID.down) + controller.combos.idToString(controller.combos.ID.down) + controller.combos.idToString(controller.combos.ID.up) + controller.combos.idToString(controller.combos.ID.up), function () {
    Fuel_Bar.max = 60
    Fuel_Bar.value = 30
    info.setLife(10)
    PlayerShip.setFlag(SpriteFlag.Ghost, false)
    PlayerShip.say("Test Mode(s) Off", 5000)
    PlayerShip.setFlag(SpriteFlag.ShowPhysics, false)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Planet, function (sprite, otherSprite) {
    Fuel.setPosition(PlayerShip.x + randint(-65, 65), PlayerShip.y + randint(-45, 45))
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    PlayerShip.setImage(assets.image`SpaceShip Down`)
    Ship_Direction = 2
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (Players == 2) {
        PlayerShip2.setImage(assets.image`SpaceShip Sprite2 left`)
        Ship_Direction2 = 3
    }
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy_Torpedo, function (sprite, otherSprite) {
    music.bigCrash.play()
    music.zapped.play()
    info.changeLifeBy(-2)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Fuel.setPosition(PlayerShip.x + randint(-65, 65), PlayerShip.y + randint(-45, 45))
    music.baDing.playUntilDone()
    info.changeScoreBy(10)
    Fuel_Bar.value += Math.constrain(Difficulty - info.score() / 1000, 0.1, 1000)
})
sprites.onOverlap(SpriteKind.Torpedo, SpriteKind.Enemy, function (sprite, otherSprite) {
    Alien_Health.value += -1000
    sprite.destroy(effects.fire, 100)
    music.smallCrash.play()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Big_Enemy, function (sprite, otherSprite) {
    sprite.setVelocity(0, 0)
    if (PlayerShip.overlapsWith(otherSprite)) {
        Landed = -0.5
    } else {
        Landed = 1
    }
    if (Players == 2) {
        if (PlayerShip2.overlapsWith(otherSprite)) {
            Landed2 = -0.5
        } else {
            Landed2 = 1
        }
    }
    pause(200)
    if (sprite.overlapsWith(otherSprite)) {
        info.changeLifeBy(-1)
        Fuel_Bar.value += -2
        music.bigCrash.play()
    }
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
    sprite.setVelocity(sprite.vx / 1.4, sprite.vy / 1.4)
    if (PlayerShip.overlapsWith(otherSprite)) {
        Landed = -0.5
    } else {
        Landed = 1
    }
    if (Players == 2) {
        if (PlayerShip2.overlapsWith(otherSprite)) {
            Landed2 = -0.5
        } else {
            Landed2 = 1
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food2, function (sprite, otherSprite) {
    Fuel2.setPosition(PlayerShip.x + randint(-65, 65), PlayerShip.y + randint(-45, 45))
    music.baDing.playUntilDone()
    info.changeScoreBy(10)
    Fuel_Bar.value += Math.constrain(Difficulty - info.score() / 1000, 0.1, 1000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Alien_Health.value += -25
    sprite.destroy()
    music.zapped.playUntilDone()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    pause(500)
    if (sprite.overlapsWith(otherSprite)) {
        info.changeLifeBy(-1)
        Fuel_Bar.value += -3
        music.bigCrash.play()
    }
})
let Torpedo_Y_Velocity2 = 0
let Torpedo_X_Velocity2 = 0
let Torpedo_Y_Acceleration2 = 0
let Torpedo_X_Acceleration2 = 0
let Torpedo_Y_Velocity = 0
let Torpedo_X_Velocity = 0
let Torpedo_Y_Acceleration = 0
let Torpedo_X_Acceleration = 0
let projectile_y_velocity2 = 0
let projectile_x_velocity2 = 0
let projectile: Sprite = null
let projectile_x_velocity = 0
let projectile_y_velocity = 0
let Big_Alien_Pointer: Sprite = null
let Big_Alien_Label: StatusBarSprite = null
let Alien_Follow = 0
let Alien_Torp_Direc = 0
let Torpedo: Sprite = null
let Alien_Distance2 = 0
let Mars_Distance2 = 0
let Earth_Distance2 = 0
let Big_Alien: Sprite = null
let Alien_Distance = 0
let Big_Summoned = 0
let Mars_Distance = 0
let Earth_Distance = 0
let Landed2 = 0
let Landed = 0
let Big_Alien_HP: StatusBarSprite = null
let Ship_Direction2 = 0
let Asteroid_Bar: StatusBarSprite = null
let Asteroid: Sprite = null
let Explosion: Sprite = null
let Ship_Direction = 0
let Mars_Pointer: Sprite = null
let Earth_Pointer: Sprite = null
let Health_Bar2: StatusBarSprite = null
let Shield2: Sprite = null
let Camera: Sprite = null
let PlayerShip2: Sprite = null
let Mars: Sprite = null
let Earth: Sprite = null
let Shield_Bar: StatusBarSprite = null
let Shield: Sprite = null
let Alien_Label: StatusBarSprite = null
let Alien_Health: StatusBarSprite = null
let Alien: Sprite = null
let Health_Bar: StatusBarSprite = null
let Fuel_Bar: StatusBarSprite = null
let Fuel2: Sprite = null
let Fuel: Sprite = null
let PlayerShip: Sprite = null
let Difficulty = 0
let Game_Mode = 0
let Players = 0
game.splash("Use Arrow Keys and Space to Type", "(Press Space to continue)")
music.baDing.play()
for (let index = 0; index < 100; index++) {
    if (Players > 2 || Players < 1) {
        Players = game.askForNumber("How many players? (Maximum 2)", 2)
        if (Players > 2 || Players < 1) {
            music.buzzer.play()
        } else {
            music.baDing.play()
        }
    }
}
Game_Mode = 0
if (Players > 1) {
    for (let index = 0; index < 100; index++) {
        if (Game_Mode > 2 || Game_Mode < 1) {
            Game_Mode = game.askForNumber("Select Mode.  1 for co-op, 2 for PVP", 2)
            if (Game_Mode > 2 || Game_Mode < 1) {
                music.buzzer.play()
            } else {
                music.baDing.play()
            }
        }
    }
}
if (Game_Mode > 1) {
    Difficulty = 3
    game.splash("Arrow keys to move", "Space to fire lasers")
    game.splash("X to fire torpedoes")
    if (Players > 1) {
        game.splash("Player 2, use UIOJKL.")
    }
    scene.setBackgroundImage(assets.image`PVP background`)
    PlayerShip = sprites.create(assets.image`SpaceShip Sprite`, SpriteKind.Player)
    PlayerShip.setStayInScreen(true)
    PlayerShip.setBounceOnWall(true)
    Fuel = sprites.create(assets.image`Fuel`, SpriteKind.Food)
    Fuel2 = sprites.create(assets.image`Fuel`, SpriteKind.Food2)
    PlayerShip.setPosition(0, 60)
    Fuel_Bar = statusbars.create(50, 8, StatusBarKind.Energy)
    Fuel_Bar.attachToSprite(PlayerShip, 43, 0)
    Fuel_Bar.max = 10000000000000
    Fuel_Bar.value = 100000000000000 + Difficulty
    Fuel_Bar.setLabel("Fuel")
    scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
    scroller.setCameraScrollingMultipliers(0.5, 0.5)
    Health_Bar = statusbars.create(10, 2, StatusBarKind.Health)
    Health_Bar.attachToSprite(PlayerShip, 1, 0)
    Health_Bar.setLabel("HP")
    Health_Bar.setColor(7, 2)
    Alien = sprites.create(assets.image`Alien up`, SpriteKind.Enemy)
    Alien.setPosition(-100, 100)
    Alien.z = 1
    Alien.follow(PlayerShip, 0)
    Alien_Health = statusbars.create(10, 2, StatusBarKind.Health)
    Alien_Health.attachToSprite(Alien, 4, 0)
    Alien_Health.setLabel("HP")
    Alien_Label = statusbars.create(0, 0, StatusBarKind.Health)
    Alien_Label.attachToSprite(Alien, 10, 0)
    Alien_Label.setLabel("Alien")
    Shield = sprites.create(assets.image`Shield`, SpriteKind.Shield)
    Shield_Bar = statusbars.create(10, 2, StatusBarKind.Health)
    Shield_Bar.max = 10
    Shield_Bar.setColor(9, 0)
    Earth = sprites.create(assets.image`Earth`, SpriteKind.Planet)
    Earth.z = -2
    Earth.y = 1000000
    Mars = sprites.create(assets.image`Mars`, SpriteKind.Planet)
    Mars.setPosition(999999999, 999999999)
    scene.setTile(9, assets.image`Light Blue`, true)
    if (Players > 1) {
        PlayerShip2 = sprites.create(assets.image`SpaceShip Sprite2`, SpriteKind.Player)
        PlayerShip2.setPosition(160, 60)
        PlayerShip2.setStayInScreen(true)
        PlayerShip2.setBounceOnWall(true)
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
        Fuel_Bar.attachToSprite(Camera, 1000, 0)
        Shield2 = sprites.create(assets.image`Shield`, SpriteKind.Shield)
        Health_Bar.attachToSprite(PlayerShip, 1, 0)
        Health_Bar2 = statusbars.create(10, 2, StatusBarKind.Health)
        Health_Bar2.attachToSprite(PlayerShip2, 1, 0)
        Health_Bar2.setLabel("P2")
        Health_Bar.setLabel("P1")
        Health_Bar.setBarSize(10, 2)
        Shield_Bar.setBarSize(10, 2)
        Health_Bar.max = 10
        Health_Bar2.max = 10
        Fuel.setPosition(0, -100)
        Fuel2.setPosition(0, -100)
    }
} else {
    Difficulty = game.askForNumber("Select a Difficulty (2=Normal Higher=Easier)", 2)
    if (Difficulty >= 25) {
        music.buzzer.play()
    } else {
        music.baDing.play()
    }
    if (Difficulty >= 25) {
        Difficulty = game.askForNumber("Lol no, too high", 2)
        if (Difficulty >= 25) {
            music.buzzer.play()
        } else {
            music.baDing.play()
        }
    }
    if (Difficulty >= 25) {
        Difficulty = game.askForNumber("I said too high", 2)
        if (Difficulty >= 25) {
            music.buzzer.play()
        } else {
            music.baDing.play()
        }
    }
    for (let index = 0; index < 50; index++) {
        if (Difficulty >= 25) {
            Difficulty = 0
            if (Difficulty >= game.askForNumber("Try below 25", 2)) {
                music.buzzer.play()
            } else {
                music.baDing.play()
            }
        }
    }
    if (Difficulty >= 25) {
        Difficulty = game.askForNumber("You sure?", 2)
        music.baDing.play()
    }
    if (Difficulty >= 25) {
        game.splash("OK fine")
    }
    game.splash("Arrow keys to move", "Space to fire lasers")
    game.splash("X to fire torpedoes")
    if (Players > 1) {
        game.splash("Player 2, use UIOJKL.")
    }
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
    info.setLife(10)
    scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
    scroller.setCameraScrollingMultipliers(0.5, 0.5)
    Health_Bar = statusbars.create(10, 2, StatusBarKind.Health)
    Health_Bar.attachToSprite(PlayerShip, 1, 0)
    Health_Bar.setLabel("HP")
    Health_Bar.setColor(7, 2)
    Alien = sprites.create(assets.image`Alien up`, SpriteKind.Enemy)
    Alien.setPosition(-100, 100)
    Alien.z = 1
    Alien.follow(PlayerShip, 54 - 2 * Difficulty)
    Alien_Health = statusbars.create(10, 2, StatusBarKind.Health)
    Alien_Health.attachToSprite(Alien, 4, 0)
    Alien_Health.setLabel("HP")
    Alien_Label = statusbars.create(0, 0, StatusBarKind.Health)
    Alien_Label.attachToSprite(Alien, 10, 0)
    Alien_Label.setLabel("Alien")
    Shield = sprites.create(assets.image`Shield`, SpriteKind.Shield)
    Shield_Bar = statusbars.create(10, 2, StatusBarKind.Health)
    Shield_Bar.max = 10
    Shield_Bar.setColor(9, 0)
    Earth = sprites.create(assets.image`Earth`, SpriteKind.Planet)
    Earth.z = -2
    Earth.y = 150
    Mars = sprites.create(assets.image`Mars`, SpriteKind.Planet)
    Mars.z = -2
    Mars.setPosition(randint(-1000, 1000), randint(-1000, 1000))
    Earth_Pointer = sprites.create(assets.image`Earth Pointer`, SpriteKind.Marker)
    Earth_Pointer.setStayInScreen(true)
    Earth_Pointer.z = 1000
    Mars_Pointer = sprites.create(assets.image`Mars Pointer`, SpriteKind.Marker)
    Mars_Pointer.setStayInScreen(true)
    Mars_Pointer.z = 1000
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
        Shield2 = sprites.create(assets.image`Shield`, SpriteKind.Shield)
        Health_Bar.attachToSprite(Camera, 37, 0)
        Health_Bar.setBarSize(20, 4)
        Shield_Bar.setBarSize(20, 4)
    }
}
forever(function () {
    Earth_Distance = Math.sqrt((Earth.x - PlayerShip.x) ** 2 + (Earth.y - PlayerShip.y) ** 2)
    Mars_Distance = Math.sqrt((Mars.x - PlayerShip.x) ** 2 + (Mars.y - PlayerShip.y) ** 2)
    PlayerShip.ax = (500000 * (Earth.x - PlayerShip.x) / Earth_Distance ** 3 + 190000 * (Mars.x - PlayerShip.x) / Mars_Distance ** 3) * Landed
    PlayerShip.ay = (500000 * (Earth.y - PlayerShip.y) / Earth_Distance ** 3 + 190000 * (Mars.y - PlayerShip.y) / Mars_Distance ** 3) * Landed
    if (Big_Summoned == 1) {
        Alien_Distance = Math.sqrt((Big_Alien.x - PlayerShip.x) ** 2 + (Big_Alien.y - PlayerShip.y) ** 2)
        PlayerShip.ax += 190000 * (Big_Alien.x - PlayerShip.x) / Alien_Distance ** 3
        PlayerShip.ay += 190000 * (Big_Alien.y - PlayerShip.y) / Alien_Distance ** 3
    }
    if (Players == 2) {
        Earth_Distance2 = Math.sqrt((Earth.x - PlayerShip2.x) ** 2 + (Earth.y - PlayerShip2.y) ** 2)
        Mars_Distance2 = Math.sqrt((Mars.x - PlayerShip2.x) ** 2 + (Mars.y - PlayerShip2.y) ** 2)
        PlayerShip2.ax = (500000 * (Earth.x - PlayerShip2.x) / Earth_Distance2 ** 3 + 190000 * (Mars.x - PlayerShip2.x) / Mars_Distance2 ** 3) * Landed2
        PlayerShip2.ay = (500000 * (Earth.y - PlayerShip2.y) / Earth_Distance2 ** 3 + 190000 * (Mars.y - PlayerShip2.y) / Mars_Distance2 ** 3) * Landed2
        if (Big_Summoned == 1) {
            Alien_Distance2 = Math.sqrt((Big_Alien.x - PlayerShip2.x) ** 2 + (Big_Alien.y - PlayerShip2.y) ** 2)
            PlayerShip.ax += 190000 * (Big_Alien.x - PlayerShip2.x) / Alien_Distance2 ** 3
            PlayerShip.ay += 190000 * (Big_Alien.y - PlayerShip2.y) / Alien_Distance2 ** 3
        }
    }
})
forever(function () {
    if (Big_Summoned == 1) {
        pause(750)
        Torpedo = sprites.createProjectileFromSprite(assets.image`Torpedo Up`, Big_Alien, Big_Alien.vx * 4, Big_Alien.vy * 4)
        Torpedo.ax = Big_Alien.vx * 4
        Torpedo.ay = Big_Alien.vy * 4
        Torpedo.setFlag(SpriteFlag.AutoDestroy, false)
        Torpedo.lifespan = 10000
        Torpedo.setKind(SpriteKind.Enemy_Torpedo)
        Torpedo.startEffect(effects.fire, 10000)
        if (Math.abs(Torpedo.vy) > Math.abs(Torpedo.vx) && Torpedo.vy < 0) {
            Alien_Torp_Direc = 0
        } else if (Math.abs(Torpedo.vx) > Math.abs(Torpedo.vy) && Torpedo.vx > 0) {
            Alien_Torp_Direc = 1
        } else if (Math.abs(Torpedo.vy) > Math.abs(Torpedo.vx) && Torpedo.vy > 0) {
            Alien_Torp_Direc = 2
        } else {
            Alien_Torp_Direc = 3
        }
        if (Alien_Torp_Direc == 0) {
            Torpedo.setImage(assets.image`Torpedo Up`)
        } else if (Alien_Torp_Direc == 2) {
            Torpedo.setImage(assets.image`Torpedo Down`)
        } else if (Alien_Torp_Direc == 1) {
            Torpedo.setImage(assets.image`Torpedo Right`)
        } else {
            Torpedo.setImage(assets.image`Torpedo Left`)
        }
    }
})
forever(function () {
    if (Big_Summoned == 1 && (Math.abs(PlayerShip.x - Big_Alien.x) > 600 || Math.abs(PlayerShip.y - Big_Alien.y) > 600)) {
        Alien.setPosition(PlayerShip.x + randint(-300, 300), PlayerShip.y + randint(-300, -150))
        Big_Alien_HP.value = 100
    }
})
forever(function () {
    if (Big_Summoned == 1 && Big_Alien_HP.value == 0) {
        Big_Alien.follow(PlayerShip, 0)
        music.bigCrash.play()
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
            `, Big_Alien, 0, 0)
        Explosion.lifespan = 800
        Explosion.z = 100
        Fuel_Bar.value += Math.constrain(50 + (Difficulty - info.score() / 5000), 0.1, 1000)
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
        pause(600)
        Big_Alien.setPosition(PlayerShip.x + randint(-300, 300), PlayerShip.y + randint(-300, -150))
        info.changeLifeBy(2)
        Big_Alien_HP.value = 100
        info.changeScoreBy(200)
        pause(5000)
        if (Players > 1) {
            Alien_Follow = randint(1, 2)
            if (Alien_Follow == 1) {
                Big_Alien.follow(PlayerShip, 10)
            } else {
                Big_Alien.follow(PlayerShip2, 10)
            }
        } else {
            Big_Alien.follow(PlayerShip, 10)
        }
    }
})
forever(function () {
    if (info.score() >= 10000 && Big_Summoned == 0) {
        Big_Alien = sprites.create(assets.image`Big Alien`, SpriteKind.Big_Enemy)
        Big_Alien.setPosition(PlayerShip.x + 200, PlayerShip.y - 200)
        Big_Alien.follow(PlayerShip, 10)
        Big_Summoned = 1
        Big_Alien_HP = statusbars.create(20, 4, StatusBarKind.Health)
        Big_Alien_HP.attachToSprite(Big_Alien, 2, 0)
        Big_Alien_Label = statusbars.create(0, 0, StatusBarKind.Health)
        Big_Alien_Label.attachToSprite(Big_Alien, 7, 0)
        Big_Alien_Label.setLabel("Alien Mothership")
        Big_Alien_Pointer = sprites.create(img`
            . . 
            . . 
            . . 
            . . 
            . . 
            . . 
            . . 
            . . 
            . . 
            . . 
            . . 
            7 7 
            7 7 
            `, SpriteKind.Marker)
        Big_Alien_Pointer.setStayInScreen(true)
        music.spooky.playUntilDone()
    }
})
forever(function () {
    if (Big_Summoned == 1) {
        music.spooky.playUntilDone()
    }
})
forever(function () {
    if (Players > 1 && Game_Mode != 2) {
        scene.centerCameraAt((PlayerShip.x + PlayerShip2.x) / 2, (PlayerShip.y + PlayerShip2.y) / 2)
        Camera.setPosition((PlayerShip.x + PlayerShip2.x) / 2, (PlayerShip.y + PlayerShip2.y) / 2)
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
    if (Math.abs(PlayerShip.x - Alien.x) > 600 || Math.abs(PlayerShip.y - Alien.y) > 600) {
        Alien.follow(PlayerShip, 0)
        Alien.setPosition(PlayerShip.x + randint(-300, -150), PlayerShip.y + randint(-300, -150))
        Alien_Health.value = 100
        pause(5000)
        Alien.follow(PlayerShip, 50)
    }
})
forever(function () {
    if (Game_Mode != 2) {
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
    if (info.life() > 10 && Players == 1) {
        Shield.setPosition(PlayerShip.x, PlayerShip.y)
        Shield_Bar.attachToSprite(PlayerShip, 3, 6)
        Shield_Bar.value = info.life() - 10
    } else {
        Shield.setPosition(1000000000000, 1000000000)
        Shield_Bar.attachToSprite(PlayerShip, 100000, 0)
    }
})
forever(function () {
    if (Game_Mode != 2) {
        Health_Bar.value = info.life() * 10
    }
})
forever(function () {
    if (info.life() > 10 && Players == 2) {
        Shield.setPosition(PlayerShip.x, PlayerShip.y)
        Shield2.setPosition(PlayerShip2.x, PlayerShip2.y)
        Shield_Bar.attachToSprite(Camera, 38, 6)
        Shield_Bar.value = info.life() - 10
    } else if (Players == 2) {
        Shield2.setPosition(1000000000000, 1000000000)
        Shield_Bar.attachToSprite(Camera, 100000, 0)
    } else {
    	
    }
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
    if (Alien_Health.value == 0) {
        Alien.follow(PlayerShip, 0)
        music.bigCrash.play()
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
        if (Players > 1) {
            Alien_Follow = randint(1, 2)
            if (Alien_Follow == 1) {
                Alien.follow(PlayerShip, 54 - 2 * Difficulty)
            } else {
                Alien.follow(PlayerShip2, 54 - 2 * Difficulty)
            }
        } else {
            Alien.follow(PlayerShip, 54 - 2 * Difficulty)
        }
    }
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
    while (controller.A.isPressed()) {
        music.pewPew.play()
        projectile = sprites.createProjectileFromSprite(assets.image`Laser things updown`, PlayerShip, projectile_x_velocity + randint(-10, 10), projectile_y_velocity + randint(-10, 10))
        projectile.setKind(SpriteKind.Projectile)
        if (Ship_Direction == 0 || Ship_Direction == 2) {
            projectile.setImage(assets.image`Laser things updown`)
        } else {
            projectile.setImage(assets.image`Laser things leftright`)
        }
        if (Game_Mode == 2) {
            projectile.setFlag(SpriteFlag.Ghost, true)
            pause(200)
            projectile.setFlag(SpriteFlag.Ghost, false)
        } else {
            pause(200)
        }
    }
})
forever(function () {
    if (Mars_Distance > 20 && Earth_Distance > 46) {
        Landed = 1
    }
})
forever(function () {
    if (Earth_Distance2 > 46 && Mars_Distance2 > 20) {
        Landed2 = 1
    }
})
forever(function () {
    if (Players == 2) {
        while (controller.player2.isPressed(ControllerButton.A)) {
            music.pewPew.play()
            projectile = sprites.createProjectileFromSprite(assets.image`Laser things updown`, PlayerShip2, projectile_x_velocity2 + randint(-10, 10), projectile_y_velocity2 + randint(-10, 10))
            projectile.setKind(SpriteKind.Projectile)
            if (Ship_Direction2 == 0 || Ship_Direction2 == 2) {
                projectile.setImage(assets.image`Laser things updown2`)
            } else {
                projectile.setImage(assets.image`Laser things leftright2`)
            }
            if (Game_Mode == 2) {
                projectile.setFlag(SpriteFlag.Ghost, true)
                pause(200)
                projectile.setFlag(SpriteFlag.Ghost, false)
            } else {
                pause(200)
            }
        }
    }
})
forever(function () {
    if (Game_Mode != 2) {
        Fuel_Bar.value += -0.05
        pause(100)
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
        Torpedo.ax = Torpedo_X_Acceleration
        Torpedo.ay = Torpedo_Y_Acceleration
        Torpedo.setFlag(SpriteFlag.AutoDestroy, false)
        Torpedo.setVelocity(Torpedo_X_Velocity, Torpedo_Y_Velocity)
        Torpedo.lifespan = 10000
        Torpedo.setKind(SpriteKind.Torpedo)
        Torpedo.startEffect(effects.fire, 10000)
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
        if (Game_Mode == 2) {
            Torpedo.setFlag(SpriteFlag.Ghost, true)
            pause(400)
            Torpedo.setFlag(SpriteFlag.Ghost, false)
            pause(600)
        } else {
            pause(1000)
        }
    }
})
forever(function () {
    if (Players == 2) {
        while (controller.player2.isPressed(ControllerButton.B)) {
            Torpedo = sprites.createProjectileFromSprite(assets.image`Torpedo Up`, PlayerShip2, 0, 0)
            Torpedo.ax = Torpedo_X_Acceleration2
            Torpedo.ay = Torpedo_Y_Acceleration2
            Torpedo.setFlag(SpriteFlag.AutoDestroy, false)
            Torpedo.setVelocity(Torpedo_X_Velocity2, Torpedo_Y_Velocity2)
            Torpedo.lifespan = 10000
            Torpedo.setKind(SpriteKind.Torpedo)
            Torpedo.startEffect(effects.fire, 10000)
            Fuel_Bar.value += -3
            if (Ship_Direction2 == 0) {
                Torpedo.setImage(assets.image`Torpedo Up`)
            } else if (Ship_Direction2 == 2) {
                Torpedo.setImage(assets.image`Torpedo Down`)
            } else if (Ship_Direction2 == 1) {
                Torpedo.setImage(assets.image`Torpedo Right`)
            } else {
                Torpedo.setImage(assets.image`Torpedo Left`)
            }
            music.sonar.play()
            if (Game_Mode == 2) {
                Torpedo.setFlag(SpriteFlag.Ghost, true)
                pause(400)
                Torpedo.setFlag(SpriteFlag.Ghost, false)
                pause(600)
            } else {
                pause(1000)
            }
        }
    }
})
forever(function () {
    if (Game_Mode != 2) {
        pause(5000)
        Fuel.setPosition(PlayerShip.x + randint(-65, 65), PlayerShip.y + randint(-45, 45))
        pause(5000)
        Fuel2.setPosition(PlayerShip.x + randint(-65, 65), PlayerShip.y + randint(-45, 45))
    }
})
forever(function () {
    if (Players == 2) {
        if (Ship_Direction2 == 0) {
            projectile_y_velocity2 = PlayerShip2.vy + -100
            projectile_x_velocity2 = 0
        } else {
            if (Ship_Direction2 == 2) {
                projectile_y_velocity2 = PlayerShip2.vy + 100
                projectile_x_velocity2 = 0
            } else {
                if (Ship_Direction2 == 3) {
                    projectile_x_velocity2 = PlayerShip2.vx + -100
                    projectile_y_velocity2 = 0
                } else {
                    if (Ship_Direction2 == 1) {
                        projectile_x_velocity2 = PlayerShip2.vx + 100
                        projectile_y_velocity2 = 0
                    }
                }
            }
        }
    }
})
forever(function () {
    if (Ship_Direction == 0) {
        Torpedo_Y_Acceleration = -100
        Torpedo_X_Acceleration = 0
        Torpedo_X_Velocity = 0
        Torpedo_Y_Velocity = PlayerShip.vy + -50
    } else if (Ship_Direction == 1) {
        Torpedo_X_Acceleration = 100
        Torpedo_Y_Acceleration = 0
        Torpedo_X_Velocity = PlayerShip.vx + 50
        Torpedo_Y_Velocity = 0
    } else if (Ship_Direction == 2) {
        Torpedo_Y_Acceleration = 100
        Torpedo_X_Acceleration = 0
        Torpedo_X_Velocity = 0
        Torpedo_Y_Velocity = PlayerShip.vy + 50
    } else {
        Torpedo_X_Acceleration = -100
        Torpedo_Y_Acceleration = 0
        Torpedo_X_Velocity = PlayerShip.vx + -50
        Torpedo_Y_Velocity = 0
    }
})
forever(function () {
    if (Players == 2) {
        if (Ship_Direction2 == 0) {
            Torpedo_Y_Acceleration2 = -100
            Torpedo_X_Acceleration2 = 0
            Torpedo_X_Velocity2 = 0
            Torpedo_Y_Velocity2 = PlayerShip2.vy + -50
        } else if (Ship_Direction2 == 1) {
            Torpedo_X_Acceleration2 = 100
            Torpedo_Y_Acceleration2 = 0
            Torpedo_X_Velocity2 = PlayerShip2.vx + 50
            Torpedo_Y_Velocity2 = 0
        } else if (Ship_Direction2 == 2) {
            Torpedo_Y_Acceleration2 = 100
            Torpedo_X_Acceleration2 = 0
            Torpedo_X_Velocity2 = 0
            Torpedo_Y_Velocity2 = PlayerShip2.vy + 50
        } else {
            Torpedo_X_Acceleration2 = -100
            Torpedo_Y_Acceleration2 = 0
            Torpedo_X_Velocity2 = PlayerShip2.vx + -50
            Torpedo_Y_Velocity2 = 0
        }
    }
})
forever(function () {
    if (Game_Mode < 2) {
        Earth_Pointer.setPosition(Earth.x, Earth.y)
        Mars_Pointer.setPosition(Mars.x, Mars.y)
        if (Big_Summoned == 1) {
            Big_Alien_Pointer.setPosition(Big_Alien.x, Big_Alien.y)
        }
    }
})

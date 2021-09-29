const Sprayer = extend("sprayer", PowerTurret, () => {
    buildVisibility: BuildVisibility.shown,
    shootType: extend(BombBulletType, () => {
        fragBullet: extend(BasicBulletType, () => {
        })
    });
});

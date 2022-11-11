let AC_GAME_OBJECTS = [];

class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);

        this.timedelta = 0;
    }

    start() {

    }

    update() {

    }

    destroy() {
        for (let i in AC_GAME_OBJECTS) {
            AC_GAME_OBJECTS.splice(i, 1);
            break;
        }
    }
}
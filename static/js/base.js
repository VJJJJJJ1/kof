import { GameMap } from "/static/js/game_map/base.js";
import { Kyo } from "/static/js/player/kyo.js";
// import { Snake } from "/static/js/player/snake.js";
// import { Mai } from "/static/js/player/mai.js";
// import { Iori } from "/static/js/player/iori.js";
import { Kul } from "/static/js/player/kul.js";

class KOF {
    constructor(id) {
        this.$kof = $('#' + id);
        // console.log(this.$kof);
        // game_map里的this为root，用于索引全部的对象
        this.game_map = new GameMap(this);

        this.players = [
            new Kyo(this, {
                id: 0,
                x: 200,
                y: 0,
                width: 120,
                height: 200,
                color: 'blue',
            }),

            new Kul(this, {
                id: 1,
                x: 900,
                y: 0,
                width: 120,
                height: 200,
                color: 'red',
            }),

        ];
    }
}

export {
    KOF
}
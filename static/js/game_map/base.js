import { AcGameObject } from "/static/js/ac_game_objects/base.js";
import { Controller } from "/static/js/controller/base.js";

export class GameMap extends AcGameObject {
    constructor(root) {
        super();

        this.root = root;
        // tabindex=0可聚焦
        this.$canvas = $('<canvas width="1280" height="720" tabindex=0></canvas>');
        // 利用ctx对canvas进行操作
        this.ctx = this.$canvas[0].getContext('2d');
        this.root.$kof.append(this.$canvas);
        this.$canvas.focus();

        this.controller = new Controller(this.$canvas);

        this.root.$kof.append($(`<div class="kof-head">
        <div class="kof-head-hp-0"><div><div></div></div></div>
        <div class="kof-head-timer">60</div>
        <div class="kof-head-hp-1"><div><div></div></div></div>
    </div>`));

    }
    start() {

    }

    update() {
        this.render();
    }

    render() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        // console.log(this.ctx.canvas.width);
        // this.ctx.fillStyle = 'black';
        // this.ctx.fillRect(0, 0, this.$canvas.width(), this.$canvas.height());
    }
}
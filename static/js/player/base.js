import { AcGameObject } from "/static/js/ac_game_objects/base.js";


export class Player extends AcGameObject {
    constructor(root, info) {
        super();

        this.root = root;
        this.id = info.id;
        this.x = info.x;
        this.y = info.y;
        this.width = info.width;
        this.height = info.height;
        this.color = info.color;

        // 正方向定义为1，反方向-1
        this.direction = 1;

        this.vx = 0;
        this.vy = 0;

        this.speedx = 400;  // 水平速度
        this.speedy = 2000;  // 跳起的初始速度

        this.gravity = 50;

        this.ctx = this.root.game_map.ctx;
        this.pressed_keys = this.root.game_map.controller.pressed_keys;

        this.status = 3; // 0: idle， 1：向前， 2：向后， 3：跳跃， 4：攻击， 5：被打， 6：死亡
    }

    start() {

    }

    update_controller() {
        let w, s, a, d, space;
        if (this.id === 0) {
            w = this.pressed_keys.has('w');
            s = this.pressed_keys.has('s');
            a = this.pressed_keys.has('a');
            d = this.pressed_keys.has('d');
            space = this.pressed_keys.has(' ');
        }
        else {
            w = this.pressed_keys.has('ArrowUp');
            s = this.pressed_keys.has('ArrowDown');
            a = this.pressed_keys.has('ArrowLeft');
            d = this.pressed_keys.has('ArrowRight');
            space = this.pressed_keys.has('Enter');
        }

        console.log(this.pressed_keys);
        if (this.status === 0 || this.status === 1) {
            if (w) {
                // 三种起跳方式：
                // 1 竖直
                // 2 向后45°
                // 3 向前45°
                if (d) this.vx = this.speedx;
                else if (a) this.vx = -this.speedx;
                else this.vx = 0;

                this.vy = -this.speedy;
                this.status = 3; // 0: idle， 1：向前， 2：向后， 3：跳跃， 4：攻击， 5：被打， 6：死亡
            }
            else if (d) {
                this.vx = this.speedx;
                this.status = 1;
            }
            else if (a) {
                this.vx = -this.speedx;
                this.status = 2;
            }
            else {
                this.vx = 0;
                this.status = 0;
            }
        }
    }

    update_move() {
        this.vy += this.gravity;

        this.x += this.vx * this.timedelta / 1000;
        this.y += this.vy * this.timedelta / 1000;

        if (this.y > 450) {
            this.y = 450;
            this.vy = 0;
            this.status = 0;
        }

        if (this.x < 0) {
            this.x = 0;
        }
        else if (this.x + this.width > this.root.game_map.$canvas.width()) {
            this.x = this.root.game_map.$canvas.width() - this.width;
        }
        // console.log("v:" + this.vy);
        // console.log('y:' + this.y);
    }

    update() {
        this.update_controller();
        this.update_move();
        this.render();
    }

    render() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
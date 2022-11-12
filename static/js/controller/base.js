export class Controller {
    constructor($canvas) {
        this.$canvas = $canvas;

        // pressed_keys存储目前按了哪些键位（需要去重）
        this.pressed_keys = new Set();
        this.start();
    }

    start() {
        let outer = this;
        this.$canvas.keydown(function (e) {
            outer.pressed_keys.add(e.key);
            // console.log(e.type, e.key, e.shiftKey, e.ctrlKey, e.altKey);
        });

        this.$canvas.keyup(function (e) {
            outer.pressed_keys.delete(e.key);
        });
    }
}
import { Player } from '/static/js/player/base.js';
import { GIF } from '/static/js/utils/gif.js';

export class Kul extends Player {
    constructor(root, info) {
        super(root, info);

        this.init_animations();
    }

    init_animations() {
        let outer = this;
        let offsets = [0, 20, -22, -140, 0, 90, -80];
        for (let i = 0; i < 7; i++) {
            let gif = GIF();
            gif.load(`/static/images/player/kul/${i}.gif`);
            this.animations.set(i, {
                gif: gif,
                frame_cnt: 0,  // 总图片数
                frame_rate: 10,  // 每10帧过渡一次
                offset_y: offsets[i],  // y方向偏移量
                loaded: false,  // 是否加载完整
                scale: 2,  // 放大多少倍
            });


            gif.onload = function () {
                let obj = outer.animations.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true;

                if (i === 3) {
                    obj.frame_rate = 10;
                }
            }
        }
    }
}

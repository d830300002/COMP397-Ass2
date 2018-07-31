var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Play.prototype.Start = function () {
            this.windSound = createjs.Sound.play("wind");
            this.windSound.loop = -1;
            this.windSound.volume = 0.5;
            this._sky = new objects.Sky();
            this._plane = new objects.Plane();
            this._bullets = new Array();
            // this._lazers=new Array<objects.Lazer>();
            this._ufo = new objects.Ufo();
            this._lazer = new objects.Lazer();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._sky.Update();
            this._plane.Update();
            this._ufo.Update();
            this._lazer.Update();
            if (this._lazer.x < 0) {
                var lazerSound = createjs.Sound.play("lazershoot");
                lazerSound.volume = 0.5;
                this._lazer.y = this._ufo.y;
                this._lazer.x = this._ufo.x - 50;
            }
            if (managers.Collision.check(this._plane, this._lazer)) {
                managers.Game.ScoreBoard.Lives -= 1;
                this._lazer.y = this._ufo.y;
                this._lazer.x = this._ufo.x - 50;
            }
            this._bullets.forEach(function (bullet) {
                bullet.Update();
                if (managers.Collision.check(_this._ufo, bullet)) {
                    managers.Game.ScoreBoard.Score += 100;
                    _this.removeChild(bullet);
                }
                if (bullet.x > 900) {
                    _this.removeChild(bullet);
                }
            });
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Destroy = function () {
            this.windSound.stop();
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            this.addChild(this._sky);
            this.addChild(this._plane);
            this.addChild(this._ufo);
            this.on("click", function () {
                var bulletSound = createjs.Sound.play("bulletshoot");
                bulletSound.volume = 0.5;
                this._bullet = new objects.Bullet();
                this._bullet.y = this._plane.y;
                this.addChild(this._bullet);
                this._bullets.push(this._bullet);
                console.log(this.children);
            }, this);
            this.addChild(this._lazer);
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map
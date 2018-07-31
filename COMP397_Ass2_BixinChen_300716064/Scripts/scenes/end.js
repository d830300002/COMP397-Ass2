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
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // constructors
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        End.prototype.Start = function () {
            this._sky = new objects.Sky();
            this._gameOverLabel = new objects.Label("Game Over!", "60px", "Consolas", "#000000", 450, 230, true);
            this._restartButton = new objects.Button("playagain", 450, 320, true);
            this._exitButton = new objects.Button("exittomenu", 450, 360, true);
            this.Main();
        };
        End.prototype.Update = function () {
        };
        End.prototype.Reset = function () {
        };
        End.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        End.prototype.Main = function () {
            console.log("Starting - END SCENE");
            this.addChild(this._sky);
            this.addChild(this._gameOverLabel);
            this.addChild(managers.Game.ScoreBoard.HighScoreLabel);
            this.addChild(this._restartButton);
            this.addChild(this._exitButton);
            this._restartButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._exitButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map
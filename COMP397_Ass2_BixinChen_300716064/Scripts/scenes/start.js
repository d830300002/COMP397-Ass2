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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Start = function () {
            this._sky = new objects.Sky();
            this._welcomeLabel = new objects.Label("Welcome!", "60px", "Consolas", "#000000", 450, 150, true);
            this._startButton = new objects.Button("start", 450, 270, true);
            this._instructionButton = new objects.Button("instruction", 450, 320, true);
            this.Main();
        };
        Start.prototype.Update = function () {
            this._sky.Update();
        };
        Start.prototype.Reset = function () {
        };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Start.prototype.Main = function () {
            console.log("Starting - START SCENE");
            this.addChild(this._sky);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._instructionButton);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._instructionButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.INS;
            }, this);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map
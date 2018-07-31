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
    var Instruction = /** @class */ (function (_super) {
        __extends(Instruction, _super);
        // constructors
        function Instruction() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Instruction.prototype.Start = function () {
            this._sky = new objects.Sky();
            this._ruleLabel = new objects.Label("1. Use the mouse to avoid UFO's laser\n\n2. Use the left mouse button to fire", "20px", "Consolas", "#000000", 450, 200, true);
            this._startButton = new objects.Button("start", 450, 320, true);
            this._exitButton = new objects.Button("exittomenu", 450, 360, true);
            this.Main();
        };
        Instruction.prototype.Update = function () {
            this._sky.Update();
        };
        Instruction.prototype.Reset = function () {
        };
        Instruction.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Instruction.prototype.Main = function () {
            console.log("Starting - END SCENE");
            this.addChild(this._sky);
            this.addChild(this._ruleLabel);
            this.addChild(this._startButton);
            this.addChild(this._exitButton);
            this._startButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._exitButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        };
        return Instruction;
    }(objects.Scene));
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));
//# sourceMappingURL=instruction.js.map
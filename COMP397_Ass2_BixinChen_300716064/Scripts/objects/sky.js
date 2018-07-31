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
var objects;
(function (objects) {
    var Sky = /** @class */ (function (_super) {
        __extends(Sky, _super);
        // constructors
        function Sky() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("sky")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Sky.prototype._checkBounds = function () {
            // check the top boundary
            if (this.x <= -900) {
                this.Reset();
            }
        };
        // public methods
        Sky.prototype.Start = function () {
            this._horizontalSpeed = 5; // the sky will move down 5ppf
            this.Reset();
        };
        Sky.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Sky.prototype.Reset = function () {
            this.x = 0;
        };
        return Sky;
    }(createjs.Bitmap));
    objects.Sky = Sky;
})(objects || (objects = {}));
//# sourceMappingURL=sky.js.map
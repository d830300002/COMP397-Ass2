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
    var Lazer = /** @class */ (function (_super) {
        __extends(Lazer, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Bullet;
         */
        function Lazer() {
            var _this = _super.call(this, "lazer") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Lazer.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._horizontalSpeed = 10;
            this.x = 0;
            this.y = 250;
        };
        Lazer.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
        };
        Lazer.prototype.Reset = function () {
        };
        return Lazer;
    }(objects.GameObject));
    objects.Lazer = Lazer;
})(objects || (objects = {}));
//# sourceMappingURL=lazer.js.map
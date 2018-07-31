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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Bullet;
         */
        function Bullet() {
            var _this = _super.call(this, "bullet") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Bullet.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._horizontalSpeed = 10;
            this.x = 150;
        };
        Bullet.prototype.Update = function () {
            this.x += this._horizontalSpeed;
        };
        Bullet.prototype.Reset = function () {
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map
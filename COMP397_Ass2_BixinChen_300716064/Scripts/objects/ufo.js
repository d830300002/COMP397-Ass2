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
    var Ufo = /** @class */ (function (_super) {
        __extends(Ufo, _super);
        /**
         * Creates an instance of Cloud.
         * @memberof Ufo
         */
        function Ufo() {
            var _this = _super.call(this, "ufo") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Ufo.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.y >= 350 || this.x >= 850 || this.x <= 600 || this.y <= 50) {
                this.Reset();
            }
        };
        // public methods
        Ufo.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._verticalSpeed = 2;
            this._horizontalSpeed = 2;
            this.x = 700;
            this.y = 200;
            this.Reset();
        };
        Ufo.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
            this._checkBounds();
        };
        Ufo.prototype.Reset = function () {
            this._verticalSpeed = -Math.floor((Math.random() * 5) - 2);
            this._horizontalSpeed = -this._horizontalSpeed; // between -2 and 2 ppf     
        };
        return Ufo;
    }(objects.GameObject));
    objects.Ufo = Ufo;
})(objects || (objects = {}));
//# sourceMappingURL=ufo.js.map
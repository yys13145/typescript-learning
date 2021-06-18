"use strict";
exports.__esModule = true;
exports.Point = void 0;
// implements关键字用来实现接口
var Point = /** @class */ (function () {
    // private x:number;
    // private y:number;
    //ts的构造函数无法重载
    function Point(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.drawPoint = function () {
            console.log("x:" + _this.x + "y:" + _this.y);
        };
        this.getDistance = function (p) {
            // return Math.pow(p.x - this.x,2) + Math.pow(p.y-this.y,2)
            return 0;
        };
        //私有变量的访问使用自定义get和set
        this.setX = function (value) {
            if (value < 0) {
                throw new Error("value不能小于0");
            }
            _this.x = value;
        };
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    return Point;
}());
exports.Point = Point;

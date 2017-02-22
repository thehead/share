function Circle(radius) {
    this.radius = radius;
    Circle.circlesMade++;
}

Circle.draw = function draw(circle, canvas) { /* Canvas绘制代码 */ }
    Object.defineProperty(Circle, "circlesMade", {
        get: function() {
            return !this._count ? 0 : this._count;
        },
        set: function(val) {
            this._count = val;
        }
});

Circle.prototype = {
    area: function area() {
        return Math.pow(this.radius, 2) * Math.PI;
    }
};

Object.defineProperty(Circle.prototype, "radius", {
    get: function() {
        return this._radius;
    },
    set: function(radius) {
        if (!Number.isInteger(radius))
            throw new Error("圆的半径必须为整数。");
        this._radius = radius;
    }
});
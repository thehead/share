'use strict';

var A = function A() {
    this.age = 24;
    this.name = 'ale';
    this.add = function () {
        return 1;
    };
};
A.prototype.move = function () {
    console.log('名字是 ' + this.name + ',年龄是 ' + this.age);
};

var a = new A();
var b = new A();
// console.log(a.move());
console.log(a.add === b.add, a.move === b.move);

//# sourceMappingURL=继承-compiled.js.map
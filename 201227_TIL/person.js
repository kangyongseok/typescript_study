"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name) {
        var _this = this;
        this.sayHello = function () {
            return "Hello, " + _this.name;
        };
        this.name = name;
    }
    return Person;
}());
exports.Person = Person;

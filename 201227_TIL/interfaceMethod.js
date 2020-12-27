var Person = /** @class */ (function () {
    function Person(name) {
        var _this = this;
        this.name = name;
        this.sayHello = function () {
            console.log("Hello, " + _this.name);
        };
    }
    return Person;
}());
var greeter = function (person) {
    person.sayHello();
};
var me = new Person('kang');
greeter(me);

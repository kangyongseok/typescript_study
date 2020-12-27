var Todo = /** @class */ (function () {
    function Todo(id, content, complete) {
        this.id = id;
        this.content = content;
        this.complete = complete;
    }
    return Todo;
}());
var todo = new Todo(1, 'typescript', false);
console.log(todo);

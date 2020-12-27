// 변수 todo의 타입으로 인터페이스 Todo 를 선언
var todo;
todo = {
    id: 1,
    content: 'typescript',
    completed: true,
    test: 123
};
var text = "id = " + todo.id + ", content = " + todo.content + ", complete = " + todo.completed;
console.log(text);

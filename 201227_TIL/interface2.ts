interface Todo { // 인터페이스 정의
    id: number;
    content: string;
    completed: boolean;
}

const newTodo: Todo = {
    id: 1,
    content: 'typescript',
    completed: true,
}

let todos: Todo[] = [];

const addTodo = (todo: Todo) => {
    todos = [...todos, todo]
}

addTodo(newTodo);
console.log(todos)
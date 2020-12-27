interface TestTodo {
    id: number;
    content: string;
    complete: boolean;
}

class Todo implements TestTodo {
    constructor (
        public id: number,
        public content: string,
        public complete: boolean,
    ) {}
}

const todo1 = new Todo(1, 'typescript', false);

console.log(todo1);
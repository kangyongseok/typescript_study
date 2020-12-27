interface Todo { // 인터페이스 정의
    id: number;
    content: string;
    completed: boolean;
}

// 변수 todo의 타입으로 인터페이스 Todo 를 선언
let todo: Todo;
todo = {
    id: 1,
    content: 'typescript',
    completed: true,
}


const text = `id = ${todo.id}, content = ${todo.content}, complete = ${todo.completed}`;

console.log(text);

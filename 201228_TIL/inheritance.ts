interface Person {
    name: string;
    age?: number;
}

interface Student extends Person {
    grade: number;
}

const student: Student = {
    name: 'kang',
    age: 20,
    grade: 3,
}

// =========================== //

interface Developer {
    skills: string[];
}

interface Webdeveloper extends Person, Developer {}

const webDeveloper: Webdeveloper = {
    name: 'kang',
    age: 20,
    skills: ['react', 'javascript', 'typescript']
}

//=============================//

class Person2 {
    constructor(public name: string, public age: number) {}
}

interface Developer2 extends Person2 {
    skills: string[];
}

const developer: Developer2 = {
    name: 'kang',
    age: 20,
    skills: ['vue', 'electron']
}
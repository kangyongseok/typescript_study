interface TestPerson {
    name: string;
    sayHello(): void; // 추상메소드 인터페이스에 정의
}

class Person implements TestPerson {
    constructor(public name: string) {}

    sayHello = () => {
        console.log(`Hello, ${this.name}`);
    }
}

const greeter = (person: TestPerson): void => {
    person.sayHello();
}

const me = new Person('kang');

greeter(me);
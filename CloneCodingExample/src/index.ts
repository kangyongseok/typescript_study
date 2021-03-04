interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "kang",
    age: 24,
    gender: "male",
}

const sayHi = (person: Human): string => {
    return person.name
}
interface Person {
    name: string;
    age?: number;
}

const person = {} as Person;
person.name = 'kang';
person.age = 30;
// person.address = 'seoul'; error

//=====================================//

type Person2 = {
    name: string,
    age?: number,
}

const person2 = {} as Person2;
person.name = 'kang';
person.age = 20;
// person.address = 'seoul' error

//========================================//

type Str = 'kang';
type Union = string | null;
type Name = 'kang' | 'Kim';
type Num = 1 | 2 | 3 | 4 | 5;
type Obj = { a: 1 } | { b: 2 }
type Func = (() => string) | (() => void);

// type Shape = Square | Rectangle | Circle;

type Tuple = [string, boolean];
// const t: Tuple = ['', '']; error
## 프로퍼티 옵셔널
일반적으로 인터페이스에 정의된 내용들은 사용하는 메소드나 변수에서 무조건 사용되어야하고 구현 되어야만한다. 그러나 항상 예외의 경우는 있듯이 선택적인 값이 필요할 때가 있는데 이때 사용할 수 있는것이 '?' 가 있다.
```typescript
interface UserInfo {
    username: string;
    password: string;
    age?: number; // 프로퍼티 옵셔널
    address?: string; // 프로퍼티 옵셔널
}

const userInfo: UserInfo = {
    username: 'kangyongsuek@gmail.com',
    password: '1234'
}

console.log(userInfo); // { username: 'kangyongsuek@gmail.com', password: '1234' }
```
프로퍼티 옵셔널이 설정된 값에 대해서는 값이 존재해도, 존재하지않아도 오류를 발생시키지 않는다.



## 인터페이스 상속
인터페이스는 extends 를 사용하여 또다른 인터페이스나 클래스를 상속받을 수 있다.

```typescript
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
```

하나의 상속뿐아니라 다중상속또한 가능하다


```typescript
interface Person {
    name: string;
    age?: number;
}

interface Developer {
    skills: string[];
}

interface Webdeveloper extends Person, Developer {}

const webDeveloper: Webdeveloper = {
    name: 'kang',
    age: 20,
    skills: ['react', 'javascript', 'typescript']
}
```

그리고 인터페이스는 인터페이스뿐만아니라 클래스도 상속이 가능하다

```typescript
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
```

## TypeAlias
인터페이스에서는 표현할수 없는 값들을 Type Alias 를 통해서 지정할 수 있다.
```typescript
type Str = 'kang';
type Union = string | null;
type Name = 'kang' | 'Kim';
type Num = 1 | 2 | 3 | 4 | 5;
type Obj = { a: 1 } | { b: 2 }
type Func = (() => string) | (() => void);

// type Shape = Square | Rectangle | Circle;

type Tuple = [string, boolean];
// const t: Tuple = ['', '']; error
```
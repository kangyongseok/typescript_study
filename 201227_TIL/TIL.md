## 타입스크립트란
타입스크립트는 정적타입언어로 마이크로소프트에서 개발하고 관리하는 오픈소스 프로그래밍 언어로 어떤 브라우저나 호스트, 운영체제에서도 동작한다. 자바스크립트의 상위집합으로 자바스크립트에서 사용가능한 모든 문법을 타입스크립트에서도 동일하게 사용이 가능하다. 따라서 자바스크립트의 슈퍼셋 이라고도 부른다.

## 타입스트립트 등장배경
자바스크립트는 웹상에서 동적인 움직임과 여러 효과를 주기위해 사용되었지만 오늘날 자바스크립트는 서버와 백엔드 역할까지 올라운드로 활용할 수 있는 언어로 발전해왔다. 그러나 자바스크립트가 갖고있는 최대 장점이자 단점이되는 자유로움 때문에 개발자들간에 코드로의 의사소통이 매우 힘든 언어이기도하다. 
  
타입스크립트는 이러한 동적자바스크립트언어를 다른 객체지향언어들처럼 정적타입으로 코드를 작성할 수 있게 해주며 자바스크립트의 자율성은 제한하지만 훨씬 개발자들간에 안정성을 갖고 협업하며 개발 할 수 있는 방향성을 만들어주었다고 볼 수 있다.

## 타입스크립트 장점
- 컴파일 시간은 늘어나지만 개발코드에대한 안정성을 보장할 수 있다.
- ES6 문법을 사용하여 완전한 객체지향 프로그래밍 환경을 제공한다.

## 타입스크립트 간단 설치 및사용
```javascript
// Nodejs 가 기본적으로 설치되어 있어야 한다.
# npm i -g typescript // typescript 를 전역에 설치
# tsc -v // 타입스크립트 버전확인
# tsc <파일명> // tsc person 해당 명령어를 실행하면 .ts => .js 로 컴파일 진행
# tsc <파일명> -t ES2015 // 컴파일할 자바스크립트 버전 지정 Default 는 ES3
```

**person.ts**
```javascript
class Person {
    private name: string; // Person 클래스 내부에서만 사용가능한 변수 string 타입으로 선언

    constructor(name: string) { 
        // 객체가 생성되면 클래스 내에서  name 변수에 전달받은 인자값으로 초기화
        this.name = name;
    }

    sayHello = () => { // 객체 내에 선언된 메소드
        return `Hello, ${this.name}`;
    }
}

const person = new Person('kang'); // person 변수에 Person 클래스 객체를 생성
console.log(person.sayHello()) // Hello, kang
```

.ts 파일 자체로 실행은 불가능하기때문에 tsc person 명령어를 사용하면 person.js 로 컴파일된 파일이 하나 생성되고 `node person` 으로 실행결과를 확인 할 수 있다.

## tsconfig.json
```javascript
# tsc --init //  tsconfig.json 파일 생성
```

config 옵션에 대해서 몇가지만 살펴보자면
```json
{
    "files": ["person.ts", "./201227_TIL/person.ts"], // 미리 컴파일 진행할 파일목록을 지정할 수 있다.
    "include": ["src/**/*.ts"], // 개별파일이 아닌 해당 폴더 전체를 컴파일진행하도록 지정할 수 있다.
    "exclude": ["node_modules"], // 컴파일하지 않을 폴더 경로를 지정
    "target": "es5", // 컴파일할 자바스크립트의 버전
    "allowJs": true, // 기존 프로젝트에 타입스크립트를 적용해 나갈때 컴파일에 js 파일도 포함시킬때 사용
    "removeComments": true, // 컴파일할때 .ts 에서 작성된 주석 제거
}
```

> TIP  
> 와일드 카드 패턴  
> \* : 해당 디렉토리의 모든 파일 검색  
> ** : 하위 디렉토리를 재귀적으로 접근 (하위 디렉토리에 하위 디렉토리가 또 존재하는경우 반복해서 접근)  
> ? : 해당 디렉토리 안에 파일의 이름중 한글자라도 맞으면 해당


## 기본 타입 사용
```javascript
let isDone: boolean = false;
let decimal: number = 10;
let color: string = "blue";
let list: number[] = [1, 2, 3] // 숫자로만 이루어진 배열
let list2: Array<number> = [1, 2, 3] // 제네릭을 사용한 숫자로만 이루어진 배열
let tuple: [string, number] = ['blue', 10] // [10, 'blue'](X)

enum Color {Red, Blue, Green}
let c: Color = Color.Green;
```
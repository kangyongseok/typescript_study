## 제네릭
제네릭은 C# 이나 JAVA 등의 언어에서 재사용성이 높은 컴포넌트를 만들때 자주 사용되는 특징이다. 특히 한가지타입보다 여러가지 타입에서 동작하는 컴포넌트를 만들때 사용된다.
  
### 일반적인 함수 사용방식
```javascript
function getText(text) {
    return text
}

getText('kang');
getText(10);
getText(true);
```

일반적으로 자바스크립트에서의 함수는 getText 라는 함수명을 갖고있지만 별도의 validator 함수를 만들어 주지 않는이상 넘어간 인자값이 무엇이 되었던 그대로 반환하게 된다. 즉 입력값과 출력값에 대한 타입이 보장되지 않는다

### 제네릭 관점
```typescript
function getText<T>(text: T): T {
    return text;
}

getText<string>('hi');
getText<number>(10);
getText<boolean>(true);
```

T 라는 제네릭을 사용하여 함수를 정의할경우 함수를 사용하면서 제네릭으로 넣은 타입으로 반환값도 나오기때문에 입력값과 출력값에 대한 타입이 보장이되고 여러가지 타입을 하나의 함수로 사용할 수 있다는 점에서 매우 유연하게 사용이가능하고 또 any 라는 타입을 사용할때와도 다르게 명확한 타입 지정이 가능하다.

## 함수
문법 이론 관련해서는 한바퀴 돈것같긴한데 다시 기본중에 기본으로 돌아와서 타입스크립트를 활용한 다양한 함수 사용법에 대해서 정리하려고 한다.

```javascript
function add(a, b) {
    return a + b;
}
```
인자 두개를 전달받아 그 합을 리턴하는 함수이다. 이 함수는 숫자도 문자도 ...그냥 뭐든지 입력받아서 덧셈을 해버리는 함수이다. 어떤 사람은 이 add 를 숫자를 더하는데 사용할수도있고 문자를 더하는데 사용할 수도있다. 문자와 '1' 숫자 1 를 넘겨서 숫자가 리턴되게 할수도있고 아무튼 이 함수를 만든 의도는 숫자와 숫자를 입력받아 숫자의 합을 리턴해주려고 하는데 의도와 다르게 사용되도 막을 방법이 없다는점이다.

```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

이렇게 타입스크립트를 사용하면 일단 인자 2개는 필수값으로 함수사용할때 넘겨 주어여하고 숫자만 받아서 숫자만 리턴해주는 함수를 만들어 의도대로 함수를 사용할 수 있도록 강제할 수 있다.

```typescript
function add(a: number, b: number): number {
    return a + b;
}

add(1, 2) // 3
add(1, 2, 3) // error
add(10) // error
```

매개변수 초기화는 자바스크립트에서 사용하던것과 동일하게 사용하면 된다.

```typescript
function sum2(a: number, b = 100): number {
    return a + b;
}

sum2(1, undefined); // 101
sum2(1, 2, 3); // error
sum2(10); // 110
```

### REST 문법이 적용된 매개변수
ES6문법에서 지원하는 '...rest' 문법을 타입스크립트에서 사용하면 아래와 같다.

```typescript
function sum3(a: number, ...nums: number[]): number {
    let result = 0;
    for (let key in nums) {
        result += nums[key];
    }
    return a + result;
}

sum3(1, 2, 3, 4, 5, 6) // 21
```
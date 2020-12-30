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
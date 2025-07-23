{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown -> 사용X
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any -> 사용X
  let anything: any = 0;
  anything = 'hello';

  // void 함수
  // 함수에서 아무것도 return하지 않으면 void(생략 가능)
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  // 함수에서 절대 return되지 않는 경우를 명시
  function throwError(message: string): never {
    // message -> server (log)
    
    // 1.에러 던질 때,
    throw new Error(message);
    // 2. 무한 반복일 때,
    while (true) {}

    // return;  // undefined 형식(never)에 return 불가
  }

  let neverEnding: never; // 💩

  // objet
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {
    console.log(obj);
  }
  
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}

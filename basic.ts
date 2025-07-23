// let a = 'hello';
// a = 123;

// 타입 검사 -> vscode가 자동으로 돌려줌
// npx tsc --noEmit

// ts -> js로 변환
// npx tsc





// as -> 앞의 타입을 강제로 바꿔줌

let aa = 123;
// aa = 'hello'; // string 형식은 number 형식에 할당 불가

// as -> 위 에러를 잡아줌
aa = 'hello' as unknown as number;




// ! 무조건 있음
// head의 타입 ->  HTMLHeadElement | null
// const head = document.querySelector('#head')
// head.innerHTML = 'hello ts';  // 'head'은(는) 'null'일 수 있습니다.ts(18047)


// ! 붙이면 head의 타입 ->  HTMLHeadElement
const head = document.querySelector('#head')!;


// if로 방지
if(head) {
  head.innerHTML = 'hello ts';
  console.log(head);
}



// type은 string으로! 대문자는 사용X
const a:string = 'hello'
const b:String = ' hell'; // 대문자 사용XXX


type world = 'world' | 'hell';


type Greeting = `hello ${world}!`;
const c:Greeting = 'hello hell!'




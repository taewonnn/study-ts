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
// const head = document.querySelector('head')

// ! 붙이면 head의 타입 ->  HTMLHeadElement
const head = document.querySelector('head')!;

if(head) {
  head.innerHTML = 'hello ts';
  console.log(head);
}
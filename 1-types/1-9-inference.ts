/**
 * Type Inference(타입 추론)
 * 타입 명시 없이 자동으로 추론
 */
let text = 'hello';
text='ddd'
// text=1;

function print(message = 'hello') {
  console.log(message);
}
print('hello');
print();

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);

{
  // Array
  const fruits: string[] = ['🍅', '🍌'];
  const scroes: Array<number> = [1, 3, 4];

  // fruits는 함수안에서 변경이 불가능! readonly
  function printArray(fruits: readonly string[]) {
    // fruits.push() // readonly string[] 형식에 사용 불가
  }

  // Tuple -> interface, type alias, class
  // 서로 다른 타입을 함께 가질 수 있음
  // 사용X
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}

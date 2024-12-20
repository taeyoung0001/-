const 삼육구게임 = (a) => {
  if (a % 9 == 0) {
    console.log("박수2번");
  } else if (a % 3 == 0) {
    console.log("박수 1번");
  } else console.log("통과");
};

const 삼육구게임응용 = (a) => {
  value = a % 10;
  if (value == 3 || value == 6 || value == 9) {
    console.log("박수");
  } else console.log("통과");
};
삼육구게임응용(33);

const 합격했니 = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("숫자만쓰셈");
    return;
  }

  if (a < 40 || b < 40) {
    console.log("불합격");
  } else if (a + b >= 120) {
    console.log("합격");
  } else console.log("불합격");
};

var first = 360;
const 커피리필 = () => {
  let firstOne = (first * 2) / 3;
  let firstTwo = (firstOne * 2) / 3;
  let totla = first + firstOne + firstTwo;
  console.log(totla);
};

// 함수에 분과 초를 차례로 파라미터로 입력하면 ms단위로 바꿔서 뱉어주는 함수
const 함수 = (a, b) => {
  let 분 = a * 60000;
  let 초 = b * 1000;
  return 분 + 초;
};

// 가격을 파라미터로 입력하면 10% 할인된 가격을 뱉는 함수 const 할인 = (a) =>
// 첫 구매여부도 true/false로 둘째파라미터에 입력해서 첫 구매가 맞을 경우 추가로 1.5 달러도 할인
const 할인 = (a, b) => {
  가격 = a * 0.9;
  정수화 = parseInt(가격);
  if (b == true) {
    return 정수화 - 1.5;
  }
  return parseInt(정수화);
};

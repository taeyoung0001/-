const cardBody = document.querySelectorAll(".card-body h5");
const formSelect = document.querySelectorAll(".form-select");

var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// <=로 하니간 무한 루프가 돌아서 밑에 코드가 실행되지 않았다.
// TypeError: Cannot read properties of undefined (reading 'title')
// 너는 3개를 뜻하는데 범위는 4개라고 해서 언디파인 에러 뜸
for (let i = 0; i < cardBody.length; i++) {
  cardBody[i].innerHTML = products[i].title;
}

//자바스크립트로 html 조작하기
var 바지 = document.createElement("option");
바지.innerHTML = "바지";
document.querySelector("#category").appendChild(바지);

// Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
// at HTMLSelectElement.<anonymous> (01.list.js:30:19)
// 위 에러 발생 appendCHild에서 첫번째 매개변수가 node객체가 아니라는 뜻

const pants = [28, 30, 32];
const shirts = [95, 100, 105];
const 옵션설정 = (a) => {
  var optionElement = document.createElement("option");
  //forEach의 a 즉 데이터 값들을 optionElement로 설정
  optionElement.textContent = a;
  formSelect[1].appendChild(optionElement);
};

formSelect[0].addEventListener("change", () => {
  let value = formSelect[0].value;
  formSelect[1].innerHTML = "";
  if (value == "셔츠") {
    formSelect[1].classList.remove("form-hide");
    shirts.forEach((a) => {
      옵션설정(a);
    });
  } else if (value == "바지") {
    formSelect[1].classList.remove("form-hide");
    pants.forEach((a) => {
      옵션설정(a);
    });
  }
});

//객체안에 반복문 꺼내는 방법임임
var obj = { name: "kim", age: 20 };
for (var key in obj) {
  obj[key];
}

var 출석부 = ["흥민", "영희", "철수", "재석"];

const 이름찾기 = (a) => {
  for (let i = 0; i < 출석부.length; i++) {
    if (a == 출석부[i]) {
      console.log("있어요");
      return;
    }
  }
  console.log("없어요");
};

const 구구단 = (a) => {
  for (let b = 1; b <= 9; b++) {
    // console.log(a * b);
  }
};

const 평균점수계산기 = (arr, b) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  console.log(result / arr.length);
  if (result / arr.length < b) {
    console.log("점수올랐네");
  } else console.log("ㅅㄱ");
};

//get요청으로 받아온 데이터는 파라미터 자리 저기 data로 저장해놈놈
const URL = "https://codingapple1.github.io/price.json";
fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    document.querySelector(".col-sm-4 p").innerHTML = `가격 : ${data.price}원`;
  })
  .catch(() => {
    console.log("전송 실패");
  });

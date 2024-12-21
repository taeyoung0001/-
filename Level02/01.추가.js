//시간초 사라지게 하기
// let time = 10;
// const counterElement = document.querySelector(".counter");
// const alertElement = document.querySelector(".alert");
// setInterval(() => {
//   counterElement.innerHTML = time;
//   time = time - 1;
//   if (time >= 0) {
//     counterElement.innerHTML = time;
//     console.log(time);
//   }
//   if (time == 0) {
//     alertElement.style.display = "none";
//   }
// }, 1000);

// 스크롤 이벤트 리스너
// 보통 윈도우에 관습적으로 붙임, 스크롤할때 마다 함수 실행
// 1. 스크롤롤
window.addEventListener("scroll", function () {});

// 2.스크롤 Y축
// window.scrollY 사용하면 현재 페이지를 얼마나 위에서 부터 스크롤했는지 px 단위(X축 동일)
window.addEventListener("scroll", function () {
  //   console.log(this.window.scrollY);
});

// 3.강제로 스크롤 바 움직이기
// x축 y 축
// window.scrollTo(0, 500);

// 4.현재위치에서 움직이기
// window.scrollBy(0, 200);

window.addEventListener("scroll", () => {
  console.log(window.scrollY); // 현재 스크롤 위치를 콘솔에 출력
  const navbarBrand = document.querySelector(".navbar-brand");
  if (window.scrollY >= 1000) {
    // 스크롤 위치가 1000px 이상일 때
    navbarBrand.style.fontSize = "16px";
  } else {
    // 스크롤 위치가 1000px 미만일 때
    navbarBrand.style.fontSize = "50px"; // 원래 크기로 되돌리기
  }
});

// 5.scrollTop은 현재 위치 알려주는거임임
// document.querySelector(".lorem").addEventListener("scroll", () => {
//   var 스크롤양 = document.querySelector(".lorem").scrollTop;
//   console.log(스크롤양);
// });

// 6. 스크롤 가능한 실제 높이 구하는 법
// - 셀렉터 찾고 .scrollHeight 붙이기
// 컴퓨터마다 차이가 있어서 10px정도는 줘야함
document.querySelector(".lorem").addEventListener("scroll", () => {
  lorem = document.querySelector(".lorem");
  let 스크롤양 = lorem.scrollTop;
  let 실제높이 = lorem.scrollHeight;
  let 화면에보이는높이 = lorem.clientHeight;
  let 스크롤최종 = 스크롤양 + 화면에보이는높이 + 10;

  if (스크롤최종 >= 실제높이) {
    // alert("다내렸습니다.");
    // document.querySelector(".lorem").style.display = "none";
  }
});

//진행률 표시
document.querySelector(".lorem").addEventListener("scroll", () => {
  lorem = document.querySelector(".lorem");
  let 스크롤양 = lorem.scrollTop;
  let 실제높이 = lorem.scrollHeight;
  let 화면에보이는높이 = lorem.clientHeight;
  let 스크롤최종 = 스크롤양 + 화면에보이는높이;
  let 진행률 = parseInt((스크롤최종 / 실제높이) * 100);
  if (진행률 > 98) {
    진행률 = 100;
  }
  document.querySelector(".percent").innerHTML = 진행률;
});

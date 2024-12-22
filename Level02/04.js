// products를 클릭하면 products를 제외한 모든 태그의의 오렌지와 쇼 태그를 제거한다.
// 클릭한 곳에 오렌지 태그와 쇼태그를 붙인다.
// 클리스리스트 에서 클래서 제거하거나 추가할때 .을 붙이면 안된다.
// array.forEach((니가정한변수)=>{ 니가정한변수.함수붙일거 쓰셈})
// 이러면 앞에 어레이에서 하나씩꺼내서 니가정한 변수로 대체됨

// $(".list").click(function (e) {
//   if (e.target == document.querySelectorAll(".tab-button")[0]) {
//     탭열기(0);
//   }
//   if (e.target == document.querySelectorAll(".tab-button")[1]) {
//     탭열기(1);
//   }
//   if (e.target == document.querySelectorAll(".tab-button")[2]) {
//     탭열기(2);
//   }
// });

function 탭열기(i) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(i).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(i).addClass("show");
}

//데이터 아이디로 숨겨놓는 방법(잡기술)
$(".list").click((e) => {
  탭열기(e.target.dataset.id);
});

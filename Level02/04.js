// products를 클릭하면 products를 제외한 모든 태그의의 오렌지와 쇼 태그를 제거한다.
// 클릭한 곳에 오렌지 태그와 쇼태그를 붙인다.
// 클리스리스트 에서 클래서 제거하거나 추가할때 .을 붙이면 안된다.

for (let i = 0; i <= 2; i++) {
  document.querySelectorAll(".tab-button")[i].addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach((button) => {
      button.classList.remove("orange");
    });
    document.querySelectorAll(".tab-content").forEach((button) => {
      button.classList.remove("show");
    });
    document.querySelectorAll(".tab-button")[i].classList.add("orange");
    document.querySelectorAll(".tab-content")[i].classList.add("show");
  });
}

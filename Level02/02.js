//버튼기능
document
  .querySelectorAll(".slide-1, .slide-2, .slide-3")
  .forEach((button, index) => {
    button.addEventListener("click", () => {
      document.querySelector(
        ".slide-container"
      ).style.transform = `translateX(-${index * 100}vw)`;
    });
  });

//다음기능
var 전체사진 = $(".slide-container .slide-box").length;
var 지금사진 = 1;
$(".right-btn").on("click", () => {
  if (지금사진 < 전체사진) {
    $(".slide-container").css("transform", `translateX(-${지금사진}00vw)`);
    지금사진 = 지금사진 + 1;
  } else if (지금사진 == 전체사진) {
    $(".slide-container").css("transform", "translateX(0)");
    지금사진 = 1;
  }
});

//이전기능
var 전체사진 = $(".slide-container .slide-box").length;
var 지금사진 = 1;
$(".left-btn").on("click", () => {
  if (지금사진 > 1) {
    지금사진 = 지금사진 - 1;
    $(".slide-container").css(
      "transform",
      `translateX(-${(지금사진 - 1) * 100}vw)`
    );
  }
});

//시각좌표
let 시각좌표 = 0;
let 눌렀냐 = false;

$(".slide-box")
  .eq(0)
  .on("mousedown", (e) => {
    시각좌표 = e.clientX;
    눌렀냐 = true;
  });

$(".slide-box")
  .eq(0)
  .on("mousemove", (e) => {
    let move = e.clientX - 시각좌표;
    if (눌렀냐 == true) {
      console.log(눌렀냐);
      $(".slide-container").css("transform", `translateX(-${move}px)`);
      console.log("시각좌표", 시각좌표);
      눌렀냐 == false;
      console.log(눌렀냐);
    }
  });

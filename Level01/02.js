// 네브바토글
$(".navbar-toggler").on("click", () => {
  $(".list-group").toggleClass("show-list");
});

// 오픈 토글
$("#open").on("click", () => {
  $(".black-bg").toggleClass("show");
});

// 닫기 토글
$("#close").on("click", () => {
  $(".black-bg").toggleClass("show");
});

// 폼태그 제출
// $("form").on("submit", (e) => {
//   if ($("#email").val() == "") {
//     alert("이메일이 공백입니다.");
//     e.preventDefault();
//   } else if ($("#password").val() == "") {
//     alert("비밀번호가 공백입니다.");
//     e.preventDefault();
//   } else if ($("#password").val().length < 6) {
//     alert("비밀번호는 6자리 이상이여야 합니다.");
//     $("#password").val("");

//     e.preventDefault();
//   } else console.log("로그인 성공");
// });

// 뱃지 클릭 횟수
var count = 0;
$(".badge").on("click", () => {
  //   const isEven = count % 2 === 0;
  //   $(".badge").html(isEven ? "Light" : "Dark");
  //   $(".check").toggleClass("dark", !isEven);
  //   $(".check").toggleClass("light", isEven);
  //   count = count + 1;
  // });
  count = count + 1;
  if (count % 2 == 0) {
    console.log("짝수");
    $(".badge").html("Dark");
    $(".check").removeClass("light").addClass("dark");
  } else {
    $(".badge").html("Light");
    $(".check").removeClass("dark").addClass("light");
  }
});

//이메일 정규표현식
$("form").on("submit", function (e) {
  var 입력한값 = document.getElementById("email").value;
  if (!/\S+@\S+\.\S+/.test(입력한값)) {
    alert("이메일형식아님");
    e.preventDefault();
  }
});

// 검은색 배경화면일때만 닫아라
// 이벤트버블링방지
// 자바스크립트에서 검은 배경화면은 .black-bg가 아니라
// document.querySelector(".black-bg") 이거임임

document.querySelector(".black-bg").addEventListener("click", (e) => {
  if (e.target == document.querySelector(".black-bg")) {
    document.querySelector(".black-bg").classList.toggle("show");
  }
});

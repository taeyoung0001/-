//html이 있는 경로를 기준으로 상대경로를 잡아야함
const titleText = document.querySelector(".titleText");

fetch("../cody.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`네트워크 응답이 실패했습니다: ${res.status}`);
    }
    return res.json();
  })

  .then((data) => {
    console.log(data.temp[0].minusTemp);
    titleText.innerHTML = data.temp[0].minusTemp.title;
  })
  .catch((error) => {
    console.error("Fetch 오류:", error);
  });

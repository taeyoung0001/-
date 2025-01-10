const titleText = document.querySelector(".titleText");
const cloth = document.querySelector(".cloth");

navigator.geolocation.getCurrentPosition((position) => {
  const latitudePoint = Math.floor(position.coords.latitude);
  const longitudePoint = Math.floor(position.coords.longitude);

  const wheaterApiURL =
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst";
  const wheaterParams = {
    ServiceKey:
      "rCXuadjbi2hTHsQEno3iDKbvbgEwJkWlicjs4Zfj9GUb3VZ1u4mVZuxpUwBYd/Z1dYqejqUE0AOldMgf9JyeLA==",
    pageNo: 1,
    numOfRows: 30,
    dataType: "JSON",
    base_date: "20250110",
    base_time: "0900",
    nx: latitudePoint,
    ny: longitudePoint,
  };

  const queryString = new URLSearchParams(wheaterParams).toString();
  const wheaterURL = `${wheaterApiURL}?${queryString}`;

  fetch(wheaterURL)
    .then((response) => response.json())
    .then((data) => {
      const wheatherData = data.response.body.items.item;
      const PTYData = wheatherData.filter((item) => item.category === "PTY");
      const value = PTYData[0].fcstValue;

      fetch("../cody.json")
        .then((res) => {
          if (!res.ok) {
            throw new Error(`네트워크 응답이 실패했습니다: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          const card = document.querySelector(".cardBox");
          let title = "";
          let clothing = [];

          // temp 배열에서 해당하는 온도의 데이터 찾기
          if (value < 0) {
            const minusData = data.temp.find((item) => "minusTemp" in item);
            title = minusData.minusTemp.title;
            clothing = minusData.minusTemp.recommend.picture;
          } else if (value == 0) {
            const zeroData = data.temp.find((item) => "zeroTemp" in item);
            title = zeroData.zeroTemp.title;
            clothing = zeroData.zeroTemp.recommend.picture;
          } else {
            const plusData = data.temp.find((item) => "plusTemp" in item);
            title = plusData.plusTemp.title;
            clothing = plusData.plusTemp.recommend.picture;
          }

          // 타이틀 업데이트
          titleText.textContent = title;

          // 카드 생성
          if (clothing && clothing.length > 0) {
            card.innerHTML = clothing
              .map(
                (item) => `
                <div class="card">
                  <img src="../public/cody/${item.photo}.png" alt="${
                  item.title
                }" />
                  <div class="backCard">
                    <p>상품정보</p>
                    <p class="product-title">${item.title}</p>
                    <p class="brand">${item.brand}</p>
                    <p class="product-price">${item.price.toLocaleString()}원</p>
                    <button>장바구니에 담기</button>
                  </div>
                </div>
              `
              )
              .join("");
          } else {
            card.innerHTML = "<p>추천 의류를 찾을 수 없습니다.</p>";
          }
        })
        .catch((error) => {
          console.error("JSON 파일 불러오기 오류:", error);
        });
    })
    .catch((error) => {
      console.error("날씨 API 오류:", error);
    });
});

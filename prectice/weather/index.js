//나의 위치 찾기(위도, 경도)
const latitude = document.querySelector("#latitude");
const longitude = document.querySelector("#longitude");
const T1H = document.querySelector("#T1H");
const PTYText = document.querySelector("#PTYText");
const imgElement = document.getElementById("PTYImg");

navigator.geolocation.getCurrentPosition((position) => {
  const latitudePoint = Math.floor(position.coords.latitude);
  const longitudePoint = Math.floor(position.coords.longitude);
  //   latitude.innerHTML = latitudePoint;
  //   longitude.innerHTML = longitudePoint;

  //구글 api로 내 위치 찾기

  //날씨찾기
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
    //이거때문에 따로 분류를 못하고 위치 찾기함수에서 넣음
    nx: latitudePoint,
    ny: longitudePoint,
  };

  //나의 위치를 이용해서 날씨 표현하기
  const queryString = new URLSearchParams(wheaterParams).toString();
  const wheaterURL = `${wheaterApiURL}?${queryString}`;

  fetch(wheaterURL)
    .then((response) => response.json())
    .then((data) => {
      const wheatherData = data.response.body.items.item;
      console.log(wheatherData);
      const T1HData = wheatherData.filter((item) => item.category === "T1H");
      const PTYData = wheatherData.filter((item) => item.category === "PTY");
      const LGTData = wheatherData.filter((item) => item.category === "LGT");

      console.log(PTYData);

      //데이터값
      //현재기온
      T1H.innerHTML = T1HData[1].fcstValue;
      console.log(PTYData[1]);
      //   PTYData[1].fcstValue

      switch (Number(4)) {
        case 0:
          PTYText.innerHTML = "비 없음";
          imgElement.src = "./public/clouds.png";
          break;
        case 1:
          PTYText.innerHTML = "비";
          imgElement.src = "./public/heavy-rain.png";
          break;
        case 2:
          PTYText.innerHTML = "비/눈";
          imgElement.src = "./public/sunny.png";
          break;
        case 3:
          PTYText.innerHTML = "눈";
          imgElement.src = "./public/snow.png";
          break;
        case 4:
          PTYText.innerHTML = "소나기";
          imgElement.src = "./public/heavy-rain.png";
          break;
        case 5:
          PTYText.innerHTML = "빗방울";
          imgElement.src = "./public/heavy-rain.png";
          break;
        case 6:
          PTYText.innerHTML = "빗방울/눈날림";
          imgElement.src = "./public/snow.png";
          break;
        case 7:
          PTYText.innerHTML = "눈날림";
          imgElement.src = "./public/snow.png";
          break;
      }

      imgElement.onload = function () {
        loadingMessage.style.display = "none"; // 이미지 로딩 완료 후 로딩 메시지 숨김
        imgElement.style.display = "block"; // 날씨 이미지 표시
      };
    })
    .catch((error) => console.log("오류", error));
});

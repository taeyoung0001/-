//동적으로 생성하기
const 템플릿불러오기 = (array) => {
  array.forEach((a, i) => {
    let 템플릿 = `
        <div class="card">
          <img src="../public/${a.photo}" alt="" />
          <div class="detail">
            <p class="title">${a.title}</p>
            <p class="market">${a.brand}</p>
            <p class="price">가격: <span>${a.price}</span>원</p>
          </div>
          <button class="addCart">담기</button>
        </div>
      `;
    document.querySelector(".contents").insertAdjacentHTML("beforeend", 템플릿);
  });
};

//패치로 JSON 파일 불러오기
fetch("./store.json")
  .then((res) => res.json())
  .then((data) => {
    템플릿불러오기(data.products);
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });

//검색하면 나오게하기
//담기누르면 장바구니 창에 넣어지기(장바구니에 넣이지면 인풋창이 하나 생기면서 수량창이 생김)
//드래그해도 장바구니 창에 넣기(이미 있는거면 수량만 올라감)
//최종금액 보이게하기
//영수증보기누르면 오늘 날짜랑, 주문한거 제목이랑 가격, 수량 체크되고 합계로 나오고
// 총합계 해서 구하기

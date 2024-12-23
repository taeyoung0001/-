//전역변수지정
const search = document.querySelector(".search");
const IdInput = document.querySelector("#search-input");

//패치로 JSON 파일 불러오기
fetch("./store.json")
  .then((res) => res.json())
  .then((data) => {
    const 템플릿불러오기 = (array) => {
      document.querySelector(".contents").innerHTML = "";
      array.forEach((a, i) => {
        let 템플릿 = `
            <div class="card">
              <img src="../public/${a.photo}" alt="" />
              <div class="detail">
                <p class="title">${a.title}</p>
                <p class="market">${a.brand}</p>
                <p class="price">가격: <span>${a.price}</span>원</p>
              </div>
              <button class="addCart" data-index="${i}">담기</button>
            </div>
          `;
        document
          .querySelector(".contents")
          .insertAdjacentHTML("beforeend", 템플릿);
      });

      // addCart 버튼에 이벤트 리스너 추가
      const addCartButtons = document.querySelectorAll(".addCart");
      addCartButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          const index = e.target.dataset.index; // 클릭된 버튼의 data-index 값 가져오기
          const selectedProduct = data.products[index]; // 선택된 제품 정보

          // 장바구니에 항목 추가
          document.querySelector(".drag-section p").innerHTML = "";
          let 템플릿 = `
            <div class="drag-card">
              <img src="../public/${selectedProduct.photo}" alt="" />
              <div class="detail-cart">
                <p class="title">${selectedProduct.title}</p>
                <p class="market">${selectedProduct.brand}</p>
                <p class="price">가격: <span>${selectedProduct.price}</span>원</p>
                <input type="number" class="count" value = 1 />
              </div>
            </div>
          `;

          document
            .querySelector(".drag-section")
            .insertAdjacentHTML("beforeend", 템플릿);
        });
      });
    };

    // 처음에 모든 제품 템플릿 불러오기
    템플릿불러오기(data.products);

    // 검색 기능
    search.addEventListener("click", () => {
      const searchValue = IdInput.value.trim().toLowerCase();
      if (searchValue === "") {
        템플릿불러오기(data.products);
      } else {
        const filteredProducts = data.products.filter((a) =>
          a.title.toLowerCase().includes(searchValue)
        );

        if (filteredProducts.length === 0) {
          alert("검색결과가 없습니다.");
        } else {
          템플릿불러오기(filteredProducts);
        }
      }
      IdInput.value = ""; // 검색 후 입력창 비우기
    });
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });

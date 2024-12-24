// 전역변수 지정
const search = document.querySelector(".search");
const IdInput = document.querySelector("#search-input");

// 장바구니 배열 (제품 정보와 수량을 담을 배열)
let cart = [];

// 패치로 JSON 파일 불러오기
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

          // 장바구니에 이미 있는지 확인
          const existingProduct = cart.find((item) => item.index === index);
          if (existingProduct) {
            // 장바구니에 이미 있다면, 수량만 증가시킨다
            existingProduct.count += 1;

            // 해당 제품의 수량을 업데이트하는 부분
            const productInCart = document.querySelector(
              `#cart-${index} .count`
            );
            productInCart.value = existingProduct.count;
          } else {
            // 장바구니에 없다면, 새로 추가한다
            cart.push({ index: index, product: selectedProduct, count: 1 });

            // 장바구니에 항목 추가
            document.querySelector(".drag-section p").innerHTML = "";
            let 템플릿 = `
              <div class="drag-card" id="cart-${index}">
                <img src="../public/${selectedProduct.photo}" alt="" />
                <div class="detail-cart">
                  <p class="title">${selectedProduct.title}</p>
                  <p class="market">${selectedProduct.brand}</p>
                  <p class="price">가격: <span>${selectedProduct.price}</span>원</p>
                  <input type="number" class="count" value="1" />
                  <button class= "del" data-index="${index}">삭제</button>
                </div>
              </div>
            `;
            document
              .querySelector(".drag-section")
              .insertAdjacentHTML("beforeend", 템플릿);
          }

          //최종가격
          //reduce로 배열 순환하여 가격 더하기
          const totalPrice = cart.reduce(
            (total, item) => total + item.product.price * item.count,
            0
          );
          document.querySelector(".result span").innerHTML = `${totalPrice}`;
        });
      });

      //영수증보기
      //cart에서 꺼내오면 될듯

      document.querySelector(".show-recipe").addEventListener("click", () => {
        if (!cart || cart.length === 0) {
          alert("장바구니에 아무것도 없습니다.");
        } else {
          const recipe = document.querySelector(".recipe");
          recipe.classList.toggle("show");

          if (!recipe.classList.contains("show")) {
            document.querySelector(".recipe .order").innerHTML = "";
            document.querySelector(".recipe .price").innerHTML = "";
          } else {
            let orderBox = [];
            let countBox = [];
            let priceBox = [];

            // .order span에 추가할 주문 항목들을 순차적으로 처리
            const orderContainer = document.querySelector(".recipe .order");
            const priceContainer = document.querySelector(".recipe .price");

            // 총 가격을 계산할 변수
            let totalPrice = 0;

            // cart 배열을 순회하여 정보를 처리합니다.
            cart.forEach((element) => {
              orderBox.push(element.product.title); // 제품 제목 추가
              countBox.push(element.count); // 제품 수량 추가
              priceBox.push(element.product.price); // 제품 가격 추가

              // 주문 항목을 표시할 span 요소들을 선택하여 추가
              orderContainer.innerHTML += `${element.product.title} <span class="count"> ***** ${element.count}</span>개 `;

              // 가격 계산
              totalPrice += element.product.price * element.count;
            });

            // 최종 가격을 .price에 표시
            priceContainer.innerHTML = `${totalPrice}원`;

            console.log(orderBox);
            console.log(countBox);
            console.log(priceBox);
          }
        }
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
    // 삭제 버튼 클릭 이벤트 추가
    // .drag-section 요소에 click 이벤트 리스너를 추가하여, del 클래스를 가진 버튼이 클릭되었을 때 삭제
    // e.target.dataset.index로 삭제하려는 제품의 index를 가져오고, 해당 제품이 장바구니에 있는지 확인
    // 장바구니 배열에서 해당 제품을 삭제하고, 화면에서 해당 카드(#cart-${index})를 제거
    document.querySelector(".drag-section").addEventListener("click", (e) => {
      if (e.target.classList.contains("del")) {
        // 삭제하려는 제품의 index 가져오기
        const index = e.target.dataset.index;
        // 해당 제품 찾기
        const productToRemove = cart.find((item) => item.index === index);

        if (productToRemove) {
          // 장바구니에서 해당 제품 필터링
          // 각 항목의 index 값이 삭제하려는 제품의 index 값과 다를 때만 그 항목을 새 배열에 포함
          // 삭제는 항상 꺼내오고 수정하고 다시 넣거나, 애초에 그거만 없이 배열에 넣는다..
          cart = cart.filter((item) => item.index !== index);
          // 화면에서 해당 제품 카드 삭제
          document.querySelector(`#cart-${index}`).remove();
        }
      }
      const totalPrice = cart.reduce(
        (total, item) => total + item.product.price * item.count,
        0
      );
      document.querySelector(".result span").innerHTML = `${totalPrice}`;
    });
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });

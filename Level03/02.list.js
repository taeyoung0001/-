const URLS = [
  "https://codingapple1.github.io/js/more1.json",
  "https://codingapple1.github.io/js/more2.json",
];

var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

var filteredProducts = [...products]; // 필터링된 데이터를 저장할 배열

// 템플릿 불러오기 함수
const 템플릿불러오기 = (array) => {
  array.map((a, i) => {
    let 템플릿 = ` <div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100" />
        <h5>${a.title}</h5>
        <p>가격 : ${a.price}</p>
        <button class="buy">구매</button>
      </div>
      `;
    $(".row").append(템플릿);
  });
};

// 초기 데이터 로딩
템플릿불러오기(products);

//로컬스토리지에서 장바구니 정보
const loadCartFromLocalStorage = () => {
  if (localStorage.getItem("cart") != null) {
    return JSON.parse(localStorage.getItem("cart"));
  }
  return [];
};

$(".row").on("click", ".buy", (e) => {
  const title = $(e.target).siblings("h5").text();
  let cart = loadCartFromLocalStorage(); // 기존 장바구니를 불러옴

  if (!cart.includes(title)) {
    // 장바구니에 없는 상품은 추가
    cart.unshift(title);
  } else {
    // 장바구니에 이미 있는 상품은 삭제 후 맨 뒤에 추가(수정)
    cart = cart.filter((item) => item !== title); // 해당 항목 삭제
    cart.unshift(title); // 맨 뒤에 추가
  }

  // 로컬스토리지에 업데이트된 장바구니 저장
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart); // 장바구니 출력
});

// 가격순 정렬
$(".price").on("click", () => {
  filteredProducts.sort((a, b) => a.price - b.price);
  $(".row").html("");
  템플릿불러오기(filteredProducts);
});

// 가나다순 정렬
$(".hangle").on("click", () => {
  filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  $(".row").html("");
  템플릿불러오기(filteredProducts);
});

// 6만원 이하 필터링
$(".six").on("click", () => {
  filteredProducts = products.filter((a) => a.price <= 60000);
  $(".row").html("");
  템플릿불러오기(filteredProducts);
});

// 사용자 입력 가격 필터링
$(".check").on("click", () => {
  const inputValue = document.querySelector(".howMuch").value;
  filteredProducts = products.filter((a) => a.price <= inputValue);
  $(".row").html("");
  $(".howMuch").val(""); // 입력창 비우기
  템플릿불러오기(filteredProducts);
});

// 더보기 버튼 클릭 시 추가 데이터 로딩
let 버튼클릭수 = 0;
$(".more").on("click", () => {
  if (버튼클릭수 < URLS.length) {
    fetch(URLS[버튼클릭수])
      .then((res) => res.json())
      .then((data) => {
        // 더보기로 가져온 데이터를 기존 products 배열에 추가
        products = [...products, ...data];
        filteredProducts = [...products]; // 추가된 데이터 반영
        템플릿불러오기(data);
      });
    버튼클릭수++;
    console.log(버튼클릭수);
  }
});

$(".reset").on("click", () => {
  $(".row").html("");

  템플릿불러오기(products);
});

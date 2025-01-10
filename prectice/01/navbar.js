const nav = document.getElementById("nav");

const navHTML = `
<nav class="naviContainer">
<button class="folder-btn">메뉴 보기</button>
<ul class="naviWrap">
  <li><a href="./wheater.html">날씨</a></li>
  <li><a href="./todo.html">할일</a></li>
  <li><a href="./cody.html">코디</a></li>
</ul>
</nav>
`;
nav.innerHTML = navHTML;

const folderBtn = document.querySelector(".folder-btn");
const navi = document.querySelector(".naviWrap");

const navDisplay = () => {
  folderBtn.style.display = "none";
  navi.classList.add("soft");
};
folderBtn.addEventListener("click", navDisplay);

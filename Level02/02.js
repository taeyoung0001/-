document.querySelectorAll(".num1, .num2,.num3").forEach((button, index) => {
  button.addEventListener("click", () => {
    document.querySelector(".slide-container").style.transform = `translateX(-${
      index * 100
    }vw)`;
  });
});

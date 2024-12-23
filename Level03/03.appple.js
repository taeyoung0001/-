const updateCardEffect = () => {
  const opacity = (-1 / (500 - index * 100)) * scrollPosition + 115 / 50;
  const scale = (-1 / (5000 - index * 500)) * scrollPosition + 565 / 500;
};

$(window).scroll(() => {
  var 높이 = $(window).scrollTop();

  var y = (-1 / 500) * 높이 + 115 / 50;
  var z = (-1 / 5000) * 높이 + 565 / 500;
  console.log(z);
  $(".card-box").eq(0).css("opacity", y);
  $(".card-box").eq(0).css("transform", `scale( ${z} )`);
});

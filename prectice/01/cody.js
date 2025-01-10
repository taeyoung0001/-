fetch("./cody.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`네트워크 응답이 실패했습니다: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch 오류:", error);
  });

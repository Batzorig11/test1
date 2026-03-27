function play(my) {
  const choices = ["haich", "chuluu", "daawuu"];
  const com = choices[Math.floor(Math.random() * 3)];

  const player = document.getElementById("player");
  const computer = document.getElementById("computer");
  const result = document.getElementById("result");

  // reset animation
  player.classList.remove("show");
  computer.classList.remove("show");

  // зураг тавих
  player.style.backgroundImage = getImg(my);
  computer.style.backgroundImage = getImg(com);

  setTimeout(() => {
    player.classList.add("show");
    computer.classList.add("show");
  }, 100);

  // result
  let res = "";

  if (my === com) {
    res = "😐 Тэнцлээ";
    result.className = "";
  } else if (
    (my === "haich" && com === "daawuu") ||
    (my === "chuluu" && com === "haich") ||
    (my === "daawuu" && com === "chuluu")
  ) {
    res = "🎉 ЧИ ЯЛЛАА!";
    result.className = "win";
  } else {
    res = "💀 COMPUTER ЯЛЛАА!";
    result.className = "lose";
  }

  result.innerText = res;
}

function getImg(type) {
  if (type === "haich")
    return "url('https://cdn-icons-png.flaticon.com/512/254/254198.png')";
  if (type === "chuluu")
    return "url('https://cdn-icons-png.flaticon.com/512/616/616494.png')";
  if (type === "daawuu")
    return "url('https://cdn-icons-png.flaticon.com/512/254/254204.png')";
}

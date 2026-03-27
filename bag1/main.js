function start(my) {
  const com = ["haic", "chuluu", "daawuu"];
  const randomIndex = Math.floor(Math.random() * 3);
  computer = com[randomIndex];
  result = document.getElementById("result");
  if (my === computer) {
    result = "tie";
  } else if (
    (my === "haic" && computer === "chuluu") ||
    (my === "chuluu" && computer === "daawuu") ||
    (my === "daawuu" && computer === "haic")
  ) {
    result = "lose";
  } else {
    result = "win";
  }

  document.getElementById("result").innerHTML =
    `Computer chose: ${computer}. You ${my}.${result}!`;
}

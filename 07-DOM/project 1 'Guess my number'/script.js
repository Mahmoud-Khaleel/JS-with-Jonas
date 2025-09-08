let score = 20;
let highScore = 0;
const randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = randomNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    document.querySelector(".message").textContent = "Not A Nummber";
  } else if (guessNumber === randomNumber) {
    document.querySelector(".message").textContent = "Correct Number";
  } else if (guessNumber > randomNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guessNumber < randomNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

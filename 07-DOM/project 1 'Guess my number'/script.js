let score = 20;
let highScore = 0;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = randomNumber;

// check btn
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  // when no input
  if (!guessNumber) {
    document.querySelector(".message").textContent = "Not A Nummber";

    //when player wins
  } else if (guessNumber === randomNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector(".number").textContent = randomNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // when guess is wrong
  } else if (guessNumber !== randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guessNumber > randomNumber ? "Too High" : "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// when guess is too high
// } else if (guessNumber > randomNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "Too High";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "You Lost The Game";
//     document.querySelector(".score").textContent = 0;
//   }

//   //when guess is too low
// } else if (guessNumber < randomNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "Too Low";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "You Lost The Game";
//     document.querySelector(".score").textContent = 0;
//   }
// }

// rest btn
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "15rem";
});

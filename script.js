// create randomNumber, score, highscore
let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// message
const message = function (message) {
  document.querySelector(".text").textContent = message;
};
//check button click
document.querySelector(".check").addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".guess").value);
  // input ""
  if (!guessNum) message("Please enter a number");
  // input = random
  else if (guessNum === randomNum) {
    message("🎉 Congratulation!!!");
    document.querySelector(".result").textContent = guessNum;
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // input != random
  else {
    if (score > 1) {
      message(guessNum > randomNum ? "Too high..." : "Too low...");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#EE4B2B";
    }
  }
});

// reset game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = 20;
  document.querySelector(".result").textContent = "?";
  message("Start guesing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});

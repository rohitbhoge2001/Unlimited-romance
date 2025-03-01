 
let storyIndex = 0;
const stories = [
  "Once upon a time, a special connection was made...",
  "Their eyes met, and the world changed forever...",
  "Through every moment, their love grew stronger...",
  "Now, their story is a never-ending fairy tale!"
];

function nextStory() {
  if (storyIndex < stories.length) {
    document.getElementById('story-text').innerText = stories[storyIndex];
    storyIndex++;
  }
}

function sendMessage() {
  let input = document.getElementById("chat-input").value;
  let chatBox = document.querySelector(".chatbox");
  let response = "<p><strong>Bot:</strong> I love you more! ❤️</p>";
  chatBox.innerHTML += `<p><strong>You:</strong> ${input}</p>` + response;
  document.getElementById("chat-input").value = "";
}

function checkAnswer(answer) {
  let result = document.getElementById("quizResult");
  if (answer === 'B') {
    result.innerText = "Correct! Our first date was at a restaurant. 💖";
  } else {
    result.innerText = "Oops! Try again. 😘";
  }
}

function tellFortune() {
  const fortunes = [
    "Your love will last forever! ❤️",
    "A romantic surprise is coming soon! 💝",
    "Your bond will grow stronger every day! 💞"
  ];
  document.getElementById("fortuneResult").innerText = fortunes[Math.floor(Math.random() * fortunes.length)];
}

function startGame() {
  let gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 90 + "%";
    heart.style.top = Math.random() * 90 + "%";
    gameContainer.appendChild(heart);
  }
}

setInterval(() => {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 500);

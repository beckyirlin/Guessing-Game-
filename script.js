const puzzles = [
  {question: "POD POD POD", answer: "Tripod"}, 
  {question: "MIL1LION", answer: "1 in a million"},
  {question: "ECNLAG", answer: "A backwards glance"},
  {question: "SSSSSSSSSS E", answer: "Tennessee"}
]; 

let current = 0;
let balance = 1000; 

function updateBalance() {
  document.getElementById("balance").innerText = balance.toFixed(2);
}

function loadPuzzle() {
  document.getElementById("puzzle").innerText = puzzles[current].question;
}

function checkAnswer() {
  let bet = parseFloat(document.getElementById("bet").value); 

  if (bet > balance) {
    document.getElementById("result").innerText = "Not enough balance!";
    return;
  }

  const userAnswer = document.getElementById("answer").value.toLowerCase().trim();
  const correct = puzzles[current].answer.toLowerCase();

  if (userAnswer === correct) {
    let winnings = bet;
    balance += winnings;
    document.getElementById("result").innerText = `Correct! +$${winnings}`;
  } else {
    balance -= bet;
    document.getElementById("result").innerText = `Wrong! -$${bet}`;
  }

  updateBalance();
}

function nextPuzzle() {
  current = (current + 1) % puzzles.length;
  loadPuzzle();
}

function deposit() {
  balance += 100;
  updateBalance();
}

function withdraw() {
  if (balance >= 100) {
    balance -= 100;
    updateBalance();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadPuzzle();
  updateBalance();
});

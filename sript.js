const puzzles = [
{question: "ROOD", answer: "Back door"}, 
{question: "Mill1on", answer: "1 in a million"},
{question: "ECNLAG", answer: "A backwards glance"},
{question: "UP 8", answer: "Up before 8" }, 
{question: "LU CKY", answer: "Lucky Break"}
]; 

let current = 0;
let balance = 1000; 

function updateBalance() {
  document.getElementById("balance").innerText = balance.toFixed(2);
}

function loadPuzzle() {
  document.getElementById("puzzle").innerText = puzzles[current].question;
  document.getElementById("answer").value = "";
  document.getElementById("result").innerText = "";
}

function checkAnswer() {
  let bet = parseFloat(document.getElementById("bet").value);

function checkAnswer() {
  let bet = parseFloat(document.getElementById("bet").value);

  if (bet > balance) {
    document.getElementById("result").innerText = "Not enough balance!";
    return;
  }

  const userAnswer = document.getElementById("answer").value.toLowerCase().trim();
  const correct = puzzles[current].answer.toLowerCase();

  if (userAnswer === correct) {
    let winnings = bet * 2;
    balance += winnings;
    document.getElementById("result").innerText = `You got it correct! +$${winnings}`;
  } else {
    balance -= bet;
    document.getElementById("result").innerText = `Sorry you got it wrong! -$${bet}`;
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
  alert("Deposit successful (demo)");
}

function withdraw() {
  if (balance >= 100) {
    balance -= 100;
    updateBalance();
    alert("Withdrawal processed (demo)");
  } else {
    alert("Not enough balance");
  }
}

loadPuzzle();
updateBalance();

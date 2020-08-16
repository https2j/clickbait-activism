var questionCount = 0;
var result1 = 0;
var result2 = 0;

// variables for answer choice buttons for question 1
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

// variables for answer choice buttons for question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

// variables for answer choice buttons for question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

// variables for answer choice buttons for question 4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

// QUESTION 1
q1a1.addEventListener("click", result1Add);
q1a2.addEventListener("click", result1Add);
q1a3.addEventListener("click", result2Add);

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);

// QUESTION 2
q2a1.addEventListener("click", result2Add);
q2a2.addEventListener("click", result1Add);
q2a3.addEventListener("click", result1Add);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);

// QUESTION 3
q3a1.addEventListener("click", result1Add);
q3a2.addEventListener("click", result2Add);
q3a3.addEventListener("click", result1Add);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);

// QUESTION 4
q4a1.addEventListener("click", result1Add);
q4a2.addEventListener("click", result1Add);
q4a3.addEventListener("click", result1Add);
q4a4.addEventListener("click", result2Add);

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);
q4a4.addEventListener("click", disableQ4);

var result = document.getElementById("result");
var resultImage = document.getElementById("resultImage");
var restartVar = document.getElementById("restartButton");

// RESTART
restartVar.addEventListener("click", restart);
restartVar.addEventListener("click", enableButtons);

function restart() {
  questionCount = 0;
  result1 = 0;
  result2 = 0;
  result.innerHTML = "";
  resultImage.innerHTML = "";
}

function disableQ1() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
}

function disableQ2() {
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
}

function disableQ3() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
}

function disableQ4() {
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  document.getElementById("q4a3").disabled = true;
  document.getElementById("q4a4").disabled = true;
}

function enableButtons() {
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q1a3").disabled = false;

  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q2a3").disabled = false;

  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q3a3").disabled = false;

  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q4a3").disabled = false;
  document.getElementById("q4a4").disabled = false;
}

function result1Add() {
  result1 += 1;
  questionCount += 1;
  if (questionCount == 4) {
    updateResult();
  }
}

function result2Add() {
  result2 += 1;
  questionCount += 1;
  if (questionCount == 4) {
    updateResult();
  }
}

function updateResult() {
  if (result1 > result2) {
    result.innerHTML =
      "You need to be better informed of the current world news!";
    // resultImage.innerHTML = "<img src="" alt="">";
  } else if (result2 > result1) {
    result.innerHTML = "You are well informed of current world news!";
    // resultImage.innerHTML = "<img src="" alt="">";
  } else {
    result.innerHTML =
      "You are informed of current world problems, but have things to learn!";
  }
}

//NOT SURE WHATS WRONG WITH THIS< MESSAGE DOESN"T POP UP
//Maybe have a place for email to be enterned for point redemption
var email = document.getElementById("email");
email.addEventListener("click", sendEmail);

function sendEmail() {
  // alert(points);
  allPoints();
}

function allPoints() {
  var x = document.getElementById("points-activism");
  alert(x);
}

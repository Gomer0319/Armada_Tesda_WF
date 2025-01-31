// script.js

// Correct answers
const correctAnswers = {
    q1: "a", // Document Object Model
    q2: "c", // Both var and let
    q3: "b", // ===
    q4: "a", // "object"
    q5: "a"  // addEventListener
  };
  
  // Event listener for the Submit Quiz button
  document.getElementById("submitQuiz").addEventListener("click", function () {
    let score = 0; // Track the user's score
    const totalQuestions = Object.keys(correctAnswers).length;
  
    // Loop through each question and check the user's answer
    for (let question in correctAnswers) {
      const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
      if (userAnswer && userAnswer.value === correctAnswers[question]) {
        score++; // Increment score for correct answer
      }
    }
  
    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `You scored ${score} out of ${totalQuestions}!`;
    resultDiv.style.color = score === totalQuestions ? "green" : "red";
  });
  
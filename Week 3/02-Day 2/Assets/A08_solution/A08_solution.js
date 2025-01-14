// Initialize the array of scores
let scores = [85, 90, 78, 92, 88];

// Initialize the totalScore variable
let totalScore = 0;

// Loop through the scores array
for (let i = 0; i < scores.length; i++) {
  // Check if the score is greater than or equal to 80
  if (scores[i] >= 80) {
    // Add the score to totalScore
    totalScore += scores[i];
  }
}

// Check the total score after the loop
if (totalScore >= 400) {
  console.log("Congratulations! High score achieved!");
} else {
  console.log("Try again to achieve a higher score.");
}

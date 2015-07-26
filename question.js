var Question = function(text, choices, answer) {
  this.text = text;
  this.choices = choices; // array (correct and incorrect answer)
  this.answer = answer;
}

// this is here because whether an answer is correct should be encapsulated by Question
Question.prototype.gotCorrectAnswer = function(choice) {
  return this.answer === choice; // return TRUE if this.answer === choice
}

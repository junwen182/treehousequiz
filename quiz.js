// Quiz prototype

// Quiz constructor
function Quiz(questions) {
  this.score = 0;
  this.questions = questions; // array of questions
  this.currentQuestionIndex = 0;
}


// what happens when user guesses an answer
Quiz.prototype.guess = function(choice) {
  // if correct, increase score by 1 
  if (this.getCurrentQuestion().gotCorrectAnswer(choice)) {
    this.score++;
  }
  // increase currentQuestionIndex by 1
  this.currentQuestionIndex++;
}


Quiz.prototype.getCurrentQuestion = function() {
  // return the question of index currentQuestionIndex (starts with 0, increments)
  return this.questions[this.currentQuestionIndex];
}


//check if quiz has ended (return true if Quiz has ended)
Quiz.prototype.hasEnded = function() {
  return this.currentQuestionIndex >= this.questions.length;
}
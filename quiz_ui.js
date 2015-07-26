/*

displayNext: master function that activates the other functions. Run onclick of a choice.

displayScore: replaces HTML with Score version
displayQuestion: replaces HTML with question text (e.g. who are you?)
displayChoices: replaces HTML with choices text
displayProgress: replaces HTML with currentQuestionIndex + 1, and quiz.questions.length 

populateIdWithHTML: selects an element with id ID, and replace its inner HTML with text
guessHandler: button onclick -> activates guess + displayNext

*/

// QuizUI as an object holding all the functions

var QuizUI = {


  displayNext: function() {
    // if quiz has ended..
    if (quiz.hasEnded()) {
      this.displayScore();
    } else {
    // if quiz has not ended..
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  },


  displayScore: function() {
    var congratsHTML = "<h1>Congratz</h1>";
    congratsHTML += "<h2>You got " + quiz.score + " points.</h2>";

    this.populateIdWithHTML("quiz", congratsHTML);
  },


  displayQuestion: function() {
    this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
  },


  displayChoices: function() {
    // call the choices array into a variable
    var choices = quiz.getCurrentQuestion().choices;
    // iterate across the choices array, inserting HTML into the element, and setting up the guessHandler
    for(var i = 0; i < choices.length; i++) {
      this.populateIdWithHTML("choice" + i, choices[i]);
      this.guessHandler("guess" + i, choices[i]);
    };
  },


  displayProgress: function() {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    var totalQuestions = quiz.questions.length;
    var progressHTML = "Question " + currentQuestionNumber + " of " + totalQuestions;

    this.populateIdWithHTML("progress", progressHTML);
  },


  populateIdWithHTML: function(id, text) {
    // get element by "id"
    var element = document.getElementById(id);
    // populate HTML with text
    element.innerHTML = text;
  },


  guessHandler: function(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      QuizUI.displayNext();
    }
  }

}
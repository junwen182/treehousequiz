// Create questions
var questions = [
  new Question("Who are you?", ["Shimin", "Junwen"], "Shimin"),
  new Question("What's a chicken who likes to draw penises?", ["Kentucky Flaccid Cock", "Cock-a-doodle-doo"], "Cock-a-doodle-doo")
];

// Create quiz
var quiz = new Quiz(questions);

// Display quiz
QuizUI.displayNext();


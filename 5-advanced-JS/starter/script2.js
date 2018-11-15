var Question = function(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
};

var question1 = new Question(
  'How cool is coding JS?',
  ['Not', 'Kinda', 'Oh my god! SOOO super awesome cool!!!'],
  '2'
);
var question2 = new Question(
  'What is the best pet?',
  ['Dogs', 'Bugs', 'Dirt'],
  '0'
);
var question3 = new Question(
  'So you like tofu?',
  ['Yes', 'No', 'I just threw up a little....'],
  '2'
);

var questions = [question1, question2, question3];
var score = 0;

Question.prototype.askQuestion = function() {
  console.log(this.question);
  console.log('0: ' + this.answers[0]);
  console.log('1: ' + this.answers[1]);
  console.log('2: ' + this.answers[2]);
  var answer = prompt(this.question);
  this.respond(answer);
};

Question.prototype.respond = function(answer) {
  if (answer === this.correctAnswer) {
    console.log('Great job there Captian Obvious');
    score += 1;
    console.log('Your score is ' + score);
    nextQuestion();
  } else {
    if (answer === 'exit') {
      console.log('Thanks for playing along sport. Your score was ' + score);
    } else {
      console.log('Your score is ' + score);
      console.log('I think you may want to look into therapy....');
      nextQuestion();
    }
  }
};

function nextQuestion() {
  questions[Math.floor(Math.random() * 3)].askQuestion();
}
questions[Math.floor(Math.random() * 3)].askQuestion();

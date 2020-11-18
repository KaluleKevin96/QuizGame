function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isRightAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.hasEnded = function() {
    return this.questionIndex === this.questions.length;
}

function Question(text, objectives, answer) {
    this.text = text;
    this.objectives = objectives;
    this.answer = answer;
}

Question.prototype.isRightAnswer = function(objective) {
    return this.answer === objective;
}

function generate() {
    // if(Quiz.hasEnded()) {
    //     showScore();
    // }
    // else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var objectives = quiz.getQuestionIndex().objectives;
        for(var i = 0; i < objectives.length; i++) {
            var element = document.getElementById("objective" + i);
            element.innerHTML = objectives[i];
            guess("btn" + i, objectives[i]);
        }

        showProgress();
    // }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        generate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScore() {
    var endOfQuizHTML = "<h3>Score</h3>";
    endOfQuizHTML += "<h4 id='score'> Your score: " + quiz.score + "</h4>";
    var element = document.getElementById("quiz");
    element.innerHTML = endOfQuizHTML;
};

var questions = [
    new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
    new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML")
]
var quiz = new Quiz(questions);

generate();
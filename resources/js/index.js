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
    if(quiz.hasEnded()) {
        showScore();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var objectives = quiz.getQuestionIndex().objectives;
        for(var i = 0; i < objectives.length; i++) {
            var element = document.getElementById("objective" + i);
            element.innerHTML = objectives[i];
            guess("btn" + i, objectives[i])
        }

        showProgress();
    }
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
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScore() {
    var endOfQuizHTML = "<h3>Score</h3>";
    endOfQuizHTML += "<h4 id='score'> Your score: " + quiz.score + " out of " + quiz.questions.length + "</h4>";
    var element = document.getElementById("quiz");
    element.innerHTML = endOfQuizHTML;
};

var Reset = document.getElementById('Reset');

Reset.addEventListener('click', function(e) {
    location.reload();
});

var questions = [
    new Question("When did Uganda obtain indepedence?", ["1997", "1945","1996", "1962"], "1962"),
    new Question("Which Ugandan has the most number of twitter followers?", ["Y.K. Museveni", "Winnie Byanyima","Robert Kyagulanyi", "Kizza Besigye"], "Y.K. Museveni"),
    new Question("Which of these is a book by Ernest Hemingway?", ["Animal farm", "Old Man and the sea","Wuthering Heights", "Jane Eyre"], "Old Man and the sea"),
    new Question("The study of general and fundamental questions is?", ["Biology", "Utilatirism","Phylosophy", "Physiology"], "Phylosophy"),
    new Question("Body energy can be identified in?", ["Golgi body", "Vacuoles","Mitochondria", "Seminal vessicles"], "Mitochondria"),
    new Question("Who is widely responsible for world war II?", ["Andriy Shevchenko", "Adolf Hitler","Malcom X", "King George"], "Adolf Hitler"),
    new Question("How old is the world believed to be?", ["8 Billion years", "2000 years","34 Billion years", "4.5 Billion years"], "4.5 Billion years"),
    new Question("How long ago did Christ walk the earth?", ["2000 years", "3 centuries ago","A millenim ago", "1 billion years ago"], "2000 years"),
    new Question("What is my name?", ["Trevor", "T.K","Renweiid", "None of these"], "Renweiid")
]

var quiz = new Quiz(questions);

generate();
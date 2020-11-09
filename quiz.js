// Building the quiz
function buildQuiz() {

    // Variable to contain HTML output; Questions and answers.
    const output = [];

    // Looping through each of the questions
    nastyQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // Variable for list of possible answers.
            const answers = [];

            // 
            for(letter in currentQuestion.answers){

                // 
                answers.push(
                    `<label>
                        <input type="radio" name="questions${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            // Add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // Combine output list into one string of HTML 
    quizContainer.innerHTML = output.join('');
}

// Displaying results
function showResults() {}

// Obtaining and storing references of the HTML elements 
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = doucument.getElementById('submit');

// The questions
const nastyQuestions = [
    {
        question : "The more you take, the more you leave behind. What am I?",
        answers : {
            A : "Footsteps",
            B : "Sugar",
            C : "Wind"
        },
        correctAnswer : "A"
    },
    {
        question : "Which country has the most tornadoes by area?",
        answers : {
            A : "USA",
            B : "JAPAN",
            C : "ENGLAND"
        },
        correctAnswer : "C"
    },
    {
        question : "Coprastastaphobia is the fear of what?",
        answers : {
            A : "Sex",
            B : "Being Stationary",
            C : "Constipation"
        },
        correctAnswer : "C"
    },
    {
        question : " Which vegetable gives Popeye his strength?",
        answers : {
            A : "Broccoli",
            B : "Spinach",
            C : "Cabbage"
        },
        correctAnswer : "B"
    },
    {
        question : "Who was the ancient Greek goddess of love and beauty?",
        answers : {
            A : "Aphrodite",
            B : "Calypso",
            C : "Athena"
        },
        correctAnswer : "A"
    }
]

// nastyQuestions.sort();

// Calling the function to display the quiz
buildQuiz();

// Showing results on clicking the submit button
submitButton.addEventListener('click', showResults);
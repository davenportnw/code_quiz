

//* Timer *//

var timeEl = document.getElementById("timer");

var secondsLeft = 60;

function setTime(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}





//* Quiz *//

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const myQuestions = [ ... ];


function createQuiz(){
    
    const output = [];

    codeQuestions.forEach(
        (currentQuestion, questionNumber) ==>{
            const answers = [];

            for(letter in currentQuestion.answers){
                answers.push(
                    <label>
                        <input type="radio" name="questions${questionNumber}" value = "${letter"></input>
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>
                );
            }

            output.push(
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>
            );
        }
    );

    quieContainer.innerHTML = output.join('');
}



const codeQuestions = [ 
{
    question:  "Which of the following is correct about features of JavaScript?",
    answers: {
        a: "JavaScript is complementary to and integrated with HTML."
        b: "JavaScript is open and cross-platform."
        c: "JavaScript can only be used with HTML."
        d: "A & B only."
    },
    correctAnswer: "d"
},
{
    question: "Inside which HTML element do we put the JavaScript?"
    answers: {
        a:"<scripting>"
        b:"<js>"
        c:"<javascript>"
        d:"<script>"
    },
    correctAnswer: "d"
},
{
    question:"How can you get the type of arguments pass to a function?"
    answers:{
    a:"using typeof operator"
    b:"using getType function"
    c:"Both of the above."
    d:" None of the above."
    },
    correctAnswer:"a"
},
{
    question: "Which built-in method combines the text of two strings and returns to a new string?"
    answers: {
        a: "changeOrder(order)"
        b: "reverse()"
        c: "sort(order)"
        d: "None of the above."
    },
    correctAnswer:"b"
},
{
    question:"Which of the following function of Number object defines how many total digits to display a number?"
    answers: {
        a:"toExponential()"
        b:"toFixed()"
        c:"toLocaleString()"
        d:"toPrecision()"
    },
    correctAnswer:"d"
},
];


function showResults(){

    const answerContainers = quizContainer.querySelector('.answers');
    
    let numCorrect = 0;

    codeQuestions.forEach( (currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = 'input[name=question${questionNumber}]:checked';
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
        }
        
        answerContainers[questionNumber].style.color = 'lightgreen';
    }else{
        answerContainers[questionNumber].style.color = 'red';
    }
});

resultsContainer.innerHTML = '${numCorrect} our of ${myQuestions.length}';
}

createQuiz();
setTime();
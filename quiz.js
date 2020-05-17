
var timeEl = document.getElementById("timer");

var secondsLeft = 60;

function setTime(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            showResults();
        }

    }, 1000);
}


//Hide homepage when start is clicked





//Gathering elements//
let score = 0;
let scoreBoard = document.getElementById("score");
let results = document.getElementById("results");
let scoreNum = document.querySelector(".scoreNumber");
var quizP = document.getElementById("quizPortion");
var homeP = document.getElementById("homePage");
var resultsP = document.getElementById("resultsPage");


//*Questions*//
var questions = [
    {
        question: "Which of the following is correct about features of JavaScript?",
        answers: {
            A: "A.) JavaScript is complementary to and integrated with HTML.",
            B: "B.) JavaScript is open and cross-platform.",
            C: "C.) JavaScript can only be used with HTML.",
            D: "D.) A & B only.",
            correct: "D"
        }
    },
    {   
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            A : "A.) < scripting >",
            B : "B.) < js >",
            C : "C.) < javascript >",
            D : "D.) < script >",
            correct: "D"
        }
    },
    {  
        question: "How can you get the type of arguments pass to a function?",
        answers: {
            A : "A.) using typeof operator",
            B : "B.) using getType function",
            C : "C.) Both of the above.",
            D : "D.) None of the above.",
            correct: "A"
        }
    },
    {   
        question: "Which built-in method combines the text of two strings and returns to a new string?",
        answers: {
            A : "A.) changeOrder(order)",
            B : "B.) reverse()",
            C : "C.) sort(order)",
            D : "D.) None of the above.",
            correct: "B"
        }
    },
    {   question: "Which of the following function of Number object defines how many total digits to display a number?",
        answers: {
            A : "A.) toExponential()",
            B : "B.) toFixed()",
            C : "C.) toLocaleString()",
            D : "D.) toPrecision()",
            correct: "B"
        }
    },

    
];

const lastQuestion = questions.length - 1;
let currentQuestion = 0;
quizP.setAttribute("Class", "hide");
resultsP.setAttribute("Class", "hide");

function startQuiz(){
    quizP.removeAttribute("Class");
    homeP.setAttribute("Class", "hide");

    loadQuestion();

}

function loadQuestion() {

    let q = questions[currentQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    A.innerHTML =  q.answers.A;
    B.innerHTML =  q.answers.B; 
    C.innerHTML =  q.answers.C;
    D.innerHTML =  q.answers.D; 
}


function checkQ(answer) {
    if(answer === questions[currentQuestion].answers.correct) {
         score++;  
    }else{
        score--;
        secondsLeft -= 5;
    }  
    scoreBoard.innerHTML = "<h1>" + score + "</h1>";
   if(currentQuestion < lastQuestion) {
        currentQuestion++;
        loadQuestion();
    }else{
        if (secondsLeft === 0 || currentQuestion === lastQuestion); {
            console.log("timeEl" , timeEl);
            showResults();
        }
    }
}

function showResults() {
    quizP.setAttribute("Class", "hide");
    resultsP.removeAttribute("Class");
    scoreNum.innerHTML = "Your score was " + score;
}
start.addEventListener("click", startQuiz);

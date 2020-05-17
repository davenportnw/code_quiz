
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


//Hide homepage when start is clicked
// var quizP = document.getElementById("quizPortion");
// quizP.setAttribute("Class", "hide");

// var homeP = document.getElementById("homePage");

//Gathering elements//
let score = 0;
let scoreBoard = document.getElementById("score");
let results = document.getElementById("results");
let allD = document.getElementById("done");


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

function startQuiz(){
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
    console.log("currentQuestion" , currentQuestion); //working
    console.log("answer", answer); //working
    console.log("questions" , questions); //working
    console.log("questions[0]", questions[0]); //working
    console.log("questions[currentQuestion]", questions[currentQuestion]); //working
    console.log("questions[currentQuestion].answer.correct" , questions[currentQuestion].answers.correct); //working
    
    
    
    if(answer === questions[currentQuestion].answers.correct) {
         score++;  
        console.log("score", score);  //working
    }else{
        score--;
    }
    
    scoreBoard.innerHTML = "<h1>" + score + "</h1>";

    if(currentQuestion < lastQuestion) {
        currentQuestion++;
        loadQuestion();
    }else{
        allDone();
    }

}
    
function allDone() {
    if (secondsLeft == 0 || currentQuestion <= lastQuestion); {
        clearInterval(timeEl);
        showResults();
    }
    

}


function showResults() {
    results.style.display = "block",
    results.innerHTML = "<p>" + score + "</p>";
}
start.addEventListener("click", startQuiz);

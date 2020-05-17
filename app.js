

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


//Hide quiz on start up

var quizP = document.getElementById("quizPortion");

quizP.setAttribute("class", "hide");


//* Quiz Portion *//
var currentQuestion = 0;



//grabbing all Elements

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const checkA = document.getElementById("wrongRight");
const scoreEl = document.getElementById("score");
var homeP = document.getElementById("homePage");
const submitButton = document.getElementById("submit");
const resultsContainer = document.getElementById("results");
//Creating Questions//

var questions = [{   question: "Which of the following is correct about features of JavaScript?",
                    answers: {
                        choiceA : "A.) JavaScript is complementary to and integrated with HTML.",
                        choiceB : "B.) JavaScript is open and cross-platform.",
                        choiceC : "C.) JavaScript can only be used with HTML.",
                        choiceD : "D.) A & B only.",
                            correct: "D"
                    }
    },
    {   question: "Inside which HTML element do we put the JavaScript?",
                   answers: {
                        choiceA : "A.) < scripting >",
                        choiceB : "B.) < js >",
                        choiceC : "C.) < javascript >",
                        choiceD : "D.) < script >",
                            correct: "D",
                    }
    },
    {   question: "How can you get the type of arguments pass to a function?",
                   answers: {
                        choiceA : "A.) using typeof operator",
                        choiceB : "B.) using getType function",
                        choiceC : "C.) Both of the above.",
                        choiceD : "D.) None of the above.",
                            correct: "A",
                    }
    },
    {   question: "Which built-in method combines the text of two strings and returns to a new string?",
                  answers: {
                        choiceA : "A.) changeOrder(order)",
                        choiceB : "B.) reverse()",
                        choiceC : "C.) sort(order)",
                        choiceD : "D.) None of the above.",
                            correct: "B",
                    }
    },
    {   question: "Which of the following function of Number object defines how many total digits to display a number?",
                  answers:  {
                        choiceA : "A.) toExponential()",
                        choiceB : "B.) toFixed()",
                        choiceC : "C.) toLocaleString()",
                        choiceD : "D.) toPrecision()",
                            correct: "B",
                    }
    },

    
];




//*Create Quiz*//

function generateQuiz() { 

    function showQuestions(questions, quiz) {
        var output=[];
        var answers;

        for(var i=0; i < questions.length; i++) {
            answers=[];
            for(letter in questins[i].answers) {
                answers.push (
                    '<label>' + '<input type="radio" name="question"' +i+ 'value="'+letter+'">'
                    + letter + '; '
                    + questions[i].answers[letter]
                    +
                    '</label>'
                );
            }
        

            output.push(
                '<label>' + '<div class="questions">' + questions[i].question + '</div>' 
                +  '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quiz.innerHTML=output.join('');
    }

    function showResults(questions, quiz, resultsContainer) {
        var answerContainer = quiz.querySelectorAll('.answers');
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<questions.length; i++) {
            userAnswer = (answerContainer[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            if(userAnswer === questions[i].correct) {
                numCorrect++;
                console.log("numCorrect" , numbCorrect);
                answerContainer[i].style.color = "lightgreen";
            } else {
                answerContainer[i].style.color = "red";
            }
        }

        resultsContainer.innerHtml = numCorrect + " out of " + questions.length;
    }

    submitButton.onclick(showResults(questions, quiz, resultsContainer));
    

start.onclick(generateQuiz(questions, quiz, resultsContainer, submitButton ));
}




// //Variables//
// const lastQuestion = questions.length - 1;
// let runningQuestion = 0;
// let score = 0;

// //create quiz 

// function loadQuestion(){
//     let q = questions[runningQuestion];
    
//     question.innerHTML = "<p>" + q.question + "</p>";
//     choiceA.innerHTML =  q.choiceA;
//     choiceB.innerHTML =  q.choiceB; 
//     choiceC.innerHTML =  q.choiceC;
//     choiceD.innerHTML =  q.choiceD; 
// }

// //start quiz
// start.addEventListener("click", function() {
//     quizP.removeAttribute("class");
//     homeP.setAttribute("class","hide");
//     loadQuestion();
//     checkAnswer();
// });





// //check answer

// function checkAnswer() {
//     if (options === questions[runningQuestion].correct) {
//         score++;
//         appendTextCorrect();
//     }else{
//         appendTextWrong();
//     }

//     if(runningQuestion < lastQuestion) {
//         runningQuestion++;
//         loadQuestion();
//     }
// }



// function appendTextCorrect() {
//     let correct = $("<i></i>").text("Correct");
//     let printA = document.getElementById("i");
//     $("p").append(printA, correct);
    

// }

// function appendTextWrong() {
//     let wrong = $("<i></i>").text("Incorrect");
//     let printA = document.getElementById("i");
//     $("p").append(printA, wrong);
// }  
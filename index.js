
// //const btn = document.getElementById("btn")
// //btn

// btnSubmit.addEventListener("click", () =>) {
//     document.querySelector(".submit").textContent = comment
// }

// const questions = document.querySelector('#question');
// const choices = Array.from (document.querySelectorAll('.choice'));


// let currentQuestion = {}
// let acceptingAnswers = true;
// let score = 0;


// const SCORE_POINTS = 100
// const MAX_QUESTIONS = 4

// takeTheQuiz = () =>{
//     questionCounter = 0;
//     score = 0;
//     availableQuestions = [...questions]
//     getNewQuestion()
// }

//     getNewQuestion = () =>{
//         if(availableQuestions.length === 0 || questionCounter >MAX_QUESTIONS){
//             localStorage.setItem('mostRecentScore',score)

//             return window.location.assign('/end.html')
//         }
//     const questionIndex = Math.floor(math.random()* availableQuestions.length)
//     currentQuestion = availableQuestions[questionIndex]
//     question.innerText = currentQuestion.question

//     choices.forEach(choice =>{
//         const number = choice.dataset['number']
//         choice.innerText = currentQuestion ['choice' +number]
//     })
//     availableQuestions.splice(questionIndex, 1)

//     acceptingAnswers = true
//     }
//     choices.forEach(choices =>{
//         choice.addEventListener('click', e =>{
//             if(!acceptingAnswers) return

//             acceptingAnswers = false
//             const selectedChoice = e.target
//             const selectAnswer = selectedChoice.dataset['number']

//             let classToApply = selectedAnswer == currentQuestion.answer ?'correct' :
//             'incorrect'

//             if(classToApply === 'correct'){
//                 increamentScore(SCORE_POINTS)
//             }
            
//             },1000)
//         })
//     })
//     increamentScore = num =>{
//         score +=num
//         scoreText.innerText = score
//     }
//     takeTheQuiz()

//   let score = 30;
//   let comment = 

//   if (score <50){
//       comment = "You have scored poorly and you need to retake the test.";
//   }
//   else if (score >= 50 && score <=80) {
//       comment = "You have fairly passed";
//   }
//   else if (score >=81 && score <=100 ) {
//       comment ="You have excellently passed"
//   }






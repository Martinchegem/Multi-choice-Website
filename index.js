//variables names.. cannot be a reserved keyword
//should be meaningful
//cannot start with a number
//const btn = document.getElementById("btn")
//btn
//cannot contain a space or hyphen
//case sensitive
//
const questions = document.querySelector('#question');
const choices = Array.from (document.querySelectorAll('.choice'));
const questions = document.querySelector('#question');
const questions = document.querySelector('#question');
const questions = document.querySelector('#question');

let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;

let questions = [
    {question:'What is a body in HTML'
    choice
}
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

takeTheQuiz = () =>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion()
}

    getNewQuestion = () =>{
        if(availableQuestions.length === 0 || questionCounter >MAX_QUESTIONS){
            localStorage.setItem('mostRecentScore',score)

            return window.location.assign('/end.html')
        }
    const questionIndex = Math.floor(math.random()* availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice =>{
        const number = choice.dataset['number']
        choice.innerText = currentQuestion ['choice' +number]
    })
    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
    }
    choices.forEach(choices =>{
        choice.addEventListener('click', e =>{
            if(!acceptingAnswers) return

            acceptingAnswers = false
            const selectedChoice = e.target
            const selectAnswer = selectedChoice.dataset['number']

            let classToApply = selectedAnswer == currentQuestion.answer ?'correct' :
            'incorrect'

            if(classToApply === 'correct'){
                increamentScore(SCORE_POINTS)
            }
            
            },1000)
        })
    })
    increamentScore = num =>{
        score +=num
        scoreText.innerText = score
    }
    takeTheQuiz()

  let score = 30;
  let comment = 

  if (score <50){
      comment = "You have scored poorly and you need to retake the test.";
  }
  else if (score >= 50 && score <=80) {
      comment = "You have fairly passed";
  }
  else if (score >=81 && score <=100 ) {
      comment ="You have excellently passed"
  }

  btnSubmit.addEventListener("click", () =>) {
      document.querySelector(".comments").textContent = comment
  }






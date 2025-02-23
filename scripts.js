const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: "JavaScript"
    },
    {
        question: "What is 5 + 3?",
        options: ["5", "8", "12", "10"],
        answer: "8"
    }
]

let score = 0
let currentQuestionIndex = 0

const questionElement = document.getElementById("question")
const optionsContainer = document.getElementById("options")
const nextButton = document.getElementById("nextButton")
const scoreElement = document.getElementById("score")  

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex]
    questionElement.innerText = currentQuestion.question
    optionsContainer.innerHTML = ""

    currentQuestion.options.forEach(option =>{
        const button = document.createElement("button")
        button.textContent = option
        button.classList.add("options")
        button.addEventListener("click", () => selectAnswer(option, button));
        optionsContainer.appendChild(button);
    });
}


function selectAnswer(selectedOption, button){
    const correctAnswer = questions[currentQuestionIndex].answer

    document.querySelectorAll('.option').forEach(btn => btn.classList.remove('selected'))
    button.classList.add('selected')

    if(selectedOption === correctAnswer){
        score++
    }
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length -1){
        currentQuestionIndex++
        loadQuestion()
    }else{
        questionElement.textContent = "Quiz Completed"
        optionsContainer.innerHTML = ""
        scoreElement.textContent = `Your score: ${score}`
        nextButton.style.display = "none"
    }
})

loadQuestion()
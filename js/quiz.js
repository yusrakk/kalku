let currentQuestion = 0;
let userAnswers = [];
const questionBank = [
    {
        question: 'Q1. Tentukan (2 – j5) (1 – j2) (3 + j4)!',
        option: ['11 - j51', '12 – j51', '11 - j52', '12 - j52'],
        answer: '12 – j51'
    },
    {
        question: 'Q2. Tentukan hasil operasi bilangan kompleks (3j + 3) + (5 – 6j)',
        option: ['8 – 3j', '9 - 3j', '8 - 4j', '9 - 4j'],
        answer: '8 – 3j'
    },
    {
        question: 'Q3. Tentukan bagian riil dan imajiner dari bilangan kompleks 10 + 3j',
        option: ['Bagian riil = 3; bagian imajiner = 10j', 'Bagian riil = 10j; bagian imajiner = 3j', 'Bagian riil = 3j; bagian imajiner = 10', 'Bagian riil = 10; bagian imajiner = 3j'],
        answer: 'Bagian riil = 10; bagian imajiner = 3j'
    },
    {
        question: 'Q.4 Tentukan hasil operasi bilangan kompleks (2j – 4) – (3 – 7j)',
        option: ['-8 + 9j', '-7 + 9j', '-8 + 9j', '-8 + 10j'],
        answer: '-7 + 9j'
    },
    {
        question: 'Q.5Jika x1 = 5 + j4 dan x2 = 2 – j3. Maka x1 + x2 ',
        option: ['7 + j', '8 + j', '9 + j', '10 + j'],
        answer: '7 + j'
    }
];

const startQuizButton = document.getElementById('startQuiz');
const quizContainer = document.getElementById('quizContainer');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const submitButton = document.getElementById('submitButton');
const backToStartButton = document.getElementById('backToStart');
const resultContainer = document.getElementById('resultContainer');
const scoreElement = document.getElementById('score');
const submittedAnswersElement = document.getElementById('submittedAnswers');
const correctAnswersElement = document.getElementById('correctAnswers');

startQuizButton.addEventListener('click', startQuiz);
prevButton.addEventListener('click', prevQuestion);

submitButton.addEventListener('click', submitQuiz);
backToStartButton.addEventListener('click', backToStart);

function startQuiz() {
    startQuizButton.style.display = 'none';
    quizContainer.style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const currentQuestionData = questionBank[currentQuestion];
    questionElement.textContent = currentQuestionData.question;
    optionsElement.innerHTML = '';
    currentQuestionData.option.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(button);
    });

    if (currentQuestion === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'inline-block';
    }

    if (currentQuestion === questionBank.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < questionBank.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function selectAnswer(answer) {
    userAnswers[currentQuestion] = answer;
}

function submitQuiz() {
    let score = 0;
    submittedAnswersElement.innerHTML = '';
    correctAnswersElement.innerHTML = '';
    
    questionBank.forEach((questionData, index) => {
        const submittedAnswer = document.createElement('div');
        submittedAnswer.textContent = `Question ${index + 1}: ${userAnswers[index] || 'No answer submitted'}`;
        submittedAnswersElement.appendChild(submittedAnswer);

        const correctAnswer = document.createElement('div');
        correctAnswer.textContent = `Correct Answer: ${questionData.answer}`;
        correctAnswersElement.appendChild(correctAnswer);

        if (userAnswers[index] === questionData.answer) {
            score++;
        }
    });

    scoreElement.textContent = `Your Score: ${score}/${questionBank.length}`;
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}

function backToStart() {
    resultContainer.style.display = 'none';
    startQuizButton.style.display = 'inline-block';
    currentQuestion = 0;
    userAnswers = [];
    loadQuestion();
}

function selectAnswer(answer) {
    userAnswers[currentQuestion] = answer;
    const options = optionsElement.getElementsByTagName('button');
    for (let i = 0; i < options.length; i++) {
        if (options[i].textContent === answer) {
            options[i].classList.add('selectedOption');
        } else {
            options[i].classList.remove('selectedOption');
        }
    }
}

function loadQuestion() {
    const currentQuestionData = questionBank[currentQuestion];
    questionElement.textContent = currentQuestionData.question;
    optionsElement.innerHTML = '';

    currentQuestionData.option.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        if (userAnswers[currentQuestion] === option) {
            button.classList.add('selectedOption');
        }
        button.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(button);
    });

    if (currentQuestion === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'inline-block';
    }

    if (currentQuestion === questionBank.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function selectAnswer(answer) {
    if (userAnswers[currentQuestion] === answer) {
        userAnswers[currentQuestion] = null;
        const options = optionsElement.getElementsByTagName('button');
        for (let i = 0; i < options.length; i++) {
            if (options[i].textContent === answer) {
                options[i].classList.remove('selectedOption');
                break;
            }
        }
    } else {
        userAnswers[currentQuestion] = answer;
        const options = optionsElement.getElementsByTagName('button');
        for (let i = 0; i < options.length; i++) {
            if (options[i].textContent === answer) {
                options[i].classList.add('selectedOption');
                break;
            }
        }
    }
}

function selectAnswer(answer) {
    const options = optionsElement.getElementsByTagName('button');
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('selectedOption');
    }

    userAnswers[currentQuestion] = answer;
    const selectedButton = Array.from(options).find(button => button.textContent === answer);
    if (selectedButton) {
        selectedButton.classList.add('selectedOption');
    }
}
function selectAnswer(answer) {
    const options = optionsElement.getElementsByTagName('button');
    for (let i = 0; i < options.length; i++) {
        if (options[i].textContent === answer) {
            if (options[i].classList.contains('selectedOption')) {
                options[i].classList.remove('selectedOption');
                userAnswers[currentQuestion] = null;
            } else {
                for (let j = 0; j < options.length; j++) {
                    options[j].classList.remove('selectedOption');
                }
                options[i].classList.add('selectedOption');
                userAnswers[currentQuestion] = answer;
            }
        }
    }
}
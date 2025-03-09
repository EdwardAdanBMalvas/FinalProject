let currentQuestionIndex = 0;
const questions = document.querySelectorAll('.question');
const answers = ["B", "A", "A", "C", "D"]; 
let score = 0; 

function show(index) {
    questions.forEach((question, i) => {
        question.style.display = (i === index) ? 'block' : 'none';
    });
}

function Answer(questionNumber) {
    const selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);
    if (selectedAnswer) {
        const label = selectedAnswer.parentElement;
        
        const labels = questions[questionNumber - 1].querySelectorAll('label');
        labels.forEach(lbl => {
            lbl.classList.remove('correct', 'incorrect');
        });

        
        if (selectedAnswer.value === answers[questionNumber - 1]) {
            label.classList.add('correct');
        } else {
            label.classList.add('incorrect');
        }

        
        const inputs = questions[questionNumber - 1].querySelectorAll('input[type="radio"]');
        inputs.forEach(input => {
            input.disabled = true; 
        });
    }
} 

function next() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        show(currentQuestionIndex);
    }
}

function displayResults() {
    score = 0;
    questions.forEach((question, index) => {
        const selectedAnswer = question.querySelector(`input[type="radio"]:checked`);
        if (selectedAnswer) {
            const label = selectedAnswer.parentElement;
            
            const labels = question.querySelectorAll('label');
            labels.forEach(lbl => {
                lbl.classList.remove('correct', 'incorrect');
            });

            
            if (selectedAnswer.value === answers[index]) {
                score++;
                label.classList.add('correct');
            } else {
                label.classList.add('incorrect');
            }
        }
    });
    document.getElementById('result-message').innerText = `You got ${score} out of ${questions.length} questions right!`;
    document.getElementById('again').style.display = 'block';
}

function again() {
    currentQuestionIndex = 0;
    score = 0; 
    show(currentQuestionIndex);
    document.getElementById('again').style.display = 'none';
    document.getElementById('result-message').innerText = ''; 

    
    questions.forEach(question => {
        const labels = question.querySelectorAll('label');
        labels.forEach(lbl => {
            lbl.classList.remove('correct', 'incorrect'); 
        });
        const inputs = question.querySelectorAll('input[type="radio"]');
        inputs.forEach(input => {
            input.checked = false; 
            input.disabled = false;
        });
    });
}


show(currentQuestionIndex);
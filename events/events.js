
const questions = document.querySelectorAll('.question');


questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.querySelector('.answer');
        
        // Toggle visibility of the answer
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});

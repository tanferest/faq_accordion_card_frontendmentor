'use strict';

const questions = document.querySelectorAll('.question-container');

function handleClick (event) {
    const clickedEl = event.currentTarget.querySelector('p');
    const clickedArrow = event.currentTarget.querySelector('.arrow');
    const question = event.currentTarget.querySelector('.question');
    clickedEl.classList.toggle('hidden');
    clickedArrow.classList.toggle('arrow-up');
    question.classList.toggle('q-active');
}

function display () {
    for (const item of questions) {
        item.addEventListener('click', handleClick);
    }
}

display();
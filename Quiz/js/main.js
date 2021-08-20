"use strict"

const DB_QUIZ = [
    {
        question : 'Siapa yang hidungnya tambah panjang disaat berbohong ?',
        answer : ['Donald Duck', 'Pinokio', 'Micky Mouse', 'Tweety']
    },
    {
        question : 'Alat pengukur kecepatan angin ?',
        answer : ['Seismograf', 'Multimeter', 'Anemometer', 'Barometer']
    },
    {
        question : 'Berikut lagu daerah Jawa Tengah kecuali ?',
        answer : ['Gundul Pacul', 'Lir-Ilir', 'Suwe Ora Jamu', 'Manuk Dadali']
    },
    {
        question : 'Alexander Graham Bell adalah penemu ?',
        answer : ['bel listrik', 'telephone', 'radio', 'televisi']
    },
    {
        question : 'Pencipta lagu Indonesia Raya adalah ?',
        answer : ['W.R Supratman', 'C. Simanjuntak', 'H. Mutahar', 'Ismail Marzuki']
    },
    {
        question : 'Percakapan antara pemain drama disebut ?',
        answer : ['dialog', 'prolog', 'epilog', 'monolog']
    },
    {
        question : 'Organisasi negara-negara pengekspor minyak atau dikenal dengan nama OPEC didirikan pada tahun ?',
        answer : ['1955', '1960', '1965', '1970']
    },
    {
        question: 'Rumus molekul air adalah ?',
        answer : ['CaO', 'Co2', 'H2O', 'H2O2']
    },
    {
        question : 'Sistem sprinkle adalah proteksi gedung atau bangunan terhadap ?',
        answer : ['angin', 'banjir', 'kebakaran', 'hujan']
    },
    {
        question : 'Pendiri palang merah internasional adalah ?',
        answer : ['Alex. Graham', 'J. Henry Dunant', 'J. Robert Powell', 'Abel Tasman']
    }
]


const correct_answer = [1,2,3,1,0,0,1,2,2,1]


// ===============
// ======= SETUP QUESTION =======
// ===============

let current_q = 0;
let userAnswer = [];
let score = 0

window.addEventListener('DOMContentLoaded', function(event) {
    setUpQuestion();
})

function startQuiz() {
    document.querySelector('.opening_window').classList.toggle('hidden');
    document.querySelector('.quiz_window').classList.toggle('hidden');
}


function setUpQuestion() {

    document.getElementById('question').innerHTML = DB_QUIZ[current_q].question;

    for(let i = 0; i < 4; i++) {
        document.getElementById(`label${i}`).innerHTML = DB_QUIZ[current_q].answer[i];
    }
}

function nextQuestion() {
    current_q ++;  
    saveAnswer()
    if(current_q > DB_QUIZ.length - 1) {
        checkScore()

        document.querySelector('.quiz_window').classList.toggle('hidden');
        document.querySelector('.closing_window').classList.toggle('hidden');
        document.querySelector('.closing_window h2').innerHTML = `Skor Anda adalah ${score}/100`;

        showCorrectAnswer()
        return;
    }

    resetState()
    setUpQuestion()
}

function resetState() {
    const answer = document.querySelector('input[name="choice"]:checked');
    if(answer != null) {
        answer.checked = false;
    }
}

function saveAnswer() {
    const answer = document.querySelector('input[name="choice"]:checked');

    if(answer !== null) {
        userAnswer.push(parseInt(answer.getAttribute('data-id')));
    } else {
        userAnswer.push(0)
    }
}

function checkScore() {
    for(let i = 0; i < correct_answer.length; i++) {
        if(userAnswer[i] == correct_answer[i]) {
            score += 10;
        }
    }
}

function showCorrectAnswer() {
    const ul = document.querySelector('.correct_answer');

    for(let i = 0; i < DB_QUIZ.length; i++) {
            const libaru = document.createElement('li');

            libaru.innerHTML = `<p>${DB_QUIZ[i].question}</p><span>${DB_QUIZ[i].answer[correct_answer[i]]}</span>`
            ul.appendChild(libaru);
    }
}
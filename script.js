const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdown-form');
const dateElem = document.getElementById('date-picker');

const countdownElem = document.getElementById('countdown');
const countdownTitleElem = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElems = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;


const today = new Date().toISOString().split('T')[0]; // Get todays date
dateElem.setAttribute('min', today);

function updateDOM() {
    countdownActive = setInterval(() => {
        const now = new Date().getTime();
        const diff = countdownValue - now;
        const days = Math.floor(diff / day);
        const hours = Math.floor((diff % day) / hour);
        const minutes = Math.floor((diff % hour) / minute);
        const seconds = Math.floor((diff % minute) / second);
        countdownTitleElem.textContent = `${countdownTitle}`;
        timeElems[0].textContent = `${days}`;
        timeElems[1].textContent = `${hours}`;
        timeElems[2].textContent = `${minutes}`;
        timeElems[3].textContent = `${seconds}`;
        inputContainer.hidden = true;
        countdownElem.hidden = false;
    }, second);
}

function updateCountdown(e) {
    e.preventDefault();
    console.log(e);
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    if (countdownDate === '') {
        alert('Please select a date to countdown to');
    } else {
        countdownValue = new Date(countdownDate).getTime();
        updateDOM();
    }
}

function reset() {
    countdownElem.hidden = true;
    inputContainer.hidden = false;
    clearInterval(countdownActive);
    countdownTitle = '';
    countdownDate = '';
    countdownForm.reset()
}

countdownForm.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener('click', reset);


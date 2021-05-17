const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdown-form');
const dateElem = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';


const today = new Date().toISOString().split('T')[0]; // Get todays date
dateElem.setAttribute('min', today);

function updateCountdown(e) {
    e.preventDefault();
    console.log(e);
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownTitle, countdownDate);
}


countdownForm.addEventListener('submit', updateCountdown);


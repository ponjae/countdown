const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdown-form');
const dateElem = document.getElementById('date-picker');

const today = new Date().toISOString().split('T')[0]; // Get todays date
dateElem.setAttribute('min', today);

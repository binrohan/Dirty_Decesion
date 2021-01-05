// DOM Selector
const maleText = document.getElementById('male-text');
const femaleText = document.getElementById('female-text');
const maleBtn = document.getElementById('male-btn');
const femaleBtn = document.getElementById('female-btn');

// Event Handlers
maleBtn.addEventListener('click', () => {
    male.start();
});

femaleBtn.addEventListener('click', () => {

})

// Functions


// Baffle Config
let male = baffle( maleText, {
    characters: 'abcdefghijklmnopqrstuvwxyz',
    speed: 120
});

// b.start();
// b.reveal(3000);
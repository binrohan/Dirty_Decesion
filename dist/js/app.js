// Variables
let mOrgans = ["A", "B", "C", "D", "F"];
let fOrgans = ['Z', "X", "Y", "W"];

// DOM Selector
const maleText = document.getElementById("male-text");
const femaleText = document.getElementById("female-text");
const playBtn = document.getElementById("btn-play");

// Event Handlers
playBtn.addEventListener("click", () => {
  engage(2000, 4000, mOrgans, fOrgans);
});

// Functions
function engage(mTime, fTime, mOpts, fOpts) {
  mTime = mTime ?? 1000;
  fTime = fTime ?? 1000;

  const mIndex = Math.floor(Math.random() * [...mOpts].length);
  const fIndex = Math.floor(Math.random() * [...fOpts].length);

  baffleEngine(mTime, fTime, mOpts[mIndex], fOpts[fIndex]);
}

function baffleEngine(mTime, fTime, mText, fText) {
  male.start();
  female.start();

  setTimeout(() => {
    male.stop();
    male.text((m) => mText);
    male.reveal(1000);
  }, mTime);

  setTimeout(() => {
    female.stop();
    female.text((f) => fText);
    female.reveal(1000);
  }, fTime);
}

// Baffle Config
let male = baffle(maleText, {
  characters: "abcdefghijklmnopqrstuvwxyz",
  speed: 120,
});

let female = baffle(femaleText, {
  characters: "abcdefghijklmnopqrstuvwxyz",
  speed: 120,
});
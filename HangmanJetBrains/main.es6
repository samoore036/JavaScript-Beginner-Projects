
/*
for input: https://github.com/hyperskill/sync-input#usage
in terminal type in npm install https://github.com/hyperskill/sync-input/archive/v1.tar.gz
 */
const input = require('sync-input')

function printGameLine() {
    let gameLine = '';
    for (let c of wordArr) {
        gameLine += c;
    }
    console.log(gameLine);
}

function checkLetter(letter) {
    if (letterLog.includes(letter)) {
        console.log(`You've already guessed this letter.
        `);
        return;
    } else {
        letterLog.push(letter);
    }
    if (uncoveredLetters.includes(letter)) {
        attempts--;
        console.log(`No improvements.  # ${attempts} attempts`);
    } else if (correctWord.includes(letter)) {
        for (let i = 0; i < wordArr.length; i++) {
            if (correctWord.charAt(i) === letter) {
                wordArr[i] = letter;
                uncoveredLetters.push(letter);
            }
        }
    } else {
        attempts--;
        console.log(`That letter doesn't appear in the word.  # ${attempts} attempts`);
    }
    console.log();
}

function printResults() {
    console.log(`You won: ${winCount} times.
You lost: ${lossCount} times.`);
}

let wordList = ['python', 'java', 'swift', 'javascript'];
let uncoveredLetters = [];
let letterLog = [];
let correctWord = wordList[Math.floor(Math.random() * 4)];
let wordArr = new Array(correctWord.length).fill('-');

let winCount = 0;
let lossCount = 0;

let attempts = 8;

function startUp() {
    console.log('H A N G M A N');
    while (true) {
        let startSelection = input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: ');
        console.log();
        if (startSelection === 'play') {
            play();
        }
        if (startSelection === 'results') {
            printResults();
        }
        if (startSelection === 'break') {
            break;
        }
    }
}

function play() {
    while (attempts > 0) {
        printGameLine();
        let letter = input('Input a letter: ');
        if (letter.length !== 1) {
            console.log(`Please, input a single letter.
            `);
            continue;
        }
        if (!letter.match('[a-z]')) {
            console.log(`Please, enter a lowercase letter from the English alphabet.
            `);
            continue;
        }
        checkLetter(letter);
        if (!wordArr.includes('-')) {
            console.log(`You guessed the word ${correctWord}!
You survived!`);
            winCount++;
            break;
        } else if (attempts === 0 && wordArr.includes('-')) {
            console.log('You lost!');
            lossCount++;
        }
    }
}

startUp();



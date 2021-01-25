let currentQuiz;
let completedQuizLouise = {
    isComp: false
}
let completedQuizScarlett = {
    isComp: false
}
// let completedQuizMike = {
//     isComp: false
// }
// let completedQuizEthan = {
//     isComp: false
// }
// const louiseChecked = document.getElementById('resetLouise').checked
// const scarlettChecked = document.getElementById('resetScarlett').checked
// const mikeChecked = document.getElementById('resetMike').checked
// const ethanChecked = document.getElementById('resetEthan').checked

let louiseIsDone = JSON.parse(window.localStorage.getItem('Louise'))
let scarlettIsDone = JSON.parse(window.localStorage.getItem('Scarlett'))

function identifyUserStats(quiz) {

    if (quiz === 'Louise') {
        try {
            if (louiseIsDone['isComp'] === true) {
                location.replace('completed.html')
            } else {
                location.replace('louisewadetest.html')
            }
        } catch {
            location.replace('louisewadetest.html')
        }
    } else if (quiz === 'Scarlett') {
        try {
            if (scarlettIsDone['isComp'] === true) {
                location.replace('completed.html')
            } else {
                location.replace('scarlettevetest.html')
            }
        } catch {
            location.replace('scarlettevetest.html')
        }

    }

}
    
function identifyQuiz(quizI) {
    if (quizI === 'Louise') {
        currentQuiz = 'Louise'
        location.replace('checkForLouise.html')
    } else if (quizI === 'Scarlett') {
        currentQuiz = 'Scarlett'
        location.replace('checkForScarlett.html')
    }
}
function wipeMsg() {
    // document.getElementById('wipeMsg').textContent = "*Data for your selected quizs had been wiped"
}
function redoQuiz() {
    if (document.getElementById('resetLouise').checked === true) {
        window.localStorage.removeItem('Louise')
        location.replace('home')
    }
    if (document.getElementById('resetScarlett').checked === true) {
        window.localStorage.removeItem('Scarlett')
        location.replace('home')
    }
}
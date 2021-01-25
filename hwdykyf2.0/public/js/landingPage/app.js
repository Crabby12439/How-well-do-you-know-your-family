let ownCode = undefined
let postGen;
let error;
let displayError;
let inputCode
let preGen = () => {
    const generator = Math.floor(Math.random() * 1000000)
    console.log('Code has been generated: ' + generator)
    ownCode = generator
    window.sessionStorage.setItem('currentUserCode', JSON.stringify(ownCode))
    postGen = generator
    pushCode()
}
function pushCode() {
    genCode.textContent = postGen
}
function createError(message, des, code) {
    error = {
        message: message,
        des: des,
        code: code
    }
    return error
}
function parseInput() {
    inputCode = document.getElementById('joinGameCode');
    checkCodeJoin()
}
function checkCodeJoin() {
    let checkAgainst = window.sessionStorage.getItem('currentUserCode')
    if (!inputCode.value) {
        joinError.classList.remove('displayNone')
        joinError.textContent = "Enter a quiz code to play"
    } else {
        if (inputCode.value === checkAgainst) {
            createError('You tried to join your own quiz', 'Cannot connect to own Quiz', 808)
            displayError = error.message;
            joinError.classList.remove('displayNone')
            joinError.textContent = "You can't join your own quiz"
        } else {
            joinError.classList.add('displayNone')
        }
    }
}
doBtn.addEventListener('click', parseInput)

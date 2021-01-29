let userInputName;
let formTrackerInt = 1;
let formTracker = {
    isComp: "unknown"
}
let skipped = {
    creatorName: undefined
}
const DOM = {
    // ID's
    
    stepOne: document.getElementById('stepOne'),
    stepTwo: document.getElementById('stepTwo'),
    stepThree: document.getElementById('stepThree'),

    skipBtn: document.getElementById('skipBtn'),
    nextBtn: document.getElementById('nextBtn'),
    nameBox: document.getElementById('nameBox'),
    
    // Classes
    
    createWrapper: document.getElementsByClassName('createWrapper'),
    formBox: document.getElementsByClassName('formBox3')
}
const modCSSReqNames = {
    diReq: "diReq", // Reqires width and height
    fontReq: "fontReq", // Requires font name
    displayOnReq: "displayOnReq", // No extra requirements
    displayNoneReq: "displayNoneReq", // No extra requirements
    marginReq: "marginReq", // Requires margin size 
    marginTopReq: "marginTopReq", // Requires margin top size
    marginBottomReq: "marginBottomReq", // Requires margin bottom size
    topReq: "topReq", // Requires push amount
    bottomReq: "bottomReq" // Requires push amount
}
function stepSkip(skipped, functionInline) {
    formTrackerInt += 1
    let push = skipped
    skipped.creatorName = push
    if (functionInline === "s3") {
        s3()
    }
}
function modCSS(stepORreq, width, height, fontName, marginSize, pushAmount, name) {
    // Quick access requests
    
    if (stepORreq === "stepTwo") {
        DOM.stepOne.classList.add('displayNone')
        DOM.stepTwo.classList.remove('displayNone')
    } else if (stepORreq === "stepThree") {
        DOM.stepOne.classList.add('displayNone')
        DOM.stepTwo.classList.add('displayNone')
        DOM.stepThree.classList.remove('displayNone')
    }
    // Normal request process

    if (stepORreq === modCSSReqNames.diReq) {
        let reqLine1 = document.getElementById(name).style.width = width + "px";
        let reqLine2 = document.getElementById(name).style.height = height + "px";
    }
    if (stepORreq === modCSSReqNames.fontReq) {
        let reqLine1 = document.getElementById(name).style.fontFamily = fontName;
    }
    if (stepORreq === modCSSReqNames.displayOnReq) {
        let reqLine1 = document.getElementById(name).classList.remove('displayNone');
    }
    if (stepORreq === modCSSReqNames.displayNoneReq) {
        let reqLine1 = document.getElementById(name).classList.add('displayNone')
    }
    if (stepORreq === modCSSReqNames.marginReq) {
        let reqLine1 = document.getElementById(name).style.margin = marginSize+"px";
    }
    if (stepORreq === modCSSReqNames.marginTopReq) {
        let reqLine1 = document.getElementById(name).style.marginTop = marginSize+"px";
    }
    if (stepORreq === modCSSReqNames.marginBottomReq) {
        let reqLine1 = document.getElementById(name).style.marginBottom = marginSize+"px";
    }
    if (stepORreq === modCSSReqNames.topReq) {
        let reqLine1 = document.getElementById(name).style.top = pushAmount+"px";
    }
    if (stepORreq === modCSSReqNames.bottomReq) {
        let reqLine1 = document.getElementById(name).style.bottomReq = pushAmount+"px";
    }
}

function getAge(A) {
    if (A === true) {
        formTracker.isComp = true
        formTrackerInt = formTrackerInt + 1
        confirmCompletion()
    } else if (A === false){
        formTracker.isComp = false
        formTrackerInt = formTrackerInt + 1
        console.log("IP Address + Name storage has been disabled to stay complient with worldwide COPPA regulations. Please visit this website for more infomation => https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule")
        confirmCompletion()
    }
}
function confirmCompletion() {
    if (formTrackerInt === 2) {
        s2(formTracker.isComp)
    }
}
function s2(isComp) {
    if (isComp === true) {
        modCSS("stepTwo", null, null, null, null, null)
        DOM.nextBtn.addEventListener('click', s3)
        DOM.skipBtn.addEventListener('click', stepSkip.bind(this, "name", "s3"))
    } else if (isComp === false) {
        document.getElementById('nameBox').disabled = true;
        stepSkip("creatorName", "s3")
        console.log('Workin')
    }
}
function s3() {
    // stepORreq, width, height, fontName, marginSize, pushAmount, name
    modCSS("stepThree", null, null, null, null, null, null)
    modCSS(modCSSReqNames.marginTopReq, null, null, null, 30, null, "formBox3")
    modCSS(modCSSReqNames.diReq, 600, 100, null, null, null, 'formBox3')
    modCSS(modCSSReqNames.marginTopReq, null, null, null, 30, null, 'formBox3')
    modCSS(modCSSReqNames.diReq, 700, 300, null, null, null, "createWrapper")
    console.log('Here')

}
function endSubmit() {
    // Submits the form and packages results to be sent to the server
    const mainActionForm = document.getElementById('mainActionForm').submit();
}
var buttonview = document.getElementById('send-button');
var firstNameEl = document.getElementById('first-name');
buttonview.addEventListener('click', addErrorClassAllInputs);
buttonview.addEventListener('dblclick', removeclassbuttonAllInputs);
firstNameEl.addEventListener('keyup', onFirstNameKeyUp);



function addErrorClass(elementId) {
    var element = document.getElementById(elementId);
    element.classList = 'error-input';
}

function addErrorClassAllInputs() {
    addErrorClass('first-name');
    addErrorClass('last-name');
    addErrorClass('adress');
}

//window.setTimeout(addErrorClassAllInputs, 2000);


function removeclassbutton(elementId){
    var removeelement = document.getElementById(elementId)
    removeelement.classList.remove('error-input');
}

function removeclassbuttonAllInputs(){
    removeclassbutton('first-name');
    removeclassbutton('last-name');
    removeclassbutton('adress');
}

function onFirstNameKeyUp(){
    addErrorClass('first-name');
}
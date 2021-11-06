

function LogValue(id) {
    var el = document.getElementById(id);
    console.log(el.value);
}


function getValue(id) {
    var el = document.getElementById(id);
    return el.value;
}

LogValue('first-name');
LogValue('last-name');
LogValue('address');

var value = getValue('first-name');
window.alert(value);
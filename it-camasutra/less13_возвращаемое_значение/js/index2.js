
function alertValues(elementParametr) {
    console.log(elementParametr.value);
    console.log(elementParametr.className);
}


function getEl(id){
    console.log('Somebody wants find element by id');
var el=document.getElementById(id);
return el;

}

var firstNameEl = getEl('first-name');
var lastNameEl = getEl('last-name');
var addressEl = getEl('address');
alertValues(addressEl);
var citiesEl = getEl('cities');
var hobbiesEl = getEl('hobbies');
var avatarEl = getEl('avatar');
var avatarWrapperEl = getEl('avatar-wrapper');


firstNameEl.value = 'Elias';
alertValues(firstNameEl);

lastNameEl.className = 'last-name default-input error-input';
alertValues(lastNameEl);

lastNameEl.title = 'Wrong Last Name';
alertValues(lastNameEl);

firstNameEl.className = 'new-class';
alertValues(firstNameEl);


avatarEl.src = 'http://stavexperts.h1n.ru/wp-content/uploads/2018/11/Yandex_Zen2.jpg';
avatarEl.title = 'I am avatar!';
citiesEl.value = 'Minsk';
hobbiesEl.value = 'I have interest Java Script';
alertValues(hobbiesEl);
avatarWrapperEl.innerHTML = '<ul id="list"><li>1</><li>2</li></ul><img id="avatar" src="https://cdn.proghub.ru/t/js-basic.png">';
var listEl = getEl('list');
console.log(listEl.innerHTML);


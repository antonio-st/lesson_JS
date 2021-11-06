
function alertValues(elementParametr) {
    console.log(elementParametr.value);
    console.log(elementParametr.className);

}

var firstNameEl = document.getElementById('first-name');
var lastNameEl = document.getElementById('last-name');
var addressEl = document.getElementById('address');
alertValues(addressEl);
var citiesEl = document.getElementById('cities');
var hobbiesEl = document.getElementById('hobbies');
var avatarEl = document.getElementById('avatar');
var avatarWrapperEl = document.getElementById('avatar-wrapper');


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
var listEl = document.getElementById('list');
console.log(listEl.innerHTML);


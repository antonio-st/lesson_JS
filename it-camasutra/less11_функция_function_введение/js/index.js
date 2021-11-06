var firstNameEl = document.getElementById('first-name');
var lastNameEl = document.getElementById('last-name');
var addressEl = document.getElementById('address');
var citiesEl = document.getElementById('cities');;
var hobbiesEl = document.getElementById('hobbies');
var avatarEl = document.getElementById('avatar');
var avatarWrapperEl = document.getElementById('avatar-wrapper');

function alertValue() {
    console.log(firstNameEl.value);
    console.log(lastNameEl.value);
    console.log(addressEl.value);
    console.log(citiesEl.value);
}

alertValue();

//присваиваем переменной строку idшку , которую нужно найти в html
//находим элемент по id и результат (найденный элемент) присваиваем переменной firstNameEl

//avatarEl = document.getElementById('avatar-wrapper');
//выводим аттрибут value у найденного элемента
// window.alert(firstNameEl.value + ' ' + lastNameEl.value + ' ' + addressEl.value);
// window.alert(citiesEl.value);
//window.alert(hobbiesEl.value);
//window.alert(avatarEl.value);
alertValue();
firstNameEl.value = 'Elias';
//lastNameEl.setAttribute('value', 'kamasutra');
//window.alert(avatarEl.value);
lastNameEl.className = 'last-name default-input error-input';
lastNameEl.title = 'Wrong Last Name';
alertValue();
avatarEl.src = 'http://stavexperts.h1n.ru/wp-content/uploads/2018/11/Yandex_Zen2.jpg';
avatarEl.title = 'I am avatar!';
citiesEl.value = 'Minsk';
hobbiesEl.value = 'I have interest Java Script';
avatarWrapperEl.innerHTML = '<ul id="list"><li>1</><li>2</li></ul><img id="avatar" src="https://cdn.proghub.ru/t/js-basic.png">';
var listEl = document.getElementById('list');
console.log(listEl.innerHTML);


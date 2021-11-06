console.log('isTurnOn>>> '+car1.isTurnOn);
car1.start();
console.log('Start>>> '+car1.isTurnOn);


//find elements
var showPrevBtn=document.getElementById('show-prev-btn');
var showNextBtn=document.getElementById('show-next-btn');
var slideImage=document.getElementById('slide-img');

//subscribe to enents
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click',onShowNextBtnClick);

//create image array
var imagesUrls =[];
imagesUrls.push('https://besthqwallpapers.com/Uploads/24-9-2017/21606/thumb-lamborghini-aventador-vorsteiner-supercar-blue-aventador-racing-car.jpg');
imagesUrls.push('https://www.abw.by/photos/news/131404_1_350.jpg?v=0');
imagesUrls.push('https://th.wallhaven.cc/lg/p2/p2r9pp.jpg');
imagesUrls.push('https://cdn.zhaket.com/resources/5e6de8daf28745007868000b/5e72bde5fccc94006f1f64ac.jpg');

var curentImageIndex = 0;
//link from array
slideImage.src=imagesUrls[curentImageIndex];
showPrevBtn.disabled = true;

//function definitions
function onShowPrevBtnClick(){
    curentImageIndex--;
    slideImage.src=imagesUrls[curentImageIndex];
    showNextBtn.disabled=false;
    //disable prevButton if need
    if (curentImageIndex === 0){
        showPrevBtn.disabled = true
    }

}
function onShowNextBtnClick(){
    curentImageIndex++;
    slideImage.src=imagesUrls[curentImageIndex];
    showPrevBtn.disabled=false;

    //disable nextButton if need
    if (curentImageIndex === (imagesUrls.length-1)){
        showNextBtn.disabled = true
    }

}
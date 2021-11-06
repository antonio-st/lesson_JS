var slider1 = {
    imagesUrls: [],
    curentImageIndex: 0,
    //find elements
    showPrevBtn: null,
    showNextBtn: null,
    slideImage: null,


    start: function () {
        var that = this;
        var el = document.querySelector('#itk-slider1');

        this.showPrevBtn = el.querySelector('.show-prev-btn');
        this.showNextBtn = el.querySelector('.show-next-btn');
        this.slideImage = el.querySelector('.slide-img');


        //subscribe to enents
        this.showPrevBtn.addEventListener('click', function (e) {
            that.onShowPrevBtnClick(e);
        });
        //this.onShowPrevBtnClick
        this.showNextBtn.addEventListener('click', function (e) {
            that.onShowNextBtnClick()
        });

        //create image array

        this.imagesUrls.push('https://besthqwallpapers.com/Uploads/24-9-2017/21606/thumb-lamborghini-aventador-vorsteiner-supercar-blue-aventador-racing-car.jpg');
        this.imagesUrls.push('https://www.abw.by/photos/news/131404_1_350.jpg?v=0');
        this.imagesUrls.push('https://th.wallhaven.cc/lg/p2/p2r9pp.jpg');
        this.imagesUrls.push('https://cdn.zhaket.com/resources/5e6de8daf28745007868000b/5e72bde5fccc94006f1f64ac.jpg');


        //link from array
        this.slideImage.src = this.imagesUrls[this.curentImageIndex];

    },

    //function definitions
    onShowPrevBtnClick: function (e) {
        this.curentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.curentImageIndex];
        this.showNextBtn.disabled = false;
        //disable prevButton if need
        if (this.curentImageIndex === 0) {
            this.showPrevBtn.disabled = true
        }
    },
    onShowNextBtnClick: function (e) {
        this.curentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.curentImageIndex];
        this.showPrevBtn.disabled = false;

        //disable nextButton if need
        if (this.curentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true
        }

    },

};
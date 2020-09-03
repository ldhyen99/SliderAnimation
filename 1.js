document.addEventListener("DOMContentLoaded",function(){
    //Khai bao hieu ung click btn dot chuyen slide
    var btnDot = document.querySelectorAll('.btn-change-slide ul li')
    var slides = document.querySelectorAll('.carousel-slder ul li')
    // return mang btnDot

    var timeCount = setInterval(function(){autoSlider()},5000) 

    btnDot.forEach(item => {
        item.addEventListener('click',function(){

            clearInterval(timeCount)
            //Delete all class btn-active before add
            btnDot.forEach(item => {
                item.classList.remove('btn-active')
            })
            this.classList.add('btn-active')

            // Handle position when user click on btn, click on -> count numb of position
            
            var btnActive = this
            var positionBtn = 0
            for( positionBtn = 0; btnActive = btnActive.previousElementSibling; positionBtn++) { } 
            // Het vong lap thi bien i = so thu tu

        slides.forEach(item => {
            item.classList.remove('slider-active')
            slides[positionBtn].classList.add('slider-active')
            })
        })
    }) // Het event btn
    
    // Auto slider
    function autoSlider(){
        // Slider display now?
        var positionSlider  = 0
        var nowSlider = document.querySelector('.carousel-slder ul li.slider-active')

        for(positionSlider = 0; nowSlider = nowSlider.previousElementSibling; positionSlider++ ) {}
        console.log(slides.length);
        console.log("Vi tri cua nut hien tai la " + positionSlider);

        //kiem tra neu chua den slide cuoi cung -> positionSlider <= slides. length
        if(positionSlider < slides.length-1) 
        {
            // An het slides
            for(var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('slider-active')
                btnDot[i].classList.remove('btn-active')
            }

            //Cho phan tu tiep theo cua slide hien thi ra
            slides[positionSlider].nextElementSibling.classList.add('slider-active')

            //Cho phan tu tiep theo cua slide hien thi ra
            btnDot[positionSlider].nextElementSibling.classList.add('btn-active')
        }

        else {
            for(var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('slider-active')
                btnDot[i].classList.remove('btn-active')

            }
            slides[0].classList.add('slider-active')
            btnDot[0].classList.add('btn-active')

        }       
    }

})
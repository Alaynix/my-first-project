$(function(){

    let header = $("#header");
    let intro = $("#intro");
    let introHeight = intro.innerHeight();
    let scrollPosition = $(window).scrollTop();

    $(window).on("scroll load resize", function(){
        introHeight = intro.innerHeight();

        scrollPosition = $(this).scrollTop();

        if(scrollPosition > introHeight){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }

    });





$(".shop__rating").rateYo({
    rating: 5, 
    starWidth: "20px",
    starSvg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2836 7.55056L13.3328 6.68571L10.6727 1.29275C10.6 1.14509 10.4805 1.02556 10.3328 0.952902C9.96251 0.770089 9.51251 0.922433 9.32736 1.29275L6.6672 6.68571L0.71642 7.55056C0.552357 7.574 0.402357 7.65134 0.287513 7.76853C0.148674 7.91123 0.0721667 8.10322 0.0748035 8.3023C0.0774404 8.50138 0.159005 8.69127 0.301576 8.83025L4.60704 13.0279L3.58986 18.9552C3.566 19.0931 3.58126 19.2349 3.6339 19.3646C3.68654 19.4942 3.77445 19.6066 3.88767 19.6888C4.00089 19.771 4.13489 19.8199 4.27447 19.8298C4.41404 19.8398 4.55362 19.8104 4.67736 19.7451L10 16.9467L15.3227 19.7451C15.468 19.8224 15.6367 19.8482 15.7985 19.8201C16.2063 19.7498 16.4805 19.3631 16.4102 18.9552L15.393 13.0279L19.6985 8.83025C19.8156 8.7154 19.893 8.5654 19.9164 8.40134C19.9797 7.99118 19.6938 7.6115 19.2836 7.55056Z"/></svg>',
    spacing: "1.6px", 
    numStars: 5, 
    minValue: 0, 
    maxValue: 5, 
    normalFill: 'rgba(226, 223, 223, 0.7)',
    ratedFill: '#F2C94C', 

}) 
});
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });


/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/chevron_left_solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/chevron_right_solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                arrows: false,
                dots: true
              }
            }
        ]
    });
}); */

//let number = 7;
//const pi = 3.14;

//number = 4;

//let leftBorderWidth = 200;

// number 
// string - "", '', `` (строка)
// true, false (булеве значення, логічний тип даних)
// null (элемента не существует)
// undefined (что то существует, но значения никакого не имеет )

// let obj = {
//   name: 'apple'
//   color: 'green'
//   weight: 200
//}

//Symbol
//alert (1234)

//console.log(number);
//let answer = confirm ("Вам есть 18?");
//console.log(answer);

//let answer = prompt ("Вам есть 18?", "");
//console.log(answer);

//console.log(4+4);
//console.log(4 + 'add string');

//let isCheked = true,
//    isClose = true;
//console.log(isCheked && isClose); виконаэться якщо то и то буде правда
//console.log(isCheked || isClose); чи перша чи друга буде правда 

//let answer = confirm ("You are 18 years old?")   \\умова\\
//if (answer) {
//    console.log('welcome')
//} else {
//    console.log('get out')
//}

//for (let i = 1; i < 8; i++) {     \\цикли\\
//    console.log(i);
//}

//function logging(a, b) {  \\функції\\
//    console.log(a + b)
//}

//logging (3,5)
//logging (8,12)
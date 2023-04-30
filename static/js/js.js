






// if(document.querySelector('#container-slider')){
//   setInterval('fntExecuteSlide("next")',5000);
// }
// //------------------------------ LIST SLIDER -------------------------
// if(document.querySelector('.listslider')){
//   let link = document.querySelectorAll(".listslider li a");
//   link.forEach(function(link) {
//      link.addEventListener('click', function(e){
//         e.preventDefault();
//         let item = this.getAttribute('itlist');
//         let arrItem = item.split("_");
//         fntExecuteSlide(arrItem[1]);
//         return false;
//      });
//    });
// }

// function fntExecuteSlide(side){
//    let parentTarget = document.getElementById('slider');
//    let elements = parentTarget.getElementsByTagName('li');
//    let curElement, nextElement;

//    for(var i=0; i<elements.length;i++){

//        if(elements[i].style.opacity==1){
//            curElement = i;
//            break;
//        }
//    }
//    if(side == 'prev' || side == 'next'){

//        if(side=="prev"){
//            nextElement = (curElement == 0)?elements.length -1:curElement -1;
//        }else{
//            nextElement = (curElement == elements.length -1)?0:curElement +1;
//        }
//    }else{
//        nextElement = side;
//        side = (curElement > nextElement)?'prev':'next';

//    }
//    //RESALTA LOS PUNTOS
//    let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
//    elementSel[curElement].classList.remove("item-select-slid");
//    elementSel[nextElement].classList.add("item-select-slid");
//    elements[curElement].style.opacity=0;
//    elements[curElement].style.zIndex =0;
//    elements[nextElement].style.opacity=1;
//    elements[nextElement].style.zIndex =1;
// }




// $('.open-overlay').click(function() {
//   var overlay_navigation = $('.overlay-navigation'),
//     nav_item_1 = $('nav li:nth-of-type(1)'),
//     nav_item_2 = $('nav li:nth-of-type(2)'),
//     nav_item_3 = $('nav li:nth-of-type(3)'),
//     nav_item_4 = $('nav li:nth-of-type(4)'),
//     nav_item_5 = $('nav li:nth-of-type(5)'),
//     top_bar = $('.bar-top'),
//     middle_bar = $('.bar-middle'),
//     bottom_bar = $('.bar-bottom');

//   overlay_navigation.toggleClass('overlay-active');
//   if (overlay_navigation.hasClass('overlay-active')) {

//     top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
//     middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
//     bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
//     overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
//     nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
//     nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
//     nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
//     nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
//     nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
//   } else {
//     top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
//     middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
//     bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
//     overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
//     nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
//     nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
//     nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
//     nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
//     nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
//   }
// })



// console.log("ASDASD");
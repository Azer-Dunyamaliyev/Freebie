document.querySelector(".burger_icon").addEventListener("click",()=>{
    document.querySelector(".burger_content").classList.add("active")
    document.querySelector(".overlay").classList.add("active")
    document.body.style.overflow = "hidden"
})

document.querySelector(".close_burger").addEventListener("click",()=>{
    document.querySelector(".burger_content").classList.remove("active")
    document.querySelector(".overlay").classList.remove("active")
    document.body.style.overflow = "auto"
})



// var mySwiper = new Swiper('.mySwiper', {
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     spaceBetween: 30,
//     freeMode: true,
//     breakpoints: {
//         1024: {
//             slidesPerView: 1,
//         },
//     },
// });

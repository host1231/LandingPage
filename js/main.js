$(document).ready(function(){
    $('.comment__list').slick({
        arrows: true,
        fade: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    
});

document.querySelector('.header__btn').addEventListener('click', ()=>{
    document.querySelector('.header__top').classList.toggle('open');
    document.querySelectorAll('.menu-list__link').forEach(link => {
        link.addEventListener('click', ()=>{
            document.querySelector('.header__top').classList.remove('open');
        })
    });
})
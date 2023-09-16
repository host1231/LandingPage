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
});


window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hide');
    setTimeout(() => {
        preloader.remove();
    }, 500);
    
    const effectAnim = () => {
        const effect = document.querySelectorAll('.effect')
        const windowHeight = window.scrollY + window.innerHeight;
        effect.forEach(el => {
            const elHeight = el.offsetHeight  + el.offsetTop - 100;
            if (windowHeight >= elHeight) {
                el.classList.add('anim')
            }
        })
        
    }

    window.addEventListener('scroll', () => {
        effectAnim();
    });
});
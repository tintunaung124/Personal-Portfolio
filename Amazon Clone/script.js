const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.content-prev');
const next_btn = document.querySelector('.content-next');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

function showNextSlide() {
    n = (n + 1) % imgs.length;
    changeSlide();
}

function showPrevSlide() {
    n = (n - 1 + imgs.length) % imgs.length;
    changeSlide();
}

next_btn.addEventListener('click', showNextSlide);
prev_btn.addEventListener('click', showPrevSlide);

changeSlide();

const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel', (evt) =>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}
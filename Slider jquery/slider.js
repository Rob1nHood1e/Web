let slides_container = document.getElementById('pictures_container');
let slides = [...slides_container.children]
let dots_container = document.querySelector('.dots_wrapper')
let dots = [...dots_container.children]
const next_btn = document.querySelector('.next');
const prev_btn = document.querySelector('.prev');

const size = container.clientWidth;
console.log(size)
let counter = 0;

function MoveToNext(current, target) {
    current = document.querySelector('.active');
    target = current.nextElementSibling;
    slides_container.style.transition = '0.5s ease-in-out';
    counter++;
    slides_container.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function MoveToPrev(current, target) {
    current = document.querySelector('.active');
    target = current.previousElementSibling;
    slides_container.style.transition = '0.5s ease-in-out';
    counter--;
    slides_container.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
function CheckBorders(target_slide, slides ) {
    if(target_slide == slides[slides.length - 1]){
        next_btn.classList.add('hide');
        prev_btn.classList.remove('hide');
    }else if(target_slide == slides[0]){
        prev_btn.classList.add('hide');
        next_btn.classList.remove('hide');
    }else{
        next_btn.classList.remove('hide');
        prev_btn.classList.remove('hide');
    }
}

function ToggleActive(current, target) {
    current.classList.remove('active');
    target.classList.add('active');
}

next_btn.addEventListener('click',  () => {
    let current_slide = document.querySelector('.active');
    let next_slide = current_slide.nextElementSibling;
    MoveToNext(current_slide, next_slide);
    ToggleActive(current_slide, next_slide);
    Move_to_dot(current_slide, next_slide);
    CheckBorders(next_slide, slides);
    
})

function Move_to_dot(current, target) {
    let current_dot = dots_container.querySelector('.active');
    let target_slide = getIndex(target, slides);
    let target_dot = dots[target_slide];
    ToggleActive(current_dot, target_dot);
    
}
prev_btn.addEventListener('click', () => {
    let current_slide = document.querySelector('.active');
    let prev_slide = current_slide.previousElementSibling;
    MoveToPrev(current_slide, prev_slide);
    ToggleActive(current_slide, prev_slide);
    Move_to_dot(current_slide, prev_slide);
    CheckBorders(prev_slide, slides);
})

function getIndex(item, items) {
    for(let i = 0; i < items.length; i++){
        if(item == items[i]) return i;
    }
}

dots_container.addEventListener('click', (e) =>{
    let current_slide = document.querySelector('.active');
    let current_dot = dots_container.querySelector('.active');
    let target_dot = e.target;
    let dot_index = getIndex(target_dot, dots);
    let current_dot_index = getIndex(current_dot, dots)
    let target_slide = slides[dot_index];
    slides_container.style.transition = '0.5s ease-in-out';
    counter = dot_index;
    slides_container.style.transform = 'translateX(' + (-size * counter) + 'px)';
    ToggleActive(current_slide, target_slide);
    ToggleActive(current_dot, target_dot);
    CheckBorders(target_slide, slides);

})

document.addEventListener('keydown', (event) =>{
    
    if(event.key == 'ArrowRight'){
        let current_slide = document.querySelector('.active');
        let next_slide = current_slide.nextElementSibling;
       
        if(counter < slides.length-1){
        MoveToNext(current_slide, next_slide);
        ToggleActive(current_slide, next_slide);
        Move_to_dot(current_slide, next_slide);
        CheckBorders(next_slide, slides);
        }
    }else if(event.key == 'ArrowLeft'){
        let current_slide = document.querySelector('.active');
        let prev_slide = current_slide.previousElementSibling;
        if(counter != 0){
        MoveToPrev(current_slide, prev_slide);
        ToggleActive(current_slide, prev_slide);
        Move_to_dot(current_slide, prev_slide);
        CheckBorders(prev_slide, slides);
        }

}
})




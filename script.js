document.addEventListener('mousemove', function(e){
    let dot = document.querySelector('.dot');
    dot.style.left = e.pageX + 'px';
    dot.style.top = e.pageY + 'px';
})


let dot = document.querySelector('.dot');
let sec = document.querySelector('.section');

dot.addEventListener('click', ()=>{
    dot.classList.toggle('active');
    sec.classList.toggle('active');
})
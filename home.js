
let imgSlider = document.querySelectorAll('.slider-container .slider-box');
let btnProx = document.querySelector('#proxima');
let btnAnter = document.querySelector('#anterior');
let btnNav = document.querySelectorAll('.btn-nav-box .btn-nav');
setInterval(() => {
    imgAtivo++;
    if (imgAtivo >= contadorImg) {
        imgAtivo = 0;
    }
    mostrarImagem();
}, 7000); // Altere 3000 para o intervalo desejado em milissegundos

let contadorImg = imgSlider.length;
let imgAtivo = 0;

btnProx.addEventListener('click', ()=>{
    imgAtivo++;
    if(imgAtivo >= contadorImg){
        imgAtivo = 0;
    }
    mostrarImagem();
})

btnAnter.addEventListener('click', ()=>{
    imgAtivo--;
    if(imgAtivo < 0){
        imgAtivo = contadorImg - 1;
    }
    mostrarImagem();
})

function mostrarImagem(){
    let antigaImg = document.querySelector('.slider-container .slider-box.ativo');
    let antigaBtnNav = document.querySelector('.btn-nav-box .btn-nav.ativo');

    antigaImg.classList.remove('ativo');
    antigaBtnNav.classList.remove('ativo');

    imgSlider[imgAtivo].classList.add('ativo');
    btnNav[imgAtivo].classList.add('ativo');
}

btnNav.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        imgAtivo = index;
        mostrarImagem();
    })
})




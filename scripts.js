
const form = document.querySelector('.contact-form');
const maskForm = document.querySelector('.mask-form');

function cliqueiNoBotao() {
    form.style.left = '50%';
    form.style.transform = 'translateX(-50%)';
    maskForm.style.visibility = 'visible';
}

// Evento para fechar ao clicar na máscara
maskForm.addEventListener('click', function() {
    maskForm.style.visibility = 'hidden';
    form.style.left = '-300px';
    form.style.transform = '';
});

// Evento para fechar ao clicar no botão X
const closeBtn = document.querySelector('.close-form');
if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        maskForm.style.visibility = 'hidden';
        form.style.left = '-300px';
        form.style.transform = '';
    });
}


// Troca o vídeo de fundo no responsivo

function trocarVideoResponsivo() {
    const video = document.querySelector('.container-video video');
    if (!video) return;
    const srcResponsivo = './assets/quase-la.mp4';
    const srcPadrao = './assets/Tostadas-deliciosas.mp4';
    let novoSrc = window.innerWidth <= 800 ? srcResponsivo : srcPadrao;
    if (video.src.endsWith(encodeURI(novoSrc.replace('./', '')))) return;
    video.src = novoSrc;
    video.load();
    video.play();
}

window.addEventListener('resize', trocarVideoResponsivo);
window.addEventListener('DOMContentLoaded', trocarVideoResponsivo);
// Faz o link do header 'Fale Conosco' abrir o formulário
const headerContactLink = document.getElementById('header-contact-link');
if (headerContactLink) {
    headerContactLink.addEventListener('click', function(e) {
        e.preventDefault();
        cliqueiNoBotao();
    });
}
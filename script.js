document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    let rotation = 0;

    function rotateLogo() {
        rotation += 1;
        logo.style.transform = `translateY(-10px) rotate(${rotation}deg)`;
        requestAnimationFrame(rotateLogo);
    }

    rotateLogo();
});
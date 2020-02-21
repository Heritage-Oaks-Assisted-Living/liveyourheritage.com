
document.querySelector('.menu-icon-open').addEventListener('click', function () {
    document.querySelector('.menu').classList.add('active');
});

document.querySelector('.menu-icon-close').addEventListener('click', function () {
    document.querySelector('.menu').classList.remove('active');
});

var main = document.querySelector('.main');
if (main) {

    var index = 0;
    var images = Array.prototype.slice.call(document.querySelectorAll('.slide'), 0);

    window.setInterval(function () {
        index = index === images.length - 1 ? index = 0 : index += 1;

        if (index === 0)images[images.length - 1].classList.toggle('active');
        else images[index - 1].classList.toggle('active');

        images[index].classList.toggle('active');
    }, 3000);
}

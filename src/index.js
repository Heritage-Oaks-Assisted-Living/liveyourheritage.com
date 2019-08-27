
document.querySelector('.menu-icon-open').addEventListener('click', function () {
    document.querySelector('.menu').classList.add('active');
});

document.querySelector('.menu-icon-close').addEventListener('click', function () {
    document.querySelector('.menu').classList.remove('active');
});

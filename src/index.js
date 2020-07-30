
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


(function() {

	var response = document.querySelector('.form-response');
	var form = document.querySelector('.contact-form');
	if (!form) return;

	At.setup.spinner.size = '6px';
	At.setup.spinner.thickness = '30px';

	At.submit({
		query: form,
		method: 'post',
		responseType: 'json',
		action: 'https://www.enformed.io/b3bia8ve',
		prepare: function (data, resolve) {
            data['*default_email'] = 'ryan.reilly@liveyourheritage.com';
			data['*cc'] = 'grant.reilly@liveyourheritage.com, jon@arcdev.io, ryanreilly1995@gmail.com, grantreilly123@gmail.com';
			resolve(data);
		},
		complete: function (error, success) {
			if (error) {
				response.style.color = '#89293D';
				response.innerText = 'Error: Form submit failed. Please call.';
			} else {
				form.style.display = 'none';
				response.style.color = '#B0BF7F';
				response.innerText = 'Contact Form Submitted!';
			}
		}
	});

}());

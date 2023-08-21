

Access-Control-Allow-Origin: https://www.https://github.com/Heritage-Oaks-Assisted-Living/liveyourheritage.com


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

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		var data = {};
		var elements = [];

		elements.push.apply(elements, form.querySelectorAll('input'));
		elements.push.apply(elements, form.querySelectorAll('textarea'));

		for (var i = 0; i < elements.length; i++) {
			var input = elements[i];
			var name = input.name;
			var value = input.value;
			if (name) data[name] = value;
		}
		data['$name'] = 'Main Contact Form';
		data['$to'] = 'info@liveyourheritage.com';
		data['$cc'] = 'ryan.reilly@liveyourheritage.com, reid.reilly@liveyourheritage.com';

		fetch('https://forms.un-static.com/forms/8637a490c95992ea3f5c0eace45f5f683f895fef', {
			method: 'post',
			body: JSON.stringify(data)
		}).then(function (result) {
			if (result.status !== 200) throw new Error(result.statusText);
			form.reset();
		}).then(function (data) {
			form.style.display = 'none';
			response.style.color = '#B0BF7F';
			response.innerText = 'Success: Form Sent';
		}).catch(function (error) {
			console.log(error);
			response.style.color = '#89293D';
			response.innerText = 'Error: Please Call';
		});
	});

	var clicktocall = document.querySelectorAll("a[href='tel:520-999-0797']");
	for (var i=0; i < clicktocall.length; i++) {
	 clicktocall[i].addEventListener("click", function() {
		gtag('event', 'Clicked', {
			'event_category': 'Buttons',
			'event_label': 'Call Us Button'			
		  });
		}, false);
	}	  
}());

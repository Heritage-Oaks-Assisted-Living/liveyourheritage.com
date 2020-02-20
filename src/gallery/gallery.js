(function() { 'use strict';
	var photoGallery = document.querySelector('.photo-gallery');

	if (photoGallery) {
		Astatine.ajax({
			method: 'get',
			action: 'https://res.cloudinary.com/dbc2wlvk8/image/list/home.json',
			success: function (xhr) {

				var list = JSON.parse(xhr.responseText);
				var largeImages = [];
				var smallImages = [];
                console.log(list);
				for (var i = 0, l = list.resources.length; i < l; i++) {
					var item = list.resources[i];
					largeImages.push('https://res.cloudinary.com/dbc2wlvk8/image/upload/w_900,f_auto/v1582182268/' + item.public_id + '.' + item.format);
					smallImages.push('https://res.cloudinary.com/dbc2wlvk8/image/upload/w_500,f_auto/v1582182268/' + item.public_id + '.' + item.format);
				}

                console.log(largeImages);
				erbium.gallery.create('.photo-gallery', largeImages, smallImages);
			},
			error: function (xhr) {
				console.log(xhr);
			}
		});
	}
}());

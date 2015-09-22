var removeOphans = function () {
	var imageCursor = db.images.find();
	while (imageCursor.hasNext()) {
		var imageDocument = imageCursor.next();
		print('processing image with identifier: ' + imageDocument._id);

		var albumDocument = db.albums.findOne({images: imageDocument._id});
		var albumFound = albumDocument != null;

		if (!albumFound) {
			print('no album containing the image has been found');			
			print('removing image with identifier: ' + imageDocument._id);
			db.images.remove({_id: imageDocument._id});
		}
	}
};

var nbOfImagesTaggedKittens = function () {
		print(db.images.count({tags: 'kittens'}));
}

removeOphans();
nbOfImagesTaggedKittens();
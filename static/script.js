$(function(){

	// Set tooltip
	$('.btn').tooltip();

	if($('.code-sample-typewriter').length != 0) {
		typewriter.Typewriter.cycle('type-vid-key', ['myVids/movie.avi', 'usr72/video.mov', 'my-movie.mp4','s3bkt/vid2.mov']);
	}

});
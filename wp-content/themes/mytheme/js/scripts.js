$(document).ready(function(){
	heightTopPosition('#home', '.container');

	
});

function myfunction(selector, container){
	console.log('test');

}


/*
	//Resize
	$(window).resize(function(){});

	//Limit characters responsive
	function limitarCaracteresglobal(){
		limitCharacters('.element_to_limit', 60, 768);
		function limitCharacters(selector, maxCharacters, viewportVal){
			var windowWidth = $(window).width();
			$(selector).each(function(){
				var totalCharacters = $(this).text();
				if (windowWidth <= viewportVal) {
					if (totalCharacters.length >= maxCharacters) {
						$(this).attr('data-str', totalCharacters);
						var limitedCharacters = totalCharacters.substr(0, maxCharacters);
						$(this).text(limitedCharacters + '...');
					};
				}else{
					$(this).text(totalCharacters);
				}
			});
		}
	}

	//Variables
	var wiewportWidth = $(window).width();

*/
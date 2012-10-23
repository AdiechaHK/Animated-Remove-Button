$(document).ready(function(){
	window.googleRemoveInit = function(opts) {

		// Default config
		var config = {
			'position' : 'before',
			'open' : '-80deg',
			'css': false
		};

		// update config according to given options
		if(opts!=null && opts.hasOwnProperty('position')){
			var pos = opts['position'];
			if(pos == "before" || pos == "after") {
				config['position'] = pos;
			} else {
				console.log("Invalid option : position [ to initialize google-remove ]");
			}
		}
		if(opts!=null && opts.hasOwnProperty('open')){
			var openCap = opts['open'];
			if(/^\d+$/.test(openCap)) {
				config['open'] = openCap+'deg';
				config['css'] = true;
			} else if(/^(\d+)deg$/.test(openCap)) {
				config['open'] = openCap;
				config['css'] = true;
			} else {
				console.log("Invalid option : open [ to initialize google-remove ]");
			}
		}

		// Creates image div
		var $imageDiv = $('<div/>').append($('<div/>', {
			'class': 'trash-cap'
		})).append($('<div/>', {
			'class': 'trash-body'
		}));

		// place image div according to relative parent (.remove-img)
		if(config.position == 'after'){
			$('.remove-img').append($imageDiv);
		} else {
			$('.remove-img').prepend($imageDiv);
		}

		// Change style sheet
		if(config.css) {
			// code for style sheet changes
			var styleText = ".remove-img:hover > div > .trash-cap { transform: rotate(-"+config.open+"); -ms-transform: rotate(-"+config.open+"); -webkit-transform: rotate(-"+config.open+"); -o-transform: rotate(-"+config.open+"); -moz-transform: rotate(-"+config.open+"); }";
			$('head').append($('<style/>', {
				html: styleText
			}));
		}
	};
});
/*!
 * jQuery fontAwesome-powered simple input[type="search"] polyfill
 * Original author: Matt Stauffer, github.com/jiolasa (@stauffermatt)
 * Plugin pattern by @addyosmani: https://github.com/addyosmani/jquery-plugin-patterns/
 */

;(function ( $, window, document, undefined ) {

	var pluginName = 'fontAwesomeSearchPolyfill',
		defaults = {
			theme: 'none'
		};

	// Plugin Constructor
	function Plugin( element, options ) {
		this.element = element;

		this.options = $.extend( {}, defaults, options) ;
		
		this._defaults = defaults;
		this._name = pluginName;
		
		this.init();
	}

	// Our plugin
	Plugin.prototype.init = function () {
		var $cancel_button,
			$el = $(this.element);

		// Totally bootleg: override default search styles
		$("<style type='text/css'>input[type=\"search\"] { -webkit-appearance: textfield; -moz-box-sizing: content-box; -webkit-box-sizing: content-box; box-sizing: content-box; } input[type=\"search\"]::-webkit-search-decoration, input[type=\"search\"]::-webkit-search-cancel-button { -webkit-appearance: none; }</style>").appendTo("head");

		// Some theme ideas: Webkit, Google, Slight round, etc.
		// @todo: Make this a sexier, more modular system
		switch( this.options.theme ) {
			// @todo: Actually make this work.
		}

		// Do the work.
		$cancel_button = $('<a href="#" class="icon-remove-sign" />').css('display', 'none');

		$cancel_button.on( 'click', function( e ) {
			e.preventDefault();
			$el.val('');
			$cancel_button.hide();
		});

		$el
			.wrap('<span class="search-input-wrapper" />')
			.before('<i class="icon-search" />')
			.after( $cancel_button )
			.on( 'keyup', function() {
				// Manage search cancel button
				if( $el.val() !== '' ) {
					$cancel_button.show();
				} else {
					$cancel_button.hide();
				}
			});
	};

	$.fn[pluginName] = function ( options ) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, 
				new Plugin( this, options ));
			}
		});
	};

})( jQuery, window, document );
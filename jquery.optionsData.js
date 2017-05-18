(function($, undefined) {
	"use strict";
	$.fn.optionsData = function(pattern) {
		var results = [];
		var replaceFunction = function(data, key, o) {
			return function($0, $1, pos, org) {
				var c = org.charAt(pos + $1.length);
				c = c == ']' ? org.charAt(pos + $1.length + 1) : c;
				o = o[$1] = c == '=' ? data[key] : (typeof o[$1] == 'undefined' ? (c == '.' ? {} : []) : o[$1]);
			};
		};
		this.each(function() {
			var result = {};
			var data = $(this).data();
			for (var key in data) {
				if (data.hasOwnProperty(key) && key.match(pattern)) {
					var o = result;
					var newKey = key.replace(pattern, '') + "=";
					newKey = newKey.charAt(0).toLowerCase() + newKey.slice(1);
					newKey.replace(/([^\.\[\]\=]+)/g,  replaceFunction(data, key, o));
				}
			}
			results.push(result);
		});
		if (results.length === 1) {
			return results[0];
		} else {
			return results;
		}
	};
	$.optionsData = function(elem, pattern) {
		return $(elem).optionsData(pattern);
	};
})(jQuery);
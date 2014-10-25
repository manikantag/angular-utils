/**
 * @name ngx$httpNoCache
 * @description Stops IE from cahcing the HTTP Ajax responses
 * <p>Implementation notes:
 * for compatibility reasons (especially from IE11), use 'Trident' instead of 'MSIE' for userAgent regex test.</p>
 * @author Manikanta G
 * @see http://stackoverflow.com/a/19771501/340290
 * @see <a href="http://msdn.microsoft.com/en-us/library/bg182625(v=vs.85).aspx#uaString>Compatibility changes in IE11</a>
 * @see <a href="http://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx">Understanding user-agent strings</a>
 */
(function () {
	'use strict';
	
	var ngx$httpNoCache = angular.module('ngx$httpNoCache', ['ng']);
	
	ngx$httpNoCache.config([ '$httpProvider', function($httpProvider) {
		
		// check 'navigator.userAgent' if the current browser is IE
		if(/Trident/.test(navigator.userAgent)) {
			if (!$httpProvider.defaults.headers.get) {
				$httpProvider.defaults.headers.get = {};
			}
			$httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
		}
		
	} ]);
	
})();

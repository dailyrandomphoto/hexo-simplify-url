/**
 * hexo-simplify-url
 * https://github.com/dailyrandomphoto/hexo-simplify-url.git
 * Copyright (c) 2019 dailyrandomphoto
 * Licensed under the MIT license.
 */

'use strict';

/**
 * <%- simplify_url(text) %> replace urls in the provided text.
 * /posts/title/index.html => /posts/title/
 * /about/index.html => /about/
 *
 * e.g.
 * <code>
 * <%= simplify_url(page.permalink) %>
 * <%- simplify_url(open_graph({ ... })) %>
 * </code>
 */
hexo.extend.helper.register('simplify_url', function(url) {
	if (!url) {
		return url;
	}
	url = url.replace(/index\.html/g, '');
	return url;
});

/**
 * Put <%- simplify_url_auto_redirect() %> tag in to the head tag.
 * Auto redirect on client for these cases.
 * http://yoursite.com/page => http://yoursite.com/page/
 * http://yoursite.com/page/index.html => http://yoursite.com/page/
 */
hexo.extend.helper.register('simplify_url_auto_redirect', function() {
	return '<script>!function(){var a=location.pathname;a&&"/"!==a.substr(-1)&&(location.pathname=a.replace(/\/index.html|$/,"/"))}();</script>';
});

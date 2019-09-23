# hexo-simplify-url
[![NPM Version](https://img.shields.io/npm/v/hexo-simplify-url.svg)](https://www.npmjs.com/package/hexo-simplify-url)
[![NPM Downloads](https://img.shields.io/npm/dm/hexo-simplify-url.svg)](https://www.npmjs.com/package/hexo-simplify-url)
[![LICENSE](https://img.shields.io/npm/l/hexo-simplify-url.svg)](LICENSE)

Simplify url for pages and links.  
You could use this module for your SEO of blog powered by hexo.

If you don't want to see `/index.html` in your urls, use `simplify_url` helper.

If you don't want your users see `/index.html` or `/index` in the address bar of browsers, use `simplify_url_auto_redirect` helper.

## Installation
```
npm install --save hexo-simplify-url
```

## Usage

### simplify_url
Use `simplify_url` to remove `index.html` in the links.

``` ejs
<%= simplify_url(page.permalink) %>

<%- simplify_url(open_graph({ ... })) %>
```
Notice: From hexo@4.0, use `pretty_urls` option can remove `index.html` from permalink. (https://github.com/hexojs/hexo/pull/3691)

### simplify_url_auto_redirect
Add a `simplify_url_auto_redirect` helper simply to your html's `<head>` block as follows:

``` ejs
<%- simplify_url_auto_redirect() %>
```

## License
Copyright (c) 2019 dailyrandomphoto. Licensed under the [MIT license](LICENSE).

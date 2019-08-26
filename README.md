# hexo-simplify-url
[![Downloads](https://img.shields.io/npm/dm/hexo-simplify-url.svg)](https://www.npmjs.com/package/hexo-simplify-url) [![npm](https://img.shields.io/npm/v/hexo-simplify-url.svg)](https://www.npmjs.com/package/hexo-simplify-url) [![LICENSE](https://img.shields.io/npm/l/hexo-simplify-url.svg)](LICENSE)

Simplify url for pages and links.
You could use this module for your SEO of blog powered by hexo.

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

### simplify_url_auto_redirect
Add a `simplify_url_auto_redirect` helper simply to your html's `<head>` block as follows:

``` ejs
<%- simplify_url_auto_redirect() %>
```

## License
Copyright (c) 2019 dailyrandomphoto. Licensed under the [MIT license](https://github.com/dailyrandomphoto/hexo-simplify-url/blob/master/LICENSE).

# cookie-consent
A tiny script you can include in your site that creates a cookie consent popup the first time a user visits it.

## Instalation
There are to ways to use this script:
1. Using a CDN
2. Hosting the file yourself

### CDN
In order to use cookie-consent via a cdn, include one of the flolowing `<script>` tags at the bottom of `<body>` element in your HTML page:
```html
<script src="https://cdn.jsdelivr.net/gh/edazpotato/cookie-consent@latest/cookie-consent.js"></script>
```

### Self hosting
In order to host cookie-consent yourself:
1. download the latest release from the [packages](/packages) page
2. upload the file to your web server
3. reference it at the bottom of your `<body>` tag like this:
```html
<script src="/path/to/file/cookie-consent.js"></script>
```

function showCookieBanner() {
	var cssStr = "\
#cookie-banner {position: fixed;bottom: 40px;left: 10%;right: 10%;width: 80%;padding: 5px 14px;display: flex;align-items: center;justify-content: space-between;flex-direction: row;background-color: #ed4f11;color: #000000;border-radius: 5px;box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);}\
#cookie-close {height: 20px;background-color: #edd011;color: #ffffff;border: none;color: white;border-radius: 2px; cursor: pointer;align-self: flex-end;}";
  	var styleEl = document.createElement("style");
  	styleEl.innerHTML = cssStr;
  	document.body.appendChild(styleEl);
	var htmlStr = '<div id="cookie-banner" style="display: block"><p>By continuing using this website, you consent to us and various third party providers using cookies and other related technolgies, which save data in your browser</p><button id="cookie-close">&times;</button></div>';
  	var el = document.createElement("div");
  	el.innerHTML = htmlStr;
  	document.body.appendChild(el);
  	document.getElementById("cookie-close").addEventListener("click", function() {
    	el.setAttribute("style", "display: none;");
  	});
}
if (localStorage.getItem('cookieSeen') !== 'shown') {
  localStorage.setItem('cookieSeen','shown')
  showCookieBanner();
}

chrome.tabs.executeScript( {
	code: "window.getSelection().toString();"
}, function(selection) {
	document.getElementById("output-img").src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + selection[0];
});

//if($('link[href*="219"]').attr("media","embossed").length >= 1){
	//chrome.extension.sendRequest("show_page_action"); 
//}

var av;
chrome.extension.onRequest.addListener(function (request, sender) { 
	if (request == "yosposamber") { 
		av = "avamber.png";
	} else {
		av = "avgreen.png";
	}
	
	$(".userid-32076").children(".userinfo").children(".title").children("img").attr("src",chrome.extension.getURL(av));
});



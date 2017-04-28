/*Handle requests from background.html*/
function handleRequest(
	//The object data with the request params
	request, 
	//These last two ones isn't important for this example, if you want know more about it visit: http://code.google.com/chrome/extensions/messaging.html
	sender, sendResponse
	) {
	if (request.callFunction == "toggleSidebar")
		toggleSidebar();
}
chrome.extension.onRequest.addListener(handleRequest);


/*Small function wich create a sidebar(just to illustrate my point)*/
var sidebarOpen = false;
function toggleSidebar() {
	if(sidebarOpen) {
		var el = document.getElementById('mySidebar');
		el.parentNode.removeChild(el);
		sidebarOpen = false;
	}
	else {
		var sidebar = document.createElement('div');
		sidebar.id = "mySidebar";
		sidebar.innerHTML = "\
		<form style='margin:0; padding:0;' action=''>\
				<script>\
				function highlightCSS(){\
					var query = document.getElementById('pathQueryInput').value;\
					var x = document.querySelectorAll(query);\
					// Set the background color of the first <p> element\
					x[0].style.backgroundColor = 'red';\
				}\
			</script>\
				<p>\
					<select> <option value='css'>CSS</option> <option value='xpath'>XPath</option> </select>\
					Query: <input type= 'text' style='width:80%' name='name' id='pathQueryInput'>\
					<button type= 'button' onclick='highlightCSS();'> Evaluate Query</button>\
				</p>\
			</form>\
			";
		sidebar.style.cssText = "\
		position:fixed;\
		bottom:0px;\
		left:0px;\
		width:100%;\
		height:25%;\
		background:white;\
		box-shadow:inset 0 0 1em black;\
		z-index:999999;\
		";
		document.body.appendChild(sidebar);
		sidebarOpen = true;

		var x = document.querySelectorAll("body"); 

	// Set the background color of the first <p> element
		x[0].style.backgroundColor = "red"; 
		}
}

/*function highlightCSS(){

		var query = document.getElementById("pathQueryInput").value;
		var x = document.querySelectorAll(query); 

	// Set the background color of the first <p> element
		x[0].style.backgroundColor = "red"; 
}*/

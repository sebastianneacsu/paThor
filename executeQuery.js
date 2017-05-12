function highlightCSS(){

		try {
    	var previousResults = document.getElementsByClassName("elementFoundByChromeExtension");
    	if (previousResults.length > 0){
			previousResults[0].classList.remove("elementFoundByChromeExtension");
		}
		}
		catch(e) {
		console.log(e);
		}


		var query = document.getElementById("pathQueryInput").value;
		var queryResults = document.querySelectorAll(query); 

		if (queryResults.length > 0) {
		queryResults[0].classList.add("elementFoundByChromeExtension");

		}
	
		return false;
}

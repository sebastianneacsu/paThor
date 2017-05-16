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
		var option = document.getElementById("querySelectOption").value;

		if (option == "css"){
			try{
				var queryResults = document.querySelectorAll(query); 
				document.getElementById("numberOfresultsFromChromeExtension").innerHTML = "Nodes found = " + queryResults.length;
				if (queryResults.length > 0) {
				queryResults[0].classList.add("elementFoundByChromeExtension");
				}
			} catch(e) {
				document.getElementById("numberOfresultsFromChromeExtension").innerHTML = "Invalid CSS selector"; 
			} 
		}
		else if (option == "xpath"){
			try{
			var xpathResultsNo = document.evaluate("count(" + query + ")", document.body, null, XPathResult.ANY_TYPE , null).numberValue;
			document.getElementById("numberOfresultsFromChromeExtension").innerHTML = "Nodes found = " + xpathResultsNo;
			if (xpathResultsNo > 0){
				var xpathResults = document.evaluate(query, document.body, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				xpathResults.classList.add("elementFoundByChromeExtension");
				}
			} catch(e) {
				document.getElementById("numberOfresultsFromChromeExtension").innerHTML = "Invalid XPath selector"; 
			} 
		}
	
		return false;
}

//This is where the arrays that are saved in JSON files are requested and returned to the app
	var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				var allergenNames = JSON.parse(xhr.responseText);
				document.getElementById("testArea").innerHTML = "ran";
			}
		
		};	
		xhr.open('GET', 'allergenList.json');
		xhr.send();

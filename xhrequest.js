//This is where the arrays that are saved in JSON files are requested and returned to the app
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if (xhr.readyState === 4){
		var dairyNames = JSON.parse(xhr.responseText);
		}	
};
xhr.open('GET', 'dairy.json');
xhr.send();

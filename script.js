//All javascript logic for the app




inputBox.addEventListener("click", function(){
	//get string from textarea
	var str= document.getElementById("ingredients").value;
	if (str==""){
		document.getElementById("testArea").innerHTML = "no ingredients listed";	
	}
	//turn string into array
	var ingArray = new Array();
	ingArray=str.split(",");
	
	var message ="";
	//check for dairy ingredtients
	if (document.getElementById("dairy").checked){
		//This is where the arrays that are saved in JSON files are requested and returned to the app
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4){
				var allergNames = JSON.parse(xhr.responseText);
				compareFunction(allergNames, "dairy");
			}	
		};
		xhr.open('GET', 'allergenList.json');
		xhr.send();
		
	};
	
	
	//check for gluten ingredients
	if (document.getElementById("gluten").checked){
		//This is where the arrays that are saved in JSON files are requested and returned to the app
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4){
				var allergNames = JSON.parse(xhr.responseText);
				compareFunction(allergNames, "gluten");
			}
		
		};	
		xhr.open('GET', 'allergenList.json');
		xhr.send();
		
	};
	if (document.getElementById("gluten").checked == false && document.getElementById("dairy").checked==false){
		document.getElementById("testArea").innerHTML = "no allergens checked";
	};
	

	function compareFunction(allergNames, allergen){
		
		for(var i=0; i<allergNames.length; i++){
			if (allergNames[i].allergen=== allergen){
				for (var j=0; j<ingArray.length; j++){
					if ((ingArray[j].indexOf(allergNames[i].ingredient))!=-1){
					message+= allergen + " : "+ ingArray[j] +"<br>";
					}
					
				}
			document.getElementById("testArea").innerHTML = message;
			}
			
			
		}
		
		
	};
	
	
});






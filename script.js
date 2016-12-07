//Brittaney's Javascript

inputBox.addEventListener("click", function(){
	//get string from textarea
	var str= document.getElementById("ingredients").value.toLowerCase();
	//alert if there are noingredients in the text area
	if (str==""){
		alert("No ingredients listed");	
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
				//compareFunction(allergNames, "dairy");
				for(var i=0; i<allergNames.length; i++){
					if (allergNames[i].allergen=== "dairy"){
						for (var j=0; j<ingArray.length; j++){
							if ((ingArray[j].indexOf(allergNames[i].ingredient))!=-1){
								message+= "Dairy: "+ ingArray[j] +"<br>";
							}
					
						}
					document.getElementById("dairyArea").innerHTML = message;
					}
			
			
				}
			}	
		};
		xhr.open('GET', 'allergenList.json');
		xhr.send();
		
	} else{
		document.getElementById("dairyArea").innerHTML = "";
		
	}
});	
inputBox.addEventListener("click", function(){
	//get string from textarea
	var str= document.getElementById("ingredients").value.toLowerCase();
	//alert if there are noingredients in the text area
	if (str==""){
		alert("No ingredients listed");	
	}
	//turn string into array
	var ingArray = new Array();
	ingArray=str.split(",");
	
	var message ="";
	//check for gluten ingredients
	if (document.getElementById("gluten").checked){
		//This is where the arrays that are saved in JSON files are requested and returned to the app
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4){
				var allergNames = JSON.parse(xhr.responseText);
				//compareFunction(allergNames, "gluten");
				for(var i=0; i<allergNames.length; i++){
					if (allergNames[i].allergen=== "gluten"){
						for (var j=0; j<ingArray.length; j++){
							if ((ingArray[j].indexOf(allergNames[i].ingredient))!=-1){
								message+= "Gluten: "+ ingArray[j] +"<br>";
							}
					
						}
					document.getElementById("glutenArea").innerHTML = message;
					}
			
			
				}
			}
		
		};	
		xhr.open('GET', 'allergenList.json');
		xhr.send();
		
	}
	else{
		document.getElementById("glutenArea").innerHTML = "";
		
	}
	//if there is no boxes chexked
	if (document.getElementById("gluten").checked == false && document.getElementById("dairy").checked==false){
		alert("No allergens were checked.");
	}
});
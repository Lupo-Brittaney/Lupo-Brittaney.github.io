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
					
					}
			
				}
				if (message===""){
					message= "No dairy allergens found";
				}
				document.getElementById("dairyArea").innerHTML = message;
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
					
					}
			
				
					document.getElementById("glutenArea").innerHTML = message;
				}
				if (message===""){
					message= "No gluten allergens found";
				}
				document.getElementById("glutenArea").innerHTML = message;	
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

//Alex's part of the code
window.onload = function() {
	if (localStorage.getItem("dairy") != null) {
		document.getElementById("dairy").checked = true;
	}
	else {
		document.getElementById("dairy").checked = false;
	}
	if (localStorage.getItem("gluten") != null) {
		document.getElementById("gluten").checked = true;
	}
	else {
		document.getElementById("gluten").checked = false;
	}
};
			
//function submit() {
inputBox.addEventListener("click", function(){
	// get reference to required checkbox
	var dairyBox = document.getElementById("dairy");
	var glutenBox = document.getElementById("gluten");
	
	if ( !dairyBox.checked && !glutenBox.checked ) { // if it's not checked
		// display error info (generally not an alert these days)
		alert( 'Please select either dairy, gluten, or both.' );
		localStorage.clear();
		return false; // don't submit
	}
	else if ( dairyBox.checked && !glutenBox.checked ) {			
		var dairyAllergen = "dairy";		
		localStorage.setItem("dairy", dairyAllergen);
		  
		localStorage.removeItem("gluten");
	}
	else if ( !dairyBox.checked && glutenBox.checked ) {
		var glutenAllergen = "gluten";
		localStorage.setItem("gluten", glutenAllergen);
		
		localStorage.removeItem("dairy");
	}
	else {
		var dairyAllergen = "dairy";
		var glutenAllergen = "gluten";
		
		localStorage.setItem("dairy", dairyAllergen);
		localStorage.setItem("gluten", glutenAllergen);
	}
	
	if ( localStorage.getItem("dairy") == null && localStorage.getItem("gluten") == null ) {
		alert("what am I doing?");
	}
	else if ( localStorage.getItem("dairy") == null && localStorage.getItem("gluten") != null ) {
		alert(localStorage.getItem("gluten"));
	}
	else if ( localStorage.getItem("dairy") != null && localStorage.getItem("gluten") == null ) {
		alert(localStorage.getItem("dairy"));
	}
	else if ( localStorage.getItem("dairy") != null && localStorage.getItem("gluten") != null ) {
		alert(localStorage.getItem("dairy") + " " + localStorage.getItem("gluten"));
	}
)};
			
function showStorage() {
	if ( localStorage.getItem("dairy") != null ) {
		alert(localStorage.getItem("dairy"));
	}
	else {
		alert("Dairy is not in localStorage");
	}
	if ( localStorage.getItem("gluten") != null ) {
		alert(localStorage.getItem("gluten"));
	}
	else {
		alert("Gluten is not in localStorage");
	}
};

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
	
	
	if (document.getElementById("dairy").checked){
		//run test function
		document.getElementById("testArea").innerHTML = glutenNames;
		alert("dairy");
	};
	if (document.getElementById("gluten").checked){
		//run test
		alert("gluten");
	};
	if (document.getElementById("gluten").checked == false && document.getElementById("dairy").checked==false){
		document.getElementById("testArea").innerHTML = "no allergens checked";
	};
	

	
	
});








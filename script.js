//All javascript logic for the app
	var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				var allergenNames = JSON.parse(xhr.responseText);
				document.getElementById("testArea").innerHTML = allergenNames;
			}
		
		};	
		xhr.open('GET', 'allergenList.json');
		xhr.send();
	};


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
		//document.getElementById("testArea").innerHTML = glutenNames;
		alert("dairy");
		//This is where the arrays that are saved in JSON files are requested and returned to the app
	
	if (document.getElementById("gluten").checked){
		//run test
		alert("gluten");
		//This is where the arrays that are saved in JSON files are requested and returned to the app
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4){
				var glutenNames = JSON.parse(xhr.responseText);
				compareFunction(glutenNames);
			}
		
		};	
		xhr.open('GET', 'allergenList.json');
		xhr.send();
	};
	if (document.getElementById("gluten").checked == false && document.getElementById("dairy").checked==false){
		document.getElementById("testArea").innerHTML = "no allergens checked";
	};
	

	function compareFunction(ingNames){
		alert(ingNames);
		
	};
	
});








//your JS code here. If required.
let input = document.getElementById("fname")
input.addEventListner ("blur", function(){
	input.value = input.value.toUpperCase();
})
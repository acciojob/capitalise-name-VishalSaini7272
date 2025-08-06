//your JS code here. If required.
window.addEventListener("DOMContentLoaded", function () {
let input = document.getElementById("fname")
input.addEventListener ("blur", function(){
	input.value = input.value.toUpperCase();
});
});
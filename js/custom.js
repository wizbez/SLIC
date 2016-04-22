

// Without JQuery
var slider = new Slider("#ex6");
slider.on("slide", function(slideEvt) {
	$("#ex6SliderVal").text(slideEvt.value);
});

/*function show1() {
	document.getElementById('scale1').style.display="block";
}
function show5() {
	document.getElementById('scale5').style.display="block";
}
function show10() {
	document.getElementById('scale10').style.display="block";
}*/
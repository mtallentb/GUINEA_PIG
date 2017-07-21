let outputTarget = document.getElementById("output-target");

// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

let sections = document.getElementsByTagName("section");

function sectionClick(MouseEvent) {
	let elementText = MouseEvent.target.innerHTML;
	outputTarget.innerHTML = "You clicked on the " + elementText + " section";
}

for (let i = 0; i < sections.length; i++) {
	sections.item(i).addEventListener("click", sectionClick);
}

/* When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
When the mouse leaves the h1 tag, the output element should contain the text "You left me!!". */

let headers = document.getElementsByTagName("h1");

function headerMouseOver(MouseEvent) {
	outputTarget.innerHTML = "You moved your mouse over the header";
}

function headerMouseOut(MouseEvent) {
	outputTarget.innerHTML = "You left me!!";
}

for (i = 0; i < headers.length; i++) {
	headers.item(i).addEventListener("mouseover", headerMouseOver);
	headers.item(i).addEventListener("mouseout", headerMouseOut);
}

// When you type characters into the input field, the output element should mirror the text in the input field.

let inputArea = document.getElementById("keypress-input");

inputArea.addEventListener("keyup", function(event) {
	console.log("event", event);
	outputTarget.innerHTML = event.target.value;
});	

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.

let guineaPig = document.getElementById("guinea-pig");

document.getElementById("add-color")
	.addEventListener("click", function() {
		guineaPig.classList.toggle("blue");
});

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.

document.getElementById("make-large")
	.addEventListener("click", function() {
		guineaPig.classList.toggle("enlarged");
});

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.

document.getElementById("add-border")
	.addEventListener("click", function() {
		guineaPig.classList.toggle("bordered");
});

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

document.getElementById("add-rounding")
	.addEventListener("click", function() {
		guineaPig.classList.toggle("round");
});
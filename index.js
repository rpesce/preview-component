//Function constructor
var Url = function(url){
	this.url = url
};






//Set event listener on click and keypress
var setupEventListeners = function() {
	document.getElementById('submitBtn').addEventListener('click', saveItem);
	document.addEventListener('keypress', function(e){
		if (e.keyCode === 13 || e.which === 13){
			saveItem();
		}
	});
};

// Get the input from the input field
function getInput() {
	return document.querySelector('.newUrl').value;
};

//Create new URL input
saveItem = function(){
	var input, newUrl;

	//1. Get the field input data
	input = getInput();
	if(input !== "") {

		//2. Create a new URL instance
		newUrl = new Url(input);
		return newUrl;
		//Redirect user to the next screen while supplying iframe src with the URL specified by user
	}
};



//Start application
var init = function(){
	console.log("Application mode on");
	setupEventListeners();
};






init();
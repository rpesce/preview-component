/*
gettingUrl = window.location.href;
	if(gettingUrl === ''){
	//Set event listener on click and keypress
	var setupEventListeners = function(){
		console.log("Application on");
		document.querySelector('.submitBtn').addEventListener('click', saveItem);
		document.addEventListener('keypress', function(e){
			if(e.keyCode === 13 || e.which === 13){
				saveItem();
			}
		});
	};

	// Get the input from the input field
	function getInput() {
		var newInput = document.querySelector('.newUrl').value;
		return newInput;
	};

	//Create new URL input
	function saveItem(){
		var input, newUrl;

		//1. Call get input function
		input = getInput();
		//2. Validate if there is input
		if(input !== "") {
			//2. Call redirect function and supply input
			redirect(input);
		};
	};

	//Redirect user to the next screen while supplying iframe src with the URL specified as input
		function redirect(url){
	  		location.replace(url)
		};

	setupEventListeners();
};
*/


//Split url to get the param
gettingUrl = window.location.href;
splitUrl = gettingUrl.split('?');
srcUrl = 'https://' + splitUrl[1];
console.log(srcUrl);
updateSrc(srcUrl);

//Assign the variable to the iframe src
function updateSrc(srcUrl) {
	document.querySelector('.theFrame').src = srcUrl;
};



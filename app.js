
//Commit 1
var button = document.getElementById("myBtn")

button.addEventListener("click", function(event){
	event.preventDefault();   


	var colorEntered = document.querySelector('input').value 	
	var canvas = document.getElementById("myCanvas")

	canvas.style.backgroundColor = colorEntered;

})
	
//COMMIT 2
var inputValue = document.querySelector('input')	

// Execute a function when the user releases a key on the keyboard
inputValue.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});

  


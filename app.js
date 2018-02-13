
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

  
//Commit 3 
	// var $canvas = $('<canvas></canvas>')

	// var $display = $('.display')


	// $display.append($canvas)



// <canvas id="myCanvas" width="100" height="100"></canvas>

// // var newdivElem = $('<div>')
// var newH2Elem = $('<h2>')
// var newH2ElemPoster = $('<img>').attr('src', movie.Poster)
// newH2Elem.text(movie.Title)
// newH2ElemPoster.text(movie.Poster)
// newdivElem.append(newH2Elem)
// newdivElem.append(newH2ElemPoster)



// $options_display.append(newdivElem)
// $options_display.append(newH2ElemPoster)
// console.log(movie.Year)
































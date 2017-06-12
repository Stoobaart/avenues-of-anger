var right = false
var left = false
var up = false
var down = false

$(document).ready(function() {
	document.addEventListener("keydown", keyDown, false);
	document.addEventListener("keyup", keyUp, false);

	// move when arrow key is pressed
	function keyDown(e) {
		// console.log(e.keyCode)
	  if(e.keyCode==39) {
	  	right = true;
	  	setInterval(moveRight, 16.6667)
	  } else if (e.keyCode==37){
			left = true;
			setInterval(moveLeft, 16.6667)
	  } else if (e.keyCode==38){
	  	up = true;
	  	setInterval(moveUp, 16.6667)
	  } else if (e.keyCode==40){
	  	down = true;
	  	setInterval(moveDown, 16.6667)
	  }
	}

	// Stop animation when key is released, and clear any queued movements
	function keyUp(e) {
		// console.log("right: " + right + ", left: " + left + ", up: " + up + ", down: " + down)
		if (e.keyCode==39){
			right = false;
		} else if (e.keyCode==37) {
			left = false;
		} else if (e.keyCode==38) {
			up = false;
		} else if (e.keyCode==40) {
			down = false;
		}
		setTimeout(function() {
			// $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
			$("#player").html('<img class="playerSprite" src="assets/images/TheDetectiveStatic.png"><img class="playerSpriteRight walkAnim" src="assets/images/TheDetectiveRight.png"><img class="playerSpriteLeft walkAnim" src="assets/images/TheDetectiveLeft.png"><img class="playerSpriteDown walkAnim" src="assets/images/TheDetective.png"><img class="playerSpriteUp walkAnim" src="assets/images/TheDetectiveUp.png">')
		}, 250);
		$("#player").stop();
	}

	function moveRight() {
		if (right === true && up === true) {
			$(".playerSprite").remove();
			$("#player").css({"left":"+=0.1px", "top":"-=0.1px"});
		} else if (right === true && down === true) {
			$(".playerSprite").remove();
			$("#player").css({"left":"+=0.1px", "top":"+=0.1px"});
		} else if (right === true) {
			$(".playerSprite").remove();
			$("#player").css({"left":"+=0.1px"});
		}
		$("#player").clearQueue();
	}	

	function moveLeft() {
		if (left === true && up === true) {
			$(".playerSprite, .playerSpriteRight").remove();
			$("#player").css({"left":"-=0.1px", "top":"-=0.1px"});
		} else if (left === true && down === true) {
			$(".playerSprite, .playerSpriteRight").remove();
			$("#player").css({"left":"-=0.1px", "top":"+=0.1px"});
		} else if (left === true) {
			$(".playerSprite, .playerSpriteRight").remove();
			$("#player").css({"left":"-=0.1px"});
		}
		$("#player").clearQueue();
	}

	function moveUp() {
		if (up === true && right === true) {
			$(".playerSprite, .playerSpriteUp, .playerSpriteLeft, .playerSpriteDown").remove();
			$("#player").css({"left":"+=0.1px", "top":"-=0.1px"});
		} else if (up === true && left === true) {
			$(".playerSprite, .playerSpriteRight, .playerSpriteUp, .playerSpriteDown").remove();
			$("#player").css({"left":"-=0.1px", "top":"-=0.1px"});
		} else if (up === true) {
			$(".playerSprite, .playerSpriteRight, .playerSpriteLeft, .playerSpriteDown").remove();
			$("#player").css({"top":"-=0.1px"});
		}
		$("#player").clearQueue();
	}

	function moveDown() {
		if (down === true && right === true) {
			$(".playerSprite, .playerSpriteRight, .playerSpriteLeft, .playerSpriteUp").remove();
			$("#player").css({"left":"+=0.1px", "top":"+=0.1px"});
		} else if (down === true && left === true) {
			$(".playerSprite, .playerSpriteRight, .playerSpriteLeft, .playerSpriteUp").remove();
			$("#player").css({"left":"-=0.1px", "top":"+=0.1px"});
		} else if (down === true) {
			$(".playerSprite, .playerSpriteRight, .playerSpriteLeft, .playerSpriteUp").remove();
			$("#player").css({"top":"+=0.1px"});
		}
		$("#player").clearQueue();
	}


})
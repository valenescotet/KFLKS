/*
author: Michael Grace
*/

function newGame2() {
  this.x = width / 2;
  this.y = height / 6;
  if (width > height) {
  this.w = width / 3;
  this.h = height / 8;
  } else {
  this.w = width / 2;
  this.h = height / 14
  }
  

  this.show = function() {
    noLoop();
    push();
    noStroke();
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    fill(0, 255, 0, 255);
    rect(this.x, this.y, this.w, this.h, this.w / 20);
    fill(255);
    textSize(areaAdjust / 10);
    // textFont("Impact, Charcoal, sans-serif");
	textFont("Arial");
    if (gates.length == 0){
      text("Reset", this.x, this.y)
    } else {
    text("Start", this.x, this.y)
    fill(255, 0, 255, 255);
    textSize(areaAdjust / 25);
    strokeWeight(0);
    stroke(0);
	// nostroke();
	textAlign(CENTER, TOP);
    text('Use "w a s d" or arrow keys \nor touch screen to play', this.x, height * 15 / 20);

    }
    pop(); // I don't think this does anything this pop is called elsewhere
  }

}


function soundButton() {
  this.x = width - height / 10;
  this.y = height - height / 10;
  this.r = height / 25;
  if (getCookie('sound') == '' || getCookie('sound') == 'on'){
    this.mode = 'on';
  } else {
    this.mode = 'off';
  }
  this.show = function() {

    if (this.mode == 'on') {
    image(soundOn, this.x - this.r, this.y - this.r,
      this.r * 2, this.r * 2);
  } else {
    image(soundOff, this.x - this.r, this.y - this.r,
      this.r * 2, this.r * 2);
  }

  }
  this.change = function() {
    if (this.mode == 'on') {
      this.mode = 'off';
      setCookie("sound", 'off', 365);
    } else {
      this.mode = 'on';
      setCookie("sound", 'on', 365);
    }

  }
}

// Getting rid of modeButton
// function modeButton() {
  // this.x = width - height / 10;
  // this.y = height / 10;
  // this.r = height / 6;
  // this.mode = 'Liz';

  // this.show = function() {
    // push();
    // textSize(height / 20);
    // textAlign(CENTER, CENTER);
    // if (this.mode == 'Liz') {
      // fill(0);
      // text(this.mode + ' mode', this.x, this.y);
      // if (dist(this.x, this.y, mouseX, mouseY) < this.r) {
      // fill(255, 0, 0, 150);
    // } else {
      // fill(255, 0, 0, 100);
    // }


    // } else {
      // fill(0);
      // text(this.mode + ' mode', this.x, this.y);
      // if (dist(this.x, this.y, mouseX, mouseY) < this.r) {
      // fill(0, 0, 255, 150);
      // } else {
      // fill(0, 0, 255, 100);
    // }
  // }
    // noStroke();
    // ellipse(this.x, this.y, this.r);
    // pop();
  // }

  // this.change = function() {
    // if (this.mode == 'Liz') {
      // this.mode = 'Joe';
    // } else {
      // this.mode = 'Liz';
    // }
  // }
// }

/*
author: Valentina Escotet
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
    fill(255,69,89);
    rect(this.x, this.y, this.w * 3 / 4 , this.h, this.w / 25);
    fill(255,218,222);
    textSize(areaAdjust / 15);
    // textFont("Impact, Charcoal, sans-serif");
	textFont("Helvetica, sans-serif");
    if (gates.length == 0){
      text("RESET", this.x, this.y)
    } else {
    text("PLAY", this.x, this.y)
    fill(95,0,10);
    textSize(areaAdjust / 30);
    //strokeWeight(0);
   // stroke(0);
	// nostroke();
	textAlign(CENTER, TOP);
   // text('Touch Screen or use Arrow Keys to help Alan!', this.x, height * 10 / 15);
   text('Touch Screen // Use Arrow Keys to help Alan!', this.x, height * 15 / 20)

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

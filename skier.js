/*
author: Michael Grace
*/

function Skier() {
  this.x = width / 2;
  this.y = height / 2;
  if (width > height) {
	  this.r = width / 20;
  } else {
	  this.r = height / 20;
  }
  
  this.px = 0;
  this.py = 0;
  this.speed = areaAdjust / 240;


  this.show = function() {
   // fill(255, 0, 0, 200);
   // ellipse(this.x, this.y, this.r * 2, this.r * 2)
	dirImg = directionGraphic(skier);
	image(dirImg, skier.x - skier.r, skier.y - skier.r, skier.r * 2, skier.r * 2);
    
  }

  this.moveLR = function(dir = 1) {
//    this.x += 1 * dir;
    this.px += this.speed * dir;
    this.px *= 0.94;
  }
  this.moveUD = function(dir = 1) {
//    this.y += 1 * dir;
    this.py += this.speed * dir;
    this.py *= 0.94;
  }

  this.collision = function(sandTrap) {
    var d = dist(this.x, this.y, ship.x, ship.y);
    if (d < this.r + planet.r) {
      return true;
    } else {
      return false;
    }
  }
}

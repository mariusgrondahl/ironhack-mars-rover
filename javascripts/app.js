// Rover Object Goes Here
// ======================
var rover = {
  direction: 'N';
}
// ======================
function turnLeft(rover){
  rover.direction = 'W';
  console.log("turnLeft was called!");
}

function turnRight(rover){
  rover.direction = 'W';
  console.log("turnRight was called!");
}

function moveForward(rover){
  rover.direction = 'W';
  console.log("moveForward was called")
}


switch (rover.direction) {
  case forward:
    // code
    break;
    
  case right:
    // code
    break;

  case backward:
    // code
    break;

  case left:
    // code
    break;

  default:
    // code
}
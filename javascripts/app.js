// Rover Object Goes Here
// ======================
let rover = {
  direction: "N"
}
// ======================
function turnLeft(){
  switch (rover.direction) {  
    case "W":
      rover.direction = "S";
      break;
  
    case "S":
      rover.direction = "E";
      break;
  
    case "E":
      rover.direction = "N";
      break;
  
    default:
      rover.direction = "W";
  }
  console.log(rover.direction);
}

function turnRight(){
  switch (rover.direction) {
    case "W":
      rover.direction = "N";
      break;
  
    case "S":
      rover.direction = "W";
      break;
  
    case "E":
      rover.direction = "S";
      break;
  
    default:
      rover.direction = "E";
  }
  console.log(rover.direction);
}

function moveForward(){
  switch (rover.direction) {  
    case "W":
      rover.direction = "W";
      break;
  
    case "S":
      rover.direction = "S";
      break;
  
    case "E":
      rover.direction = "E";
      break;
  
    default:
      rover.direction = "N";
  }
  console.log(rover.direction);
}



// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: ""
}

// ======================

function turnLeft(){
  switch (rover.direction) {  
    case "W":
      rover.direction = "S";
      rover.direction.push(rover.travelLog);
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
      rover.x--;
      console.log(rover.x, rover.y);
      break;
  
    case "S":
      rover.direction = "S";
      rover.y--;
      console.log(rover.x, rover.y);
      break;
  
    case "E":
      rover.direction = "E";
      rover.x++ 
      console.log(rover.x, rover.y);
      break;
  
    default:
      rover.direction = "N";
      rover.y++;
      console.log(rover.x, rover.y);
  }
  console.log(rover.direction);

}


function directionCommand(command) {  
  let commandWord = command ;

  let i = 0;
  for ( i = 0; i < commandWord.length; i++ ) {
    if (i == "f") {
      return moveForward();
    } if (i == "r") {
      return turnRight();
    } else {
      turnLeft();
    }
  }
}



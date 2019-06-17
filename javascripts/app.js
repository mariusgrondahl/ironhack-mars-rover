// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [0,0]
}

let tracking = rover.travelLog;

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
  
    case "N":
      rover.direction = "W";

  }
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
  
    case "N":
      rover.direction = "E";
  }
}

function moveForward(){
  switch (rover.direction) {  
    case "W":
      rover.direction = "W";
      rover.x--;
      console.log(rover.x, rover.y);
      tracking.push(rover.x, rover.y);
      break;
  
    case "S":
      rover.direction = "S";
      rover.y--;
      console.log(rover.x, rover.y);
      tracking.push(rover.x, rover.y);
      break;
  
    case "E":
      rover.direction = "E";
      rover.x++ 
      console.log(rover.x, rover.y);
      tracking.push(rover.x, rover.y);
      break;
  
    case "N":
      rover.direction = "N";
      rover.y++;
      console.log(rover.x, rover.y);
      tracking.push(rover.x, rover.y);
  }

}


function directionCommand(command) {  

  for (var y = 0; y < command.length; y++) {
    console.log(command.charAt(y));

    switch (command.charAt(y)) {  
      case "F":
        moveForward();
        break;
    
      case "R":
        turnRight();
        break;
    
      case "L":
        turnLeft();
        break;
    
    }
  }
}



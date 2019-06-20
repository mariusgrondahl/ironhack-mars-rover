// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [0,0]
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
      rover.x--;
      console.log(rover.x, rover.y);
      rover.travelLog.push(rover.x, rover.y);
      break;
  
    case "S":
      rover.y--;
      console.log(rover.x, rover.y);
      rover.travelLog.push(rover.x, rover.y);
      break;
  
    case "E":
      rover.x++ 
      console.log(rover.x, rover.y);
      rover.travelLog.push(rover.x, rover.y);
      break;
  
    case "N":
      rover.y++;
      console.log(rover.x, rover.y);
      rover.travelLog.push(rover.x, rover.y);
  }

}


function directionCommand(command) {  

  for (var i = 0; i < command.length; i++) {
    console.log(command.charAt(i));

    switch (command.charAt() {  
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



console.log("Program instructions, use the roverMove function for moving the Mars Rover with the comands: l turn left, r turn right, f move forward and b move backwards. ¡Happy exploring!")
// Rover Object Goes Here
var roverObject = {
  direction : "N",
  x : 0,
  y : 0,
  travelLog : []
}
// ======================
// ======================
function turnLeft(rover){
  switch (roverObject.direction) {
    case "N" :
    roverObject.direction = "W"
    break;
    case "W" :
    roverObject.direction = "S"
    break;
    case "S" : 
    roverObject.direction = "E"
    break;
    case "E" :
    roverObject.direction = "N"
    break;
  }
  console.log("turnLeft was called!");
  console.log("Rover is now facing " + roverObject.direction);
}

function turnRight(rover){
  switch (roverObject.direction) {
    case "N" :
    roverObject.direction = "E"
    break;
    case "E" :
    roverObject.direction = "S"
    break;
    case "S" : 
    roverObject.direction = "W"
    break;
    case "W" :
    roverObject.direction = "N"
    break;
  }
  console.log("turnRight was called!");
  console.log("Rover is now facing " + roverObject.direction);
}

function moveForward(rover){
  switch (roverObject.direction) {
    case "W" :
    roverObject.x -=1
    break;
    case "N" :
    roverObject.y -=1
    break;
    case "S" :
    roverObject.y +=1
    break;
    case "E" :
    roverObject.x +=1
    break;
 }
 // Bonus | Enforce Boundaries 
 if (roverObject.x>9 || roverObject.y>9 || roverObject.x<0 || roverObject.y<0){
   return;
 } else {
  roverObject.travelLog.push("x=" + roverObject.x);
  roverObject.travelLog.push("y=" + roverObject.y);
  console.log("moveForward was called");
  console.log("Rover is now in the coordinates" + " x=" + roverObject.x + " y=" + roverObject.y);
 }
}
// Bonus | Moving Backwards
function moveBackwards(rover){
  switch (roverObject.direction) {
    case "W" :
    roverObject.x +=1
    break;
    case "N" :
    roverObject.y +=1
    break;
    case "S" :
    roverObject.y -=1
    break;
    case "E" :
    roverObject.x -=1
    break;
 }
 // Bonus | Enforce Boundaries 
 if (roverObject.x>9 || roverObject.y>9 || roverObject.x<0 || roverObject.y<0){
   return;
 } else {
  roverObject.travelLog.push("x=" + roverObject.x);
  roverObject.travelLog.push("y=" + roverObject.y);
  console.log("moveBackwards was called");
  console.log("Rover is now in the coordinates" + " x=" + roverObject.x + " y=" + roverObject.y);
 }
}

function roverMove(directions){
  // Bonus | Validate Inputs
  var invalidImput = 0
  for (var i = 0; i < directions.length; i++){
    if (directions[i] === "l" || directions[i] === "r" || directions[i] === "f" || directions[i] === "b")
      invalidImput +=1
    }
    if (invalidImput === directions.length){
  for (var i = 0; i < directions.length; i++){
  switch (directions[i]) {
    case "l" :
    turnLeft()
    break;
    case "r" :
    turnRight()
    break;
    case "f" :
    moveForward()
    break;
    case "b" :
    moveBackwards()
    break;
  }
  // Bonus | Enforce Boundaries 
if (roverObject.x>9){
  roverObject.x -=1
  console.log("The Mars Rover can\'t pass the edge of the map")
  console.log("Mars rover travel log " + roverObject.travelLog);
  return;
}
  else if (roverObject.y>9){
    roverObject.y -=1
    console.log("The Mars Rover can\'t pass the edge of the map")
    console.log("Mars rover travel log " + roverObject.travelLog);
    return;
  }
  else if (roverObject.x<0){
    roverObject.x +=1
    console.log("The Mars Rover can\'t pass the edge of the map")
    console.log("Mars rover travel log " + roverObject.travelLog);
    return;
  }
  else if (roverObject.y<0){
    roverObject.y +=1
    console.log("The Mars Rover can\'t pass the edge of the map")
    console.log("Mars rover travel log " + roverObject.travelLog);
    return;
  }
  console.log("Mars rover travel log " + roverObject.travelLog);
}
 }
 else {
   console.log("Invalid Imput, the only valid letters are r, l, b, f");
 }
 invalidImput=0;
}

 





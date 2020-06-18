/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/
function main(){
  beeperLastChallenge();
}

function beeperLastChallenge(){
   beepWalk();
   beepWalk();
   putBeeper();
   walkUp();
   beepWalk();
   putBeeper();
   walkUp();
   beepWalk();
   beepWalk();
   putBeeper();
   walkUp();
   beepWalk();
   putBeeper();
   walkUp();
   beepWalk();
   beepWalk();
   putBeeper();
}

function beepWalk(){
   putBeeper();
   move();
   move();
}

function walkUp(){
   turnLeft();
   move();
   turnLeft();
   move();
   move();
   move();
   turnLeft();
   turnLeft();
}
function beeperDig5(){
   beeperDig1();
   beeperDig1();
   beeperDig1();
   beeperDig1();
   putBeeper();
}

function beeperDig1(){
   putBeeper();
   move();
   turnLeft();
   move();
   turnRight();
}

function diagonal(){
   move();
   move();
   move();
   move();
   turnLeft();
   move();
   move();
   move();
   move();
}

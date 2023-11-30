//Number 1

function sumNumbers(firstNum, secondNum){
  subTotal=firstNum+secondNum;
  return subTotal;
}
console.log(sumNumbers(3,2));
console.log(sumNumbers(-3,-6));
console.log(sumNumbers(7,3));


//Number 2

function minToSec(minutes){
  seconds= minutes*60;
  return seconds;
}

console.log(minToSec(5));
console.log(minToSec(3));
console.log(minToSec(2));


//Number 3

function nextNumbers(givenNum){
 givenNum++;
  return givenNum;
}

console.log(nextNumbers(0));
console.log(nextNumbers(9));
console.log(nextNumbers(-3));

//Number 4

function triArea(base,height){
  triangleArea=0.5*base*height;
  return triangleArea;
}

console.log(triArea(3,2));
console.log(triArea(7,4));
console.log(triArea(10,10));


// Number 5

function getFirstValue(givenArray){
  firstValue=givenArray[0];
  return firstValue;
}

console.log(getFirstValue([99,5,6,7]))


//Number 6

function calcAge(ageYears){
  ageDays=ageYears*365;
  return ageDays;
}

console.log(calcAge(20));


// Number 7
function circuitPower(voltages,currents){
  powerOutput=voltages*currents;
  return powerOutput;
}

console.log(circuitPower(230,10));


// Number 8
function nextEdge(sideOne, sideTwo){
  otherEdge=sideOne+sideTwo-1;
  return otherEdge;
}

console.log(nextEdge(5,7));

// Number 9

function findRemainder(divisible, divisor){
  remainders=divisible%divisor;
  return remainders;
}

console.log (findRemainder(-9,45));


// Number 10

function giveMeSomething(stringValue){
  ourString= "something" +" " +stringValue;
  return ourString;
}

console.log (giveMeSomething("what is your Name"));

// Number 11
function squared(inputNum){
  squaredNumber=inputNum*inputNum;
  return squaredNumber;
}

console.log(squared(6));

// Number 12

function lessThanOrEqual(theNumber){
  if (theNumber<=0){
    return true;
  }
  else{
    return false;
  }
}

console.log(lessThanOrEqual(0));
console.log(lessThanOrEqual(-5));
console.log(lessThanOrEqual(11));

// Number 13

function sumPolygon(angles){
  if (angles>2){
    anglePolygon=(angles-2)*180;
    return anglePolygon;
  }
  else{
    return "Please enter a value more than 2"
  }
}

console.log(sumPolygon(1));
console.log(sumPolygon(6));


// Number 14
function nameString(name){
  result=name+"Coder";
  return result;
}

console.log(nameString("mithu"));


// Number 15
function lessThan100(numOne, numTwo){
  if(numOne+numTwo<=100){
    return true;
  }
  else{
    return false;
  }
}

console.log(lessThan100(78,77));
console.log(lessThan100(5,77));
/*
FizzBuzz:
Write a program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the
number and for the multiples of five print “Buzz”
For numbers which are multiples of both three and
five print “FizzBuzz”.
*/
function FizzBuzz() {
  for (i = 1; i < 16; i++) {
    if (!(i % 5) && !(i % 3)) {
      console.log("FizzBuzz");
    }
    else if (!(i % 3)) {
      console.log("Fizz");
    }
    else if (!(i % 5)) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  }
}


/*
Create the next triangle
#
##
###
####
#####
######
#######
*/
for (var i = "#"; i.length < 8 ; i += "#") {
  console.log(i);
}

// A closure example
function sumador(x) {
  return function (y) {
    return x + y;
  }
}
suma2 = sumador(2);
console.log(suma2(7));

// add(1,3,4) should equal to 8
function add(...args) {
  var sum = 0;
  for (let value of args) {
    sum += value;
  }
  return sum ;
}

add(1,3,4);

// Make this work:  [1,2,3,4,5].duplicate();
// [1,2,3,4,5,1,2,3,4,5]
Array.prototype.duplicate = function () {
  return this.concat(this.slice(0));
};

// Explain Bubbling
<style>
  body * {
    margin: 10px;
    border: 1px solid pink;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>

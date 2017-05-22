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

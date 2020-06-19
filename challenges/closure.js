// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation:

// Because the nested function is a child of parent function(myFunction) so it has access to that scope. If it weren't nested it wouldn't
// have the same permissions that it does.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

const summation = function (value) {
  let count = 0; /// assigning count to value 0
  for (let i = 0; i < value + 1; i++) {
    // creating loop here
    count = count + i;
  }
  return count; // returnin the count
};

console.log(summation(4)); // invoking here for summation

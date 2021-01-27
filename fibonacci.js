//Iterative Method, Better Time Complexity with O(n), executed using NodeJS
function fibonacci(numTerm)
{
    //Assigning Array elements for 0 and 1
    var numArray = [1, 1];
    var i = 2;

    //If numTerm is less than 1 or  1, it will skip the for loop sequence
    for ( i; i <= numTerm; i++)
    {
        numArray[i] = numArray[i-1] + numArray[i-2];
    }
    //Returns the element in the array of the numTerm
    return numArray[numTerm];
}

var fibonacciResult = fibonacci(5);
console.log(fibonacciResult);

//Iterative Method, Better Time Complexity with O(n), executed using NodeJS
function fibonacci(numTerm)
{
    //Assigning Array elements for 0 and 1
    var numArray = [0, 1];
    var i = 2;

    for ( i; i <= numTerm; i++)
    {
        numArray[i] = numArray[i-1] + numArray[i-2];
    }
    //Returns the last element in the array, aka the term
    return numArray[numTerm];
}

console.log(fibonacci(7));

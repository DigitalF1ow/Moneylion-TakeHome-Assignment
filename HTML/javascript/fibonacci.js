//Fibonacci Sequence Getting Output
function getOutput()
{
    //Initialize Variables
    var numTerms = parseInt(document.getElementById("terms").value);
    var fibonacciOutput = 0; 

    //Checking if numTerms can't be defined aka Not a Number
    if(isNaN(numTerms) == true)
    {
        alert("Please enter a number.");
    }
    else
    {
        fibonacciOutput = fibonacci(numTerms);
        document.getElementById("output").innerHTML = fibonacciOutput;
    }
}

//Iterative Method, Better Time Complexity with O(n)
function fibonacci(numTerm)
{
    //Assigning Array elements for the first two terms
    var numArray = [1, 1];

    for (var i = 2; i <= numTerm; i++)
    {
        numArray[i] = numArray[i-1] + numArray[i-2];
    }
    //Returns the last element in the array, aka the term
    return numArray[numTerm];
}
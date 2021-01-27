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
        fibonacciOutput = fibonacciNo2(numTerms);
        document.getElementById("output").innerHTML = fibonacciOutput;
    }
}

//Can work, but time complexity is not that good, O(log n^2)
function fibonacci(numTerm)
{
    //If the number of terms is less or equal to 1
    if (numTerm <= 1) 
    {
        return numTerm;
    }
    // Will be calculated, numTerm = 2, (2 - 1) + (2 - 2) = 1  
    else 
    {
        return fibonacci(numTerm - 1) + fibonacci(numTerm - 2);
    }
}

//Iterative Method, Better Time Complexity with O(n)
function fibonacciNo2(numTerm)
{
    //Assigning Array elements for 0 and 1
    var numArray = [];
    numArray[0] = 0;
    numArray[1] = 1;

    for (var i = 2; i <= numTerm; i++)
    {
        numArray[i] = numArray[i-1] + numArray[i-2];
    }
    //Returns the last element in the array, aka the term
    return numArray[numTerm];
}
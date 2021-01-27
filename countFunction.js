//Calculating the total of names for each color, executed using NodeJS
function countingFunc()
{
    //Initialize the array of objects and variables
    let peopleColor = [
        {
        'name': 'John',
        'color': 'blue'
        },
        {
        'name': 'Danny',
        'color': 'red'
        },
        {
        'name': 'James',
        'color': 'red'
        },
        {
        'name': 'Katty',
        'color': 'green'
        },
        {
        'name': 'Logan',
        'color': 'blue'
        },
        {
        'name': 'Noah',
        'color': 'red'
        },
        {
        'name': 'Benjamin',
        'color': 'red'
        },
        {
        'name': 'William',
        'color': 'green'
        },
        {
        'name': 'Elijah',
        'color': 'blue'
        },
        {
        'name': 'Ethan',
        'color': 'green'
        }
    ];
    
    /*
    numCount = total number of each color counted
    personColor = person who has the color
    */
    let countColor = [
        {
        'colorName': 'red',
        'numCount' : 0,
        'personColor': []
        },
        {
        'colorName': 'green',
        'numCount' : 0,
        'personColor': []
        },
        {
        'colorName': 'blue',
        'numCount' : 0,
        'personColor': []
        }
    ];

    //Starts at 0 for both variables
    var count, innerCount;

    //Nested loop, if the person's color is the same as colorName, increment the number
    for (count = 0; count < countColor.length; count++)
    {
        for(innerCount = 0; innerCount < peopleColor.length; innerCount++)
        {
            if (countColor[count].colorName == peopleColor[innerCount].color)
            {
                countColor[count].numCount++;
                countColor[count].personColor.push(peopleColor[innerCount].name);
            }
        }
    }
    for (count = 0; count < countColor.length; count++) 
    {
        console.log(countColor[count]);
    }
}
countingFunc();
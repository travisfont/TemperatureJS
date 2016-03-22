// Bubble Sorting 


function swap(array, i, j)
{
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function bubbleSort(array)
{
    var swapped;
    
    do {
        swapped = false;
        
        for (var i = 0; i < array.length; i++)
        {
            if (array[i] && array[i + 1] && array[i] > array[i + 1])
            {
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    }
    while(swapped);
    
    return array;
}

/* array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(bubbleSort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
*/
var sort =
{
    // Bubble Sorting
    bubble: function (array)
    {
        var swapped;
        
        do {
            swapped = false;
            
            for (var i = 0; i < array.length; i++)
            {
                if (array[i] && array[i + 1] && array[i] > array[i + 1])
                {
                    this._swap(array, i, i + 1);
                    swapped = true;
                }
            }
        } while(swapped);
        
        return array;
    },
    
    // Shell Sorting
    shell: function (array)
    {
        for (var g = 0; g < this._gaps.length; g++)
        {
            var gap = this._gaps[g];
            
            for (var i = gap; i < array.length; i++)
            {
                var temp = array[i];
                
                for (var j = i; j >= gap && array[j - gap] > temp; j -= gap)
                {
                    array[j] = array[j - gap];
                }
                
                array[j] = temp;
            }
        }
        
        return array;
    },
    
    _gaps = [701, 301, 132, 57, 23, 10, 4, 1],
    
    _swap: function (array, i, j)
    {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};


/* array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

console.log(sort.bubble(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

console.log(sort.shell(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
*/
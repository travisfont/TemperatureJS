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
    
    // Quick Sorting
    quick: function (array)
    {
        if (array.length < 2)
        {
            return array;
        }

        var pivot   = array[0];
        var lesser  = [];
        var greater = [];

        for (var i = 1; i < array.length; i++)
        {
            if (array[i] < pivot)
            {
                lesser.push(array[i]);
            }
            else
            {
                greater.push(array[i]);
            }
        }

        return this.quick(lesser).concat(pivot, this.quick(greater));
    },
    
    selection: function (array)
    {
        for (var i = 0; i < array.length; i++)
        {
            var min = i;
            
            for (var j = i + 1; j < array.length; j++)
            {
                if (array[j] < array[min])
                {
                    min = j;
                }
            }
            
            if (i !== min)
            {
                swap(array, i, min);
            }
        }
        
        return array;
    },
    
    insertion: function (array)
    {
        for (var i = 0; i < array.length; i++)
        {
            var temp = array[i];
            var j    = i - 1;
            
            while (j >= 0 && array[j] > temp)
            {
                array[j + 1] = array[j];
                j--;
            }
            
            array[j + 1] = temp;
        }
        
        return array;
    }
    
    // Merge Sorting: top-down implementation
    merge: function (array)
    {
        if (array.length < 2)
        {
            return array;
        }

        var middle = Math.floor(array.length / 2);
        var left   = array.slice(0, middle);
        var right  = array.slice(middle);

        return this._merge_topdown(this.merge(left), this.merge(right));
    },
    
    _merge_topdown: function (left, right)
    {
        var array = [];

        while (left.length && right.length)
        {
            if (left[0] < right[0])
            {
                array.push(left.shift());
            }
            else
            {
                array.push(right.shift());
            }
        }

        return array.concat(left.slice()).concat(right.slice());
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

console.log(sort.quick(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

console.log(sort.merge(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

console.log(sort.insertion(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

console.log(sort.selection(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
*/
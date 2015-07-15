var arr = ['apple','orange','pear'];


// string (keyword), array to search
function in_array(search, arr)
{
    if(arr.indexOf(search) != -1)
    {
        return true;
    }
    else
    {
        return false;
    }
}
// returns true if array is found
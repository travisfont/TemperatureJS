function explode(string, separator, limit)
{
    var arr = string.split(separator);
    if (limit)
    {
        arr.push(arr.splice(limit-1, (arr.length-(limit-1))).join(separator));
    }
    
    return arr;
}
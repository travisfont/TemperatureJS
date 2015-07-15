function isNaNValue (val)
{
    return val !== val;
}

console.log(isNaNValue(NaN));
// => true
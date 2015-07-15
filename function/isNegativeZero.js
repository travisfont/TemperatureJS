function isNegativeZero(val)
{
    if (val !== 0) {
        return false;
    }

    var thisInfinity = 1 / val;

    return (thisInfinity < 0);
}

isNegativeZero(-0);
// => true
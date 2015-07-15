var constant = function(val)
{
    return function()
    {
        return val;
    }
}

/*
 a = constant(10);
 a(); // 10
 b = constant(20);
 b(); // 20
 */
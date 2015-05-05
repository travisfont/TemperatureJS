function currentTimestamp(miliseconds)
{
    if (!Date.now)
    {
        Date.now = function()
        {
            return new Date().getTime();
        }
    }

    if (!miliseconds)
    {
        return Math.floor(Date.now() / 1000);
    }
    else
    {
        return Date.now();
    }
}

  

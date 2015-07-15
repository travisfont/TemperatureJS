var TypeOf = {

    isFunction: function (obj)
    {
        if (typeof obj === 'function')
        {
            return true;
        }
        else
        {
            return false;
        }
    }
};


// Example:
if (TypeOf.isFunction(windows['test'])) {
    // ....
}
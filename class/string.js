var string =
{
    generate_password : function ()
    {
        var length = 8,
            charset = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i)
        {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    },
    
    strip_non_numeric : function (string)
    {
        return string.replace(/\D/g,'');
    },
    
    // displays only floats (decimal) numbers
    // ideal for stripping string for currency
    decimal : function (string)
    {
        return string.replace(/[^\d.-]/g, '');
    }

    /*
     *	ADVANCED STRING OPERATIONS;

    String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g,"");
    }
    String.prototype.ltrim = function() {
        return this.replace(/^\s+/,"");
    }
    String.prototype.rtrim = function() {
        return this.replace(/\s+$/,"");
    }
    String.prototype.contains = function(it) {
        return this.indexOf(it) != -1;
    }
     */
}
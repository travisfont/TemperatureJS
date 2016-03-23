var string =
{
    generate_password : function ()
    {
        var length  = 8,
            charset = 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            value   = '';
            
        for (var i = 0, n = charset.length; i < length; ++i)
        {
            value += charset.charAt(Math.floor(Math.random() * n));
        }
        
        return value;
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
    },
    
    reverse: function (string)
    {
        return (string === '') ? '' : string.split('').reverse().join('');
    },

    trim = function(string)
    {
        return (string === '') ? '' : string.replace(/^\s+|\s+$/g,"");
    },
    
    ltrim = function(string)
    {
        return (string === '') ? '' : string.replace(/^\s+/,"");
    },
    
    rtrim = function(string)
    {
        return (string === '') ? '' : string.replace(/\s+$/,"");
    },
    
    contains = function(string)
    {
        return (string === '') ? '' : string.indexOf(string) != -1;
    }
}
// extended string library

var ExtString = {

    /**
     * use this to make a Base64 encoded string URL friendly, 
     * i.e. '+' and '/' are replaced with '-' and '_' also any trailing '=' 
     * characters are removed
     *
     * @param {String} str the encoded string
     * @returns {String} the URL friendly encoded String
     */
    encodeBase64URL: function(str)
    {
        return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
    },
    
    /**
     * Use this to recreate a Base64 encoded string that was made URL friendly 
     * '-' and '_' are replaced with '+' and '/' and also it is padded with '+'
     *
     * @param {String} str the encoded string
     * @returns {String} the URL friendly encoded String
     */
     decodeBase64URL: function(str)
     {
        str = (str + '===').slice(0, str.length + (str.length % 4));
        
        return str.replace(/-/g, '+').replace(/_/g, '/');
    }
    
};

/*
// Example:
// This Base64 encoded string will be made URL friendly

var encoded = 'VGhpcyBpcyBhbiBhd2Vzb21lIHNjcmlwdA==';

var url_encoded = ExtString.encodeBase64URL(encoded);
var url_decoded = ExtString.decodeBase64URL(url_encoded);

document.write(encoded + '<br />');
document.write(url_encoded + '<br />');
document.write(url_decoded + '<hr />');

// "Test"
document.write(url_decoded === encoded);
*/

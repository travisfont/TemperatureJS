var simple =
{
    ajax : function (url, method, data, async)
    {
        method = typeof method !== 'undefined' ? method : 'GET';
        async = typeof async !== 'undefined' ? async : false;

        if (window.XMLHttpRequest) {
            var xhReq = new XMLHttpRequest();
        }
        else {
            var xhReq = new ActiveXObject("Microsoft.XMLHTTP");
        }

        if(method == 'POST') {
            xhReq.open(method, url, async);
            xhReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhReq.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhReq.send(data);
        }
        else {
            if(typeof data !== 'undefined' && data !== null) {
                url = url+'?'+data;
            }
            xhReq.open(method, url, async);
            xhReq.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhReq.send(null);
        }
        return true;
        //var serverResponse = xhReq.responseText;
        //alert(serverResponse);
    },

    utf8_decode : function (string)
    {
        return decodeURIComponent(escape(string));
    },

    utf8_encode : function (string)
    {
        return unescape(encodeURIComponent(string));
    }
}
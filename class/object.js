var Object =
{
    toString : function (object)
    {
        var query = [];
        for (var key in object) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(object[key]));
        }

        return query.join('&');
    }
}
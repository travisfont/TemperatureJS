function searchJSON()
{
    var rep = {'?':'{"','=':'":"','&':'","'};
    var   s = document.location.search.replace(/[\?\=\&]/g, function (r)
    {
        return rep[r];
    });

    return JSON.parse(s.length ? s+'"}' : "{}");
}
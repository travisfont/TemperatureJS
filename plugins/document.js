document.getElementsByAttribute = Element.prototype.getElementsByAttribute = function(attr)
{
    var matches = [],
        elements = this.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        if ( elements[i].getAttribute(attr) ) matches.push(elements[i]);
    }
    return matches;
};s

// <p data-p="abc123">data</p>
// console.log(document.getElementsByAttribute('data-p'))[0];
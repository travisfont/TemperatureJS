function stripTags()
{
    return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, '');
}

/*
Examples

'a <a href="#">link</a>'.stripTags();
// -> 'a link'

'a <a href="#">link</a><script>alert("hello world!");</script>'.stripTags();
// -> 'a linkalert("hello world!");'

'a <a href="#">link</a><script>alert("hello world!");</script>'.stripScripts().stripTags();
// -> 'a link'
*/
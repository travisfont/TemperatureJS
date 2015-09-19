function strip_html_lists(string)
{
    return string.replace(/\s*<ul[^>]*>[\S\s]*?<\/ul>\s*/, '');
}
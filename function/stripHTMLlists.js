function stripHTMLlists(string)
{
    return string.replace(/\s*<ul[^>]*>[\S\s]*?<\/ul>\s*/, '');
}


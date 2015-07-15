function include (filename)
{
    var d = this.window.document;
    var isXML = d.documentElement.nodeName !== 'HTML' || !d.write; // Latter is for silly comprehensiveness
    var js = d.createElementNS && isXML ? d.createElementNS('http://www.w3.org/1999/xhtml', 'script') : d.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', filename);
    js.setAttribute('defer', 'defer');
    d.getElementsByTagNameNS && isXML ? (d.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'head')[0] ? d.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'head')[0].appendChild(js) : d.documentElement.insertBefore(js, d.documentElement.firstChild) // in case of XUL
        ) : d.getElementsByTagName('head')[0].appendChild(js);
    // save include state for reference by include_once
    var cur_file = {};
    cur_file[this.window.location.href] = 1;

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    // END REDUNDANT
    if (!this.php_js.includes) {
        this.php_js.includes = cur_file;
    }
    if (!this.php_js.includes[filename]) {
        this.php_js.includes[filename] = 1;
    } else {
        this.php_js.includes[filename]++;
    }

    return this.php_js.includes[filename];
}
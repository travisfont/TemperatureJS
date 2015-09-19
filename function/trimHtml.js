/**
 * Cutting a HTML String without breaking HTML Tags
 * @param  {String} html
 * @param  {Object} options
 * @return {Object}
 */
 
function trimHtml(html, options)
{
    options = options || {};

    var limit = options.limit || 100,
        preserveTags = (typeof options.preserveTags !== 'undefined') ? options.preserveTags : true,
        suffix = options.suffix || '...',
        moreLink = options.moreLink || '';

    var arr = html.replace(/</g, "\n<")
        .replace(/>/g, ">\n")
        .replace(/\n\n/g, "\n")
        .replace(/^\n/g, "")
        .replace(/\n$/g, "")
        .split("\n");

    var sum = 0,
        row, cut, add,
        tagMatch,
        tagName,
        tagStack = [],
        more = false;

    for (var i = 0; i < arr.length; i++)
    {

        row = arr[i];
        // count multiple spaces as one character
        rowCut = row.replace(/[ ]+/g, ' ');

        if (!row.length)
        {
            continue;
        }

        if (row[0] !== "<")
        {

            if (sum >= limit)
            {
                row = "";
            }
            else if ((sum + rowCut.length) >= limit)
            {
                cut = limit - sum;

                if (row[cut - 1] === ' ')
                {
                    while(cut)
                    {
                        cut -= 1;
                        if (row[cut - 1] !== ' ')
                        {
                            break;
                        }
                    }
                }
                else
                {
                    add = row.substring(cut).split('').indexOf(' ');

                    if (add !== -1)
                    {
                        cut += add;
                    }
                    else
                    {
                        cut = row.length;
                    }
                }

                row = row.substring(0, cut) + suffix;

                if (moreLink)
                {
                    row += '<a href="' + moreLink + '" style="display:inline">»</a>';
                }

                sum  = limit;
                more = true;
            }
            else
            {
                sum += rowCut.length;
            }
        }
        else if (!preserveTags)
        {
            row = '';
        }
        else if (sum >= limit)
        {

            tagMatch = row.match(/[a-zA-Z]+/);
            tagName = tagMatch ? tagMatch[0] : '';

            if (tagName)
            {
                if (row.substring(0, 2) !== '</')
                {

                    tagStack.push(tagName);
                    row = '';
                }
                else
                {

                    while (tagStack[tagStack.length - 1] !== tagName && tagStack.length)
                    {
                        tagStack.pop();
                    }

                    if (tagStack.length)
                    {
                        row = '';
                    }

                    tagStack.pop();
                }
            }
            else
            {
                row = '';
            }
        }

        arr[i] = row;
    }

    return {
        html: arr.join("\n").replace(/\n/g, ""),
        more: more
    };
}

/*
{
    limit:
    Char limit (default 100)

    preserveTags:
    Strip HTML tags (default false)

    suffix:
    string that will be appended at the end

    moreLink:
    link to full content
}

var html = '<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p><p>Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
ex ea commodo consequat. </p><p>Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p><p>Excepteur
sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
anim id est laborum.</p></div>';

var trim = trimHtml(html, { limit: 200 });

// returns object
{
   html: '<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p><p>Ut
   enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...
   </p></div>',
   more: true // indicates if limit is reached
}
*/
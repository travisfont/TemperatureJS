class XMLHttp
{
    static get(url)
    {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.onload = function ()
        {
            if (xhr.status === 200)
            {
                alert('User\'s name is ' + xhr.responseText);
            }
            
            if (xhr.status !== 200)
            {
                alert('Request failed.  Returned status of ' + xhr.status);
            }
         };
         xhr.send()
    }

    static post(url, contentType)
    {
        contentType = contentType || 'application/x-www-form-urlencoded';
        
        let newName = 'John Smith',
            xhr     = new XMLHttpRequest();

        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', contentType);
        xhr.onload = function ()
        {
            if (xhr.status === 200 && xhr.responseText !== newName)
            {
                alert('Something went wrong.  Name is now ' + xhr.responseText);
            }
            
            if (xhr.status !== 200)
            {
                alert('Request failed.  Returned status of ' + xhr.status);
            }
        };
        xhr.send(encodeURI('name=' + newName));
    }

    /**
     * sends a request to the specified url from a form
     * this will change the window location
     *
     * @param {string} path the path to send the post request to
     * @param {object} params the parameters to add to the url
     * @param {string} [method=post] the method to use on the form
     */
    static submit(path, params, method)
    {
        // set method to post by default if not specified
        method = method || 'post';

        // the rest of this code assumes you are not using a library
        // it can be made less wordy if you use one
        let form = document.createElement('form');
            form.setAttribute('method', method);
            form.setAttribute('action', path);

        for(let key in params)
        {
            if(params.hasOwnProperty(key))
            {
                let hiddenField = document.createElement('input');
                    hiddenField.setAttribute('type', 'hidden');
                    hiddenField.setAttribute('name', key);
                    hiddenField.setAttribute('value', params[key]);

                form.appendChild(hiddenField);
            }
        }

        document.body.appendChild(form);
        form.submit();
    }
}

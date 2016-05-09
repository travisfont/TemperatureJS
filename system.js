(function ()
{
    // A hash to store our routes:
    var routes = {};

    // An array of the current route's events:
    var events = [];

    // The element where the routes are rendered:
    var el = null;

    // Context functions shared between all controllers:
    var ctx = {
        on: function (selector, evt, handler)
        {
            events.push([selector, evt, handler]);
        },
        refresh: function (listeners)
        {
            listeners.forEach(function (fn)
            {
                fn();
            });
        }
    };

    // Defines a route:
    function route (path, templateId, controller)
    {
        if (typeof templateId === 'function')
        {
            controller = templateId;
            templateId = null;
        }

        var listeners = [];

        Object.defineProperty(controller.prototype, '$on', {value: ctx.on});
        Object.defineProperty(controller.prototype, '$refresh', {value: ctx.refresh.bind(undefined, listeners)});

        routes[path] = {templateId: templateId, controller: controller, onRefresh: listeners.push.bind(listeners)};
    }

    function forEachEventElement(fnName)
    {
        for (var i = 0, len = events.length; i < len; i++)
        {
            var els = el.querySelectorAll(events[i][0]);

            for (var j = 0, elsLen = els.length; j < elsLen; j++)
            {
                els[j][fnName].apply(els[j], events[i].slice(1));
            }
        }
    }

    function addEventListeners()
    {
        forEachEventElement('addEventListener');
    }

    function removeEventListeners()
    {
        forEachEventElement('removeEventListener');
    }

    function router ()
    {
        // Lazy load view element:
        el = el || document.getElementById('view');

        // Remove current event listeners:
        removeEventListeners();

        // Clear events, to prepare for next render:
        events = [];

        // Current route url (getting rid of '#' in hash as well):
        var url = location.hash.slice(1) || '/';

        // Get route by url or fallback if it does not exist:
        var route = routes[url] || routes['*'];

        // Do we have a controller:
        if (route && route.controller)
        {
            var ctrl = new route.controller();

            if (!el || !route.templateId)
            {
                // If there's nothing to render, abort:
                return;
            }

            // Listen on route refreshes:
            route.onRefresh(function ()
            {
                removeEventListeners();

                // Render route template with John Resig's template engine:
                el.innerHTML = tmpl(route.templateId, ctrl);

                addEventListeners();
            });

            // Trigger the first refresh:
            ctrl.$refresh();
        }
    }

    // Listen on hash change:
    this.addEventListener('hashchange', router);

    // Listen on page load:
    this.addEventListener('load', router);

    // Expose the route register function:
    this.route = route;
})();

function load(url)
{
    var ajax = new XMLHttpRequest();

    ajax.open('GET', url, false);
    ajax.onreadystatechange = function ()
    {
        var script = ajax.response || ajax.responseText;

        if (ajax.readyState === 4)
        {
            switch (ajax.status)
            {
                case 200:
                    eval.apply(window, [script]);
                    if (typeof DISPLAY_LIBRARY_LOAD_CONSOLE !== 'undefined' && DISPLAY_LIBRARY_LOAD_CONSOLE === true)
                    {
                        console.log("library loaded: ", url);
                    }
                    break;
                default:
                    console.log("ERROR: library not loaded: ", url);
            }
        }
    };

    ajax.send(null);
}

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var   head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type  = 'text/javascript';
    script.src   = url;
    script.async = true;
    //script.defer  = true;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;


    // Fire the loading
    head.appendChild(script);
    // to add after the html
    // document.documentElement.appendChild(script);
}

var TJS = TJS || {};
var bootloaders = [];

TJS.import = function (libary, version)
{
    switch (libary)
    {
        case 'Strings':
            lib = LIBRARY_PATH + 'class/string.js';
            break;
        case 'Ajax':
            lib = LIBRARY_PATH + 'class/ajax.js';
            break;
        case 'Browser':
            lib = LIBRARY_PATH + 'class/browser.js';
            break;
        case 'jQuery':
            lib = LIBRARY_PATH + 'plugins/jquery.js';

    }

    bootloaders.push(lib);
    load(lib);
};

TJS.services = function ()
{
    for (var i = 0; i < arguments.length; i++)
    {
        // str replace and remove 'http:, https:, //
        load('//'+arguments[i]);
    }
}

TJS.include = function ()
{
    for (var i = 0; i < arguments.length; i++)
    {
        // str replace and remove 'http:, https:, //
        load('//'+window.location.hostname+'/core/'+arguments[i]+'.js');
    }
}

var dom = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
    dom.documentElement.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:lang', 'en');

//var body = dom.createElement("body");
var body = dom.createElementNS('http://www.w3.org/1999/xhtml', 'body');
           dom.documentElement.appendChild(body);

if (bootloaders.length > 0)
{
    for (i = 0; i < bootloaders.length; i++)
    {
        load(bootloaders[i]);
    }
}

// set timeout is needed because document.body is created after the current continuation finishes
setTimeout(function ()
{
    loadScript('initizer.js');
    loadScript('routes.js', main);
}, 0);

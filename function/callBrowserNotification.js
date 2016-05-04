function callBrowserNotification(title, icon, description, url, onClick, onClose)
{
        if (!Notification)
        {
           console.log('Desktop notifications not supported in your browser..'); 
           return;
         }
         
        // Grant permission from user 
        if (Notification.permission !== 'granted')
        {
            Notification.requestPermission();
        }
        else
        {
            var notification = new Notification(title,
            {
                icon: icon,
                body: description
            });
 
        // Remove the notification from Notification Center when clicked.
        notification.onclick = function ()
        {
            if (url.length > 0)
            {
                if (/^(http|https):\/\/[^ "]+$/.test(url) === TRUE)
                {
                    window.open(url);
                }
            }
        };
 
        // Callback function when the notification is closed.
        notification.onclose = function ()
        {
            console.log('Notification closed');
        };
     }
}
var datetime =
{
    // Appends seconds to Date object 
    append_to_date: function ()
    {
        var seconds  = Math.floor(this)
        var hours    = Math.floor(seconds / 3600);
            seconds -= hours * 3600;
        var minutes  = Math.floor(seconds / 60);
            seconds -= minutes * 60;

        if (hours < 10)   { hours   = "0" + hours;   }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }

        var date = new Date();
        
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(seconds);
        
        return date;
    }
    // Adds '360' seconds to the current day
    // 360.append_to_date();

};
// extended math library

var ExtMath = {

    getDegToRad: function(deg)
    {
        return deg * (Math.PI / 180);
    },
    
    // Haversine formula - calculates the distance between two points (coordinates)
    getGreatCircleDistance: function(lat1, lon1, lat2, lon2)
    {
        var p = 0.017453292519943295; // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2;

        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    },

    getRandom: function (maxRange)
    {
        return Math.floor((Math.random() * maxRange) + 1);
    },

    randomEvenOnly: function (maxRange)
    {
        return Math.floor(Math.random() * maxRange / 2) * 2;
    },

    fibonacci: function (num, memo)
    {
        memo = memo || {};

        if (memo[num]) return memo[num];
        if (num <= 1)  return 1;

        return memo[num] = this.fibonacci(num - 1, memo) + this.fibonacci(num - 2, memo);
    }
    
    formatAsMoney: function (mnt)
    {
        mnt -= 0;
        mnt = (Math.round(mnt*100))/100;
        
        return (mnt == Math.floor(mnt)) ? mnt + '.00' : ((mnt*10 == Math.floor(mnt*10)) ? mnt + '0' : mnt);
    }
};


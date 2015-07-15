var TypeOf = {

    random: function (maxRange)
    {
        Math.floor((Math.random() * maxRange) + 1);
    }

    randomEvenOnly: function (maxRange)
    {
        return Math.floor( Math.random() * maxRange / 2 ) * 2;
    }

};


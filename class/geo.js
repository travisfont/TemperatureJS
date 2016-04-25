var geo =
{
    // Convert Latitude/Longitude Decimal to Latitude/Longitude DMS
    dec2dms : function (latitude, longitude)
    {
        // got dashes?
		if (latitude.substr(0,1) == "-")
        {
			var dmsLatHem = 'S'
			var ddLatVal  = latitude.substr(1, latitude.length-1);
		}
        else
        {
			var dmsLatHem = 'N'
			var ddLatVal  = latitude;
		}
		
		if (longitude.substr(0,1) == "-")
        {
			var dmsLongHem = 'W';
			var ddLongVal  = longitude.substr(1, longitude.length-1);
		}
        else
        {
			var dmsLongHem = 'E';
			var ddLongVal  = longitude;
		}
		
		// degrees = degrees
		var ddLatVals = ddLatVal.split(".");
		var dmsLatDeg = ddLatVals[0];
		
		var ddLongVals = ddLongVal.split(".");
		var dmsLongDeg = ddLongVals[0];
		
		// * 60 = mins
		var ddLatRemainder  = ("0." + ddLatVals[1]) * 60;
		var dmsLatMinVals   = ddLatRemainder.toString().split(".");
		var dmsLatMin = dmsLatMinVals[0];
		
		var ddLongRemainder  = ("0." + ddLongVals[1]) * 60;
		var dmsLongMinVals   = ddLongRemainder.toString().split(".");
		var dmsLongMin = dmsLongMinVals[0];
		
		// * 60 again = secs
		var ddLatMinRemainder = ("0." + dmsLatMinVals[1]) * 60;
		var dmsLatSec   = Math.round(ddLatMinRemainder);
		
		var ddLongMinRemainder = ("0." + dmsLongMinVals[1]) * 60;
		var dmsLongSec   = Math.round(ddLongMinRemainder);
        
        return {
            LatDeg:  dmsLatDeg,  LatMin:  dmsLatMin,  LatSec:  dmsLatSec,  LatHem: dmsLatHem,
            LongDeg: dmsLongDeg, LongMin: dmsLongMin, LongSec: dmsLongSec, LongHem: dmsLongHem
        };
    },
    
    // Convert Latitude/Longitude DMS to Latitude/Longitude Decimal
    dms2dec : function (dmsLatDeg,  dmsLatMin,  dmsLatSec,  dmsLatHem,
                       dmsLongDeg,  dmsLongMin, dmsLongSec, dmsLongHem)
    {
        if (dmsLatHem == 'N') dmsLatHem = '';
        if (dmsLatHem == 'S') dmsLatHem = '-';
        
        if (dmsLatHem == 'E') dmsLatHem = '';
        if (dmsLatHem == 'W') dmsLatHem = '-';
        
        // find decimal latitude
		ddLatVal = dmsLatDeg*1 + dmsLatMin/60 + dmsLatSec/3600;
		ddLatVal = dmsLatHem + ddLatVal;
		
		// find decimal longitude
		ddLongVal = dmsLongDeg*1 + dmsLongMin/60 + dmsLongSec/3600;
		ddLongVal = dmsLongHem + ddLongVal;
		
        return {
            lat: ddLatVal,
            lng: ddLongVal
        };
    }
}

// convert Latitude and Longitude information between decimal format and degree/minute/second (DMS) format.
// This is useful when finding distances using the Haversine formula. Here's the basic equation:
// Decimal Degrees = Degrees + minutes/60 + seconds/3600

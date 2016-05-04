//Number.prototype.format=function(decimalPoints,thousandsSep,decimalSep)
function formatNumber(decimalPoints, thousandsSep, decimalSep)
{
	var val=this+'',re=/^(-?)(\d+)/,x,y;

	if (decimalPoints!=null) val = this.toFixed(decimalPoints);
	if (thousandsSep && (x=re.exec(val)))
	{
		for (var a=x[2].split(''),i=a.length-3;i>0;i-=3) a.splice(i,0,thousandsSep);
		val=val.replace(re,x[1]+a.join(''));
	}
	if (decimalSep) val=val.replace(/\./,decimalSep);

	return val;
}

if (typeof Number.prototype.toFixed !== 'function' || (.9).toFixed() == '0' || (.007).toFixed(2) == '0.00')
{
    Number.prototype.toFixed = function (f)
    {
        if (isNaN(f*=1) || f < 0 || f > 20) f=0;

        var s='', x = this.valueOf(), m='';

        if (this < 0) { s='-'; x*=-1; }
        if (x >= Math.pow(10,21)) m = x.toString();
        else
        {
            m=  Math.round(Math.pow(10, f)*x).toString();
            if (f != 0)
            {
                var k=m.length;
                if (k<=f)
                {
                    var z='00000000000000000000'.substring(0, f+1-k);
                    m=z+m;
                    k=f+1;
                }

                var a = m.substring(0,k-f);
                var b = m.substring(k-f);
                m = a+'.'+b;
            }
        }

        if (m=='0') s='';

        return s+m;
    }
}


// var x = 1234567.89532;
// x.format()                  => 1234567.89532
// x.format(2)                 => 1234567.90
// x.format(2,',')             => 1,234,567.90
// x.format(0,',')             => 1,234,568
// x.format(null,',')          => 1,234,567.89532
// x.format(null,' ',',')      => 1 234 567,89532
// x.format(2,' ',',')         => 1 234 567,90
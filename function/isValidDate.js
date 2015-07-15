// currently the code only supports dates as format: DD/MM/YYYY

function isValidDate(date)
{
	var date, tab, reg = new RegExp("^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$","g");
	if(reg.test(date))
    {
		tab=date.split('/');
		if((tab[0]*1)<1 || (tab[0]*1)>31) { return false; }   // Incorrect day - 19
		if((tab[1]*1)<1 || (tab[1]*1)>12) { return false; } // Incorrect month - 20
		return true
	}
	return false;
}
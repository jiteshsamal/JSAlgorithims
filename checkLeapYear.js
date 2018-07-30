function checkLeapYear(year){
		if((year % 4==0) && (year % 100==0) && (year % 100==0))
    return 'Its a Leap year';
    else
    return 'Not a leap year';
}


var today= new Date();
var year= today.getFullYear();
console.log(checkLeapYear(year));
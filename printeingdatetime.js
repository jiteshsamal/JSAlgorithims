
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var today = new Date();
var day = today.getDay();
var hour=today.getHours();
var minute=today.getMinutes();
var seconds=today.getSeconds();
var prepend='';

if(hour >= 12){
	prepend='PM';
	hour=hour-12;
}
else{
	prepend='AM';
}

if(hour==12){
	if(minute==0 && seconds==0){
		prepend='Noon';
	}
	else{
		prepend='PM';
	}
}

if(hour==0){
	if(minute==0 && seconds==0){
		prepend='Midnight';
	}
	else{
		prepend='AM';
	}
}

console.log('Today is :'+  daylist[day]);

console.log("Current time is : " + hour + prepend + ":" + minute + ":" + seconds);
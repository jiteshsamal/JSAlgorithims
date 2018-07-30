function printTime(){
var today=new Date(2018, 05, 25,23,0,0);
  var days=["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]
  var dayindex=today.getDay();
  var hours=today.getHours();
  var minutes=today.getMinutes();
  var seconds=today.getSeconds();
  var prepend= hours >= 12 ? 'PM':'AM'
 
  var hour=hours >= 12 ? hours-12:hours;
  if(hour==0 && prepend =='AM'){
  	if(minutes==0 && seconds==0){
    	prepend='Midnight';
    }
    else
    prepend='AM';
  }
  if(hour==0 && prepend =='PM'){
  	if(minutes==0 && seconds==0){
    	prepend='Noon';
    }
    else
    prepend='PM';
  }
  
  console.log('today is : ' + days[dayindex]);
  console.log('current time is : ' + hour + prepend + ':' + minutes + ':'  + seconds );
}

printTime();
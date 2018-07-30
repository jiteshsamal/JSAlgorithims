function yearSunday(){
	for(var i=2014;i<=2050;i++){
  var date= new Date(i,0,1);
  	if(date.getDay()==0)
    console.log(i + ' is a sunday')
  }
}

yearSunday();
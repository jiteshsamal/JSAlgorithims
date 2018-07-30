function printStars(num){
var chr='';
	for(var i=0;i<num;i++){
  for(var j=0;j<=i;j++){
   chr=chr+("*");     
  }
  console.log(chr);
 chr=''; 
  }
}

printStars(5);
function printPyramidStars(num){
var chr='';
	for(var i=0;i<num;i++){
  	for(var k=0;k<=num-i;k++){
    	chr+= ' '
    }
  	for(var j=0;j<=i;j++){
   		chr=chr+("* ");     
      }
  	console.log(chr);
 chr=''; 
  }
}

printPyramidStars(5);
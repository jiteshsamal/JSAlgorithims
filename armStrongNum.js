function armStrongNumber(num){
	var numLength=num.toString().length;
  var sum=0;
  var numberSum=0;
  var result=num;
  
  while(num > 0){
  		var lastdigit=num % 10;
      numberSum += Math.pow(lastdigit,numLength);
      num= Math.floor(num / 10);
  }
  
  return result == numberSum

}

console.log(armStrongNumber(123));

console.log(armStrongNumber(371));
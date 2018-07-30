function perfectNumber(num){
		var divisors=[];
    var result=0;
    for(var i=1;i<num;i++){
    	if(num%i==0){
      result+=i;
      }
    }
  
  console.log(result);
    return result ==num;
}


console.log(perfectNumber(6))
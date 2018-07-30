function reverseANumber(number){
	var reverse=0;
		while(number!=0){
    	reverse=reverse * 10 +  number%10;
    	number=Math.floor(number/10);
    }
    return reverse;
}
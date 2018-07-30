function convertCoins(amount,coins){
	if(amount==0){
  	return []
  }
  else{
  		if(amount  >= coins[0]){
      var left=amount-coins[0];
      return  [coins[0]].concat(convertCoins(left,coins));
      }
      else{
      		coins.shift();
          return convertCoins(amount,coins)
      }
  }
}



console.log(convertCoins(46,[25,10,5,1]));
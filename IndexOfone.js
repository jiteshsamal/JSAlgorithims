function indexOf1(arr){
	var currIndex=1;
  var prevIndex=0;
  while(arr[currIndex]!=1){
  	prevIndex=currIndex;
    currIndex=currIndex*2;
  }
  for(var i=prevIndex;i<= currIndex;i++){
  	if(arr[i]==1)
    return i;
  }
  return undefined;
}


console.log(indexOf1([0,0,1,1,1,1]));

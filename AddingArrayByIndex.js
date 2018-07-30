function AddingArrayByIndex(arr1,arr2){
var ctr=0;
var result=[];
	while( ctr < arr1.length && ctr < arr2.length ){
  	result[ctr]=arr1[ctr] + arr2[ctr];
    ctr++
  }
  if(arr1.length ==ctr){
  	for(var i=ctr;i<arr2.length;i++){
    	result[i]=arr2[i];
    }
  }
  else if(arr1.length==ctr){
  		for(var i=ctr;i<arr1.length;i++){
    	result[i]=arr1[i];
    }
  }
  return result
}

console.log(AddingArrayByIndex([1,2,3,4,5],[6,7,8,9,1,12]));
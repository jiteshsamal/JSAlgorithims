function addArrayItems(arr){
var sum=0
	if(arr.length==1)
  	return arr[0]
    else
    sum= arr.pop() + addArrayItems(arr)
    return sum;
}

console.log(addArrayItems([1,2,3,4,5,8]));

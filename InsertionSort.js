function InsertionSort(arr){
var i=0;
	for(var j=2;j<arr.length;j++){
  	key=arr[j];
    i=j-1;
    while(i>=0 && arr[i] > key)
    {
    	arr[i+1]=arr[i];
      i=i-1;
    }
    arr[i+1]=key;
  }
  return arr;
}

console.log(InsertionSort([12,14,1,3,56,4]));

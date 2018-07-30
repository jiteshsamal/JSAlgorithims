function selectionSort(arr){
	var imin=0;
  var length=arr.length;
  for(var i=0;i<length;i++){
  	imin=i;
    for(var j=i+1;j<length;j++){
    		if(arr[imin] > arr[j]){
        		imin=j;
        }
    }
    var temp=arr[i];
    arr[i]=arr[imin];
    arr[imin]=temp;
  }
  return arr;
}

var a=[12,3,45,76,1,3];
console.log(selectionSort(a));



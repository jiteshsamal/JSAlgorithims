function bubblesort(arr){
  for(var i=0;i<arr.length-1;i++){
    for(var j=0;j<arr.length-1-i;j++){
        if(arr[j] > arr[j+1]){
          var temp=arr[j+1];
          arr[j+1]=arr[j];
          arr[j]=temp;
        }
    }
  }
  console.log(arr);
}

var a=[12,14,1,3,56,4];

bubblesort(a)
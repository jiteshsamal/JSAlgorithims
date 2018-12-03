function findingmazorityElement(arr){
	let majorityIndex=0;
  let count =1;
  for(let i=0;i<arr.length;i++){
  	if(arr[majorityIndex] == arr[i])
    	count++
      else
      count--;
     if(count==0){
     		majorityIndex=i;
      count=1;
     }
  }
  let totalCount=0;
  for(let j=0;j<arr.length;j++){
  	if(arr[j] == arr[majorityIndex]){
    	totalCount++;
    }
  }
  
  console.log(arr[majorityIndex]);
  console.log(totalCount);
  return (totalCount > (arr.length / 2))

}

function ProductsOfAllOthers(arr){
	let product=1;
  let leftproductArray=[];
  let mainArray=[];
  for(let i=0;i<arr.length;i++){
  	leftproductArray[i]=product;
    product*=arr[i];
  }
  console.log(leftproductArray);
   product=1;
  for(let j=arr.length-1;j >= 0;j--){
  	mainArray[j]=product * leftproductArray[j];
    product*=arr[j];
  }
  return mainArray
}

const stockPrices = [1,2,4,5,7];

console.log(stockPrices)

console.log(ProductsOfAllOthers(stockPrices));

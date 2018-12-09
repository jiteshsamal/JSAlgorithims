function getMaxProfit(arr){
	let minNum=arr[0];
  let maxProfit=arr[1]-arr[0];
  let maxNum=arr[1];
  let currProfit=0;
  for(let i=1;i < arr.length;i++){
  	currStockPrice=arr[i];
    currProfit=currStockPrice-minNum;
    maxProfit=Math.max(currProfit,maxProfit);
    maxNum=Math.max(maxNum,currStockPrice);
    minNum=Math.min(minNum,currStockPrice); 
  }
  return maxProfit;
}

const stockPrices = [10, 7, 5, 8, 11, 9];

console.log(getMaxProfit(stockPrices));

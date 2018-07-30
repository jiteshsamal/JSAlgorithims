function getInbetweenNumbers(start,end){
	if(end - start ==2){
  	return [start + 1]
  }
  else{
  var list=getInbetweenNumbers(start,end-1)
  list.push(end-1);
  return list;
  }
}

console.log(getInbetweenNumbers(22,30))
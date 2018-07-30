function returnLongestWord(str){
	var largest='';
	var existArray=str.split(' ');
	for(var i=0;i<existArray.length;i++){
  	if(existArray[i].length>largest.length){
    	largest=existArray[i];
    }
		//outArray.push(existArray[i].charAt(0).toUpperCase() + existArray[i].slice(1))
	}
  return largest;
}
console.log(returnLongestWord('the quick brown fox jumps then quickly blow air'));
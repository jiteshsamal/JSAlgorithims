function convertFirstLetter(str){
	var outArray=[];
	var existArray=str.split(' ');
	for(var i=0;i<existArray.length;i++){
		outArray.push(existArray[i].charAt(0).toUpperCase() + existArray[i].slice(1))
	}
  return outArray.join(' ');
}
console.log(convertFirstLetter('the quick brown fox jumps then quickly blow air'));
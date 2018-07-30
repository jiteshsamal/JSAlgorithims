function firstNonRepeatChar(str){
var nonrepeatObj={};
  for(var i=0;i<str.length;i++){
		if(str.indexof(str.charat(i))==str.lastindexof(str.charat(i))){
    return str.charat(i)
    }
		}
}
console.log(firstNonRepeatChar('the quick brown fox jumps then quickly blow air'));
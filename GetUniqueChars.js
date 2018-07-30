function GetUniqueCharecters(chars){
	var stringArray=chars.split('');
  var uniqueArray="";
  for(var i=0;i< chars.length;i++){
  	if(uniqueArray.indexOf(chars.charAt(i))==-1){
  			uniqueArray+=chars.charAt(i);
  		}
  }
  return uniqueArray;
}
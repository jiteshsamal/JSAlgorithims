function findUniquestring(str){
	var unique=''
  for(var i=0;i<str.split('').length;i++){
  	if(unique.indexOf(str.charAt(i))==-1)
    unique= unique + str.charAt(i)
  }
  return unique;
}



console.log(findUniquestring('thequickbrownfoxjumpsoverthelazydog'));
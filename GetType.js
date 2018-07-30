function getTypes(value){
	var types=[Function,Object,String,Number,Boolean,undefined];
  if(typeof value=='object' || typeof value=='function'){
  	for(var i=0;i<types.length;i++){
        if(value instanceof types[i]){
        	return types[i]
        }
    }
  }
  return typeof value
}
function Longestword(str){
var arr=str.split(' ');
var longString='';

for(var i=0;i<arr.length;i++){
		if(longString.length < arr[i].length){
    	longString=arr[i];
    }
}
	return longString;
}
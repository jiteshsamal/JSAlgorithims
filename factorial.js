function factorialNum(x){
	if(x==0)
  return 1
   return x * factorialNum(x-1)

}

function factorialnorecursion(x){
var fact=1;
	for(var i=1;i<=x; i++){
  	fact = fact * i
  }
  
  return fact;
}


console.log(factorialNum(4))
console.log(factorialnorecursion(4))
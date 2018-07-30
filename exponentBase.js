function getExponent(base,exponent){

	if(exponent==1)
  return base
  else
  	return base * getExponent(base,exponent-1)
}

console.log(getExponent(8,2));
function areaOfTriangle(a,b,c){
	let perimeter=(a+b+c)/2
	area=Math.sqrt(perimeter*((perimeter-a)*(perimeter-b)*(perimeter-c)))
	return area
}
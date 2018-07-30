var date = new Date();
var yyyy=date.getFullYear();
var mm=date.getMonth()+1;
var dd=date.getDate();
var today= new Date();

if(mm < 10)
mm='0' + mm;


today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);
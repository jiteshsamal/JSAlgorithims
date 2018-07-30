var today= new Date();
year=today.getFullYear();
month=today.getMonth()+1;
day=today.getDate();

if(day<10) 
{
    day='0'+day;
} 

if(month<10) 
{
    month='0'+month;
} 

console.log("mm-dd-yyyy:", month + '-' + day + '-' + year);
console.log("mm/dd/yyyy:", month + '/' + day + '/' + year);
console.log("dd-mm-yyyy:", day + '-' + month + '-' + year);
console.log("dd/mm/yyyy:", day + '/' + month + '/' + year);

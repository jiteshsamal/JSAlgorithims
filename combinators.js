function combinator (s) {
   list_of_strings = new Array();
   for(i=0;i<s.length;i++) {
       for(j=i+1;j<s.length+1;j++) {
           list_of_strings.push(s.slice(i, j));
       }
   }
   return list_of_strings;
}


 console.log(combinator('dog'));
 

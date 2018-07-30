function getAllPermutations(string) {
    var results = [];
  
    if(string.length==1){
    return string;
    }
    else{
        for(var i=0;i<string.length;i++){
          var firstchar=string[i];
        var restchar=string.substring(0,i) + string.substring(i+1);
        var innerperms=getAllPermutations(restchar);
        for(var j=0;j<innerperms.length;j++){
                results.push(firstchar + innerperms[j]);
        }
      }
    }
    return results;
  }
  
  console.log(getAllPermutations('abc'));
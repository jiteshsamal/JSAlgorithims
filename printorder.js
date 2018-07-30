<!DOCTYPE html>
  <html> 
  <head>
  <title>JavaScript basic animation</title>
  </script>
  </head> <body onload="animate_string()"
  <pre id="target">w3resource </pre>
  
  <script>
  function animate_string(){
	var pre=document.querySelector('#target');
  var text=pre.innerText;
  setInterval(function(){
  	text=text[text.length-1] + text.substring(0,text.length-1);
    pre.innerText=text;
  },1000)
}
  </script>
  </body>
  
  </html>
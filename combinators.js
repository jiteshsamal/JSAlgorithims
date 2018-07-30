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
 
 <FTB:FreeTextBox ID="FreeTextBox1" ToolbarStyleConfiguration="NotSet" TabIndex="2" ToolbarBackgroundImage="false" GutterBackColor="WhiteSmoke" BackColor="WhiteSmoke" Width="630" ToolbarLayout="paragraphmenu,fontfacesmenu,fontsizesmenu,fontforecolorsmenu,bold,italic,underline|bulletedlist,numberedlist;createlink,unlink,removeformat|cut,copy,paste,delete,undo,redo,print|justifyleft,justifyright,justifycenter,justifyfull,indent,outdent|iespellcheck,insertrule,insertdate,symbolsmenu" runat="Server" />
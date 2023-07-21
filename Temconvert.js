function callcel(){
     var x = document.getElementById("main").value;
     var result =( x -32)*5/9;
     document.getElementById("celsius").value = result;
 }
 function callkel(){
     var x = document.getElementById("main").value;
     var result =( x -273.15)*9/5+32;
     document.getElementById("kelvin").value = result;
 }
 function callfeh(){
     var x = document.getElementById("main").value;
     var result =( x * 9/5)+32;
     document.getElementById("fehrenheit").value = result;
 }
 function reset(){
     document.getElementById("main").value = " ";
     document.getElementById("celsius").value= " ";
     document.getElementById("kelvin").value= " " ;
     document.getElementById("fehrenheit").value= " ";
 }
let tabuada = 2;

function escreve(){
      //2 x 1 = 2
      document.write(tabuada + " x 1 = "+(tabuada*1)+"<br>");
      document.write(tabuada + " x 2 = "+(tabuada*1)+"<br>");
      document.write(tabuada + " x 3 = "+(tabuada*1)+"<br>");
      document.write(tabuada + " x 4 = "+(tabuada*1)+"<br>");
      document.write(tabuada + " x 5 = "+(tabuada*1)+"<br>");
      document.write(tabuada + " x 6 = "+(tabuada*1)+"<br>");
      document.write(tabuada + " x 7 = "+(tabuada*1)+"<br>");
      document.write(tabuada + " x 8 = "+(tabuada*1)+"<br>");
      document.write(tabuada + " x 9 = "+(tabuada*1)+"<br>");
      document.write(tabuada + " x 10 = "+(tabuada*1)+"<br>");
}
function repete(){
    for(let i = 1; i <= 10; i++)
       document.write("Tabuada do " + i + "<br>");
       for(let j =1; j <=10; j++){
           document.write(i + " X " + j + " = "+(j*i))
       }

}   
        



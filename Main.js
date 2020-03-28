

document.addEventListener("DOMContentLoaded", function(event) { 

  fillHtmlCube(blue);
//  solveCube(blue);
  console.log(dec2bin(flipSquare(blue[2])));
  for (var i = 0; i < 5; i++)
   console.log("----->"+getBit(0b11101, i));
   
   console.log("***");
  
});




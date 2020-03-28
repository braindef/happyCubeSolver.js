

document.addEventListener("DOMContentLoaded", function(event) { 

  fillHtmlCube(blue);
//  solveCube(blue);
  console.log(getBitRow(0b11010));

  for (var i = 0; i < 5; i++)
   console.log("----->"+getBit(0b11101, i));
   
   console.log("***");
  
});






document.addEventListener("DOMContentLoaded", function(event) { 

  console.log(checkEdge(0b11111, 0b00000));
  console.log(checkEdge(0b00000, 0b11111));
  console.log(checkEdge(0b11011, 0b00100));
  console.log(checkEdge(0b11011, 0b10100));
  fillHtmlCube(blue);
  solveCube(blue);
});




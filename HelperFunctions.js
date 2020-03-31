

//var selected = 0;

var debug = 1;

var selected = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
  
  selected = new Animals();
  
  load(selected);
  
});


function load(cube)
{
  if (debug>0) console.log("load(cube)");
  
  selected = cube;
  
  drawCube(selected);
}


function drawCube(cube)
{
  if (debug>0) console.log("drawCube(cube)");

  pos = "abcdef";


  for (var i=0; i<6; i++)
  {
    drawSquare(cube, cube.data[i], pos.charAt(i), cube.symbols[i]);
  }
}


//TODO in a loop with different field vars
function drawSquare(cube, square, placement, symbol)
{
  
  row = [ 0b0, 0b0, 0b0, 0b0 ];
  
  for (var i = 0; i < 4; i++)
    for (var j = 0; j < 5; j++)
    {                 // aa 0 1
      row[0] = placement + "0" + (4-j);   //top
      row[1] = placement + j + "0";       //left
      row[2] = placement + "4" + j;       //bottom
      row[3] = placement + (4-j) + "4";   //right
      
      if (debug > 4) console.log(row[i]);
      
      if (getBit(square[i], j))
        document.getElementById(row[i]).style.backgroundColor = cube.outerColor;
      else      
        document.getElementById(row[i]).style.backgroundColor = "white";
    }
    
    for (var k = 1; k < 4; k++)
      for (var l = 1; l < 4; l++)
      {
        field = placement+k+l;
        
        document.getElementById(placement+k+l).style.backgroundColor = cube.innerColor;
      } 
    
    document.getElementById(placement+"22").innerHTML = symbol;
    
    //printBitSquare(square); 
    //console.log("fillHtmlSquare()");
    //printBitSquare(square);
}



function changeButtonsColor(color, item){
    Array.from(document.querySelectorAll(item)).map(function(button) {
               button.style.backgroundColor=color;
    })
}



function getBit(row, bitPosition)
{
  return (( row >>> bitPosition ) & 1);
}


function getBitRow(row)
{
  result = "";
  for (var i = 0; i < 5; i++)
    if (getBit(row, i))
      result = "1" + result;
    else
      result = "0" + result;
  return result;
}

function printBitSquare(square)
{
  console.log("the least significant bit is at the arrow");  //TODO: arrow from lsb horizontal TODO: reverse order 
  console.log("     1");
  console.log("     v");  
  console.log("     " + getBit(square[0], 4) + " " + getBit(square[0], 3) + " " + getBit(square[0], 2) + " " + getBit(square[0], 1) + " " + getBit(square[0], 0) + " <- 0");
  console.log("     " + getBit(square[1], 1) + "       " + getBit(square[3], 3));
  console.log("     " + getBit(square[1], 2) + "       " + getBit(square[3], 2));
  console.log("     " + getBit(square[1], 3) + "       " + getBit(square[3], 1));
  console.log("2 -> " + getBit(square[2], 0)+" " + getBit(square[2], 1) + " " + getBit(square[2], 2)+ " " + getBit(square[2], 3) + " " + getBit(square[2], 4));
  console.log("             ^");
  console.log("             3");

}

function getVarName(v) {
    for (var key in window) {
        if (window[key] === v)
            return key;
    }
}

function show(division)
{
  var myDivision = document.getElementById(division);

  myDivision.style.display = "block";
}


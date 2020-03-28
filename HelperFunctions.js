

//fields in html code
fields = [["f00", "f01", "f02", "f03", "f04"],
          ["f10", "f11", "f12", "f13", "f14"],
          ["f20", "f21", "f22", "f23", "f24"],
          ["f30", "f31", "f32", "f33", "f34"],
          ["f40", "f41", "f42", "f43", "f44"]];


function fillHtmlCube(cube)
{
  pos = "abcdef";
  for (var i=0; i<6; i++)
  {
    console.log(cube[i] +" " +pos.charAt(i));
    fillHtmlSquare(cube[i], pos.charAt(i), "white");
  }
}


//TODO in a loop with different field vars
function fillHtmlSquare(square, placement, color)
{

//  for (var i = 0; i < 4; i++)
    for (var j = 0; j < 5; j++)
    {                 // aa 0 1
      var rowTop = placement + "0" + j;
      var rowLeft = placement + (4-j) + "0";
      var rowBottom = placement + "4" + (4-j);
      var rowRight = placement + j + "4";
      
      if (!getBit(square[0], j))
        document.getElementById(rowTop).style.backgroundColor = color;
      
      if (!getBit(square[1], j))
        document.getElementById(rowLeft).style.backgroundColor = color;
      
      if (!getBit(square[2], j))
        document.getElementById(rowBottom).style.backgroundColor = color;
      
      if (!getBit(square[3], j))
        document.getElementById(rowRight).style.backgroundColor = color;
    }
    
    printBitSquare(square); 
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
  console.log("**************");
  console.log(getBitRow(square[0]));
  console.log(getBit(square[1], 1) + "   " + getBit(square[3], 3));
  console.log(getBit(square[1], 2) + "   " + getBit(square[3], 2));
  console.log(getBit(square[1], 3) + "   " + getBit(square[3], 1));
  console.log(getBit(square[2], 4)+""+getBit(square[2], 3)+""+getBit(square[2], 2)+""+getBit(square[2], 1)+""+getBit(square[2], 0));

}




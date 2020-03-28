




document.addEventListener("DOMContentLoaded", function(event) { 
  fillHtmlCube(blue);
  solveCube(blue);
});




function solveCube(cube)
{

  for (var i = 0; i < 6; i++)
  {
    squareB = rotateSquare(cube[i], i);
    
    for (var j = 1; j < 6; j++) 
    squareC = rotateSquare(cube[j], j);
  }


  fillHtmlSquare(squareB, "bb");
  fillHtmlSquare(squareC, "cc");
}


function rotateSquare(square, times)
{
  nTimesNinety = times % 4;
  resultSquare = [ 0b0, 0b0, 0b0, 0b0 ];

  for (var i = 0; i < 4; i++)
    resultSquare[i] = square[(nTimesNinety+i)%4];

  return resultSquare;
}

function flipSquare(square)     //TODO: check if order of the direction not changed
{
  result = [ 0b0, 0b0, 0b0, 0b0 ];
  for (var i=0; i<4; i++)
  {
    if (debug) console.log("flipSquare()" + i + ": " + dec2bin(square[i]) + " -> " + dec2bin(flipRow(square[i])));
    result[i] = flipRow(square[i]);
  }

  return result;
}


function flipRow(row)
{
  result = 0b00000;

  if (debug) console.log(dec2bin(row));

  for (var i = 0; i<5; i++)
  {
    exponent = Math.pow(2,4-i);
    if (row / exponent >= 1)
    {
      row -= exponent;
      result += Math.pow(2,i);
      if (debug) console.log(i + ": " + row + ": " + dec2bin(row) + " / " + exponent + " result: " + dec2bin(result));
    }
  }
  return result;
}

/*
place 0
 take next (pointer rechte kante)
   for (i<4) rotate
     test if match
   flip
   for (i<4) rotate
     test if match


pointer für kante der ersten 4   
   
*/

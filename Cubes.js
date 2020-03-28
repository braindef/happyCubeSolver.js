
var debug = false;

var blue = [ [ 0b00100, 0b00100, 0b00100, 0b00100 ],
             [ 0b11011, 0b00101, 0b01010, 0b11010 ],
             [ 0b11010, 0b01011, 0b00100, 0b01010 ],
             [ 0b10100, 0b01011, 0b01010, 0b01010 ],
             [ 0b01010, 0b00100, 0b00100, 0b00100 ],
             [ 0b10101, 0b11011, 0b10101, 0b11011 ] ];


function flipSquare(square)
{
  for (var i=0; i<4; i++)
  {
    console.log("flipSquare()" + i + ": " + dec2bin(square[i]) + " -> " + dec2bin(flipRow(square[i])));
  }
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


function start()
{
 return 0;
}

//  X
//X X X X
//  X


//vorder/rückseite!



document.addEventListener("DOMContentLoaded", function(event) { 
  //flipSquare(blue[3]);
  //console.log(flipRow(0b01011));
  fillHtmlCube(blue);
  solveCube(blue);
});




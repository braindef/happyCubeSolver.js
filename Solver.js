


function solveCube(cube)
{

  end = false;
  for (var i = 0; i < 6; i++)
  {
    if (end) break;
    squareB = rotateSquare(cube[i], i);                                             // 6 flächen (wenn schon gebraucht = continue), flippen, drehen, flächen kontrollieren
    
    for (var j = 0; j < 6; j++) 
    {
      if (j == i) continue;
      for (var k = 0; k < 2; k++)
      {
        if (end) break;

        flippedSquareC = cube[j].slice();
        if (k == 1)
          flippedSquareC = flipSquare(cube[j]);
        for (var l = 0; l < 4; l++)
        {
          if (end) break;

          squareC = rotateSquare(flippedSquareC, l);
          if (checkEdge(squareB[3], squareC[1]))
          {
            console.log("MARK+: " +i + " " + j);
            for (var m = 0; m < 6; m++)
            {
              if (end) break;

              if (m == i) continue;
              if (m == j) continue;
              for (var n = 0; l < 2; l++)
              {
                if (end) break;

                flippedSquareD = cube[m].slice();
                 if (n == 1)
                   flippedSquareD = flipSquare(cube[m]);
                 for (var o = 0; o < 4; o++)
                 {
                   if (end) break;

                   squareD = rotateSquare(flippedSquareD, o);
                   if (checkEdge(squareC[3], squareD[1]))
                     end = true;
                 }
              }
            }
          }
        }
      }
    }
  }

  fillHtmlSquare(squareB, "bb");
  fillHtmlSquare(squareC, "cc");
  fillHtmlSquare(squareD, "dd");
}


function checkEdge(edgeA, edgeB)
{
  for ( var i = 0; i < 5; i++)
    if (!((dec2bin(edgeA).charAt(i) == "0" && dec2bin(edgeB).charAt(i) == "1")||
         (dec2bin(edgeA).charAt(i) == "1" && dec2bin(edgeB).charAt(i) == "0")) )
    {
      return false;
    }
  return true;
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

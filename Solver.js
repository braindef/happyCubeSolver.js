


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
          if (checkEdgeTree(squareB[3], squareC[1]))
          {
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
                  if (checkEdgeTree(squareC[3], squareD[1]))
                  {

                    for (var p = 0; p < 6; p++)
                    {
                      if (end) break;

                      if (p == i) continue;
                      if (p == j) continue;
                      if (p == m) continue;

                      for (var q = 0; q < 2; q++)
                      {
                        if (end) break;

                        flippedSquareE = cube[p].slice();
                        if (q == 1)
                          flippedSquareE = flipSquare(cube[p]);
                        for (var r = 0; r < 4; r++)
                        {
                          if (end) break;

                          squareE = rotateSquare(flippedSquareE, r);
                          if ( (checkEdgeTree(squareD[3], squareE[1])) &&
                               (checkEdgeTree(squareE[3], squareB[1])) )
                          {
                            for (var s = 0; s < 6; s++)
                            {
                              if (end) break;

                              if (s == i) continue;
                              if (s == j) continue;
                              if (s == m) continue;
                              if (s == p) continue;
                              
                              for (var t = 0; t < 2; t++)
                              {
                                if (end) break;

                                flippedSquareA = cube[s].slice();
                                if (t == 1)
                                  flippedSquareA = flipSquare(cube[s]);
                                for (var u = 0; u < 4; u++)
                                {
                                  if (end) break;
                                  
                                  squareA = rotateSquare(flippedSquareA, u);
                                  if ( (checkEdgeTree(squareA[0], squareE[0])) &&
                                       (checkEdgeTree(squareA[1], squareB[0])) &&
                                       (checkEdgeTree(squareA[2], squareC[0])) &&
                                       (checkEdgeTree(squareA[3], squareD[0])) )
                                  {

                                    corner0 = 0;
                                    if (squareA[2]%2 == 1) corner0++;
                                    if (squareB[0]%2 == 1) corner0++;
                                    if (squareC[1]%2 == 1 ) corner0++;
                                    console.log("A1: " + dec2bin(squareA[1]));
                                    console.log("B3: " + dec2bin(squareB[3]));
                                    console.log("C0: " + dec2bin(squareC[0]));
                                    console.log(corner0);
                                    if (corner0 == 1)
                                    {
                                                       end = true;
                                      corner1 = 0;
                                      if (dec2bin(squareA[2]).charAt(0) == "1") corner1++;
                                      if (dec2bin(squareC[3]).charAt(0) == "1") corner1++;
                                      if (dec2bin(squareD[0]).charAt(0) == "1") corner1++;
                                      //if (corner1 == 1)
                                        end = true;
                                    }
                                  }
                                }
                              }                      
                            }
                          }
                        }
                      }
                    }
                  }
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
  fillHtmlSquare(squareE, "ee");
  fillHtmlSquare(squareA, "aa");
}


function checkEdgeTree(edgeA, edgeB)
{
  for ( var i = 1; i < 3; i++)
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

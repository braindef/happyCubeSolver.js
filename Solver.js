


function solveCube(cube)
{


var squareA = [ 0b0, 0b0, 0b0, 0b0 ];
var squareB = [ 0b0, 0b0, 0b0, 0b0 ];
var squareC = [ 0b0, 0b0, 0b0, 0b0 ];
var squareD = [ 0b0, 0b0, 0b0, 0b0 ];
var squareE = [ 0b0, 0b0, 0b0, 0b0 ];
var squareF = [ 0b0, 0b0, 0b0, 0b0 ];

  end = false;
  for (var i1 = 0; i1 < 6; i1++)
  {
    if (end) break;
    
    for (var i2 = 0; i2 < 4; i2++)
    {
      if (end) break;

      squareB = rotateSquare(cube[i1], i2);  
 // 6 flächen (wenn schon gebraucht = continue), flippen, drehen, flächen kontrollieren
    
      for (var j1 = 0; j1 < 6; j1++) 
      {
        if (j1 == i1) continue;
        for (var j2 = 0; j2 < 2; j2++)
        {
          if (end) break;

          flippedSquareC = cube[j1].slice();
          if (j2 == 1)
            flippedSquareC = flipSquare(cube[j1]);
          for (var j3 = 0; j3 < 4; j3++)
          {
            if (end) break;

            squareC = rotateSquare(flippedSquareC, j3);
            if (checkEdgeTree(squareB[3], squareC[1]))
            {
              for (var k1 = 0; k1 < 6; k1++)
              {
                if (end) break;

                if (k1 == i1) continue;
                if (k1 == j1) continue;
                for (var k2 = 0; k2 < 2; k2++)
                {
                  if (end) break;

                  flippedSquareD = cube[k1].slice();
                  if (k2 == 1)
                    flippedSquareD = flipSquare(cube[k1]);
                  for (var k3 = 0; k3 < 4; k3++)
                  {
                    if (end) break;

                    squareD = rotateSquare(flippedSquareD, k3);
                    if (checkEdgeTree(squareC[3], squareD[1]))
                    {

                      for (var l1 = 0; l1 < 6; l1++)
                      {
                        if (end) break;

                        if (l1 == i1) continue;
                        if (l1 == j1) continue;
                        if (l1 == k1) continue;

                        for (var l2 = 0; l2 < 2; l2++)
                        {
                          if (end) break;

                          flippedSquareE = cube[l1].slice();
                          if (l2 == 1)
                            flippedSquareE = flipSquare(cube[l1]);
                          for (var l3 = 0; l3 < 4; l3++)
                          {
                            if (end) break;

                            squareE = rotateSquare(flippedSquareE, l3);
                            if ( (checkEdgeTree(squareD[3], squareE[1])) &&
                                 (checkEdgeTree(squareE[3], squareB[1])) )
                            {
                              for (var m1 = 0; m1 < 6; m1++)
                              {
                                if (end) break;

                                if (m1 == i1) continue;
                                if (m1 == j1) continue;
                                if (m1 == k1) continue;
                                if (m1 == l1) continue;
                                
                                for (var m2 = 0; m2 < 2; m2++)
                                {

                                  if (end) break;
                                  flippedSquareA = cube[m1].slice();
                                  if (m2 == 1)
                                    flippedSquareA = flipSquare(cube[m1]);
                                  for (var m3 = 0; m3 < 4; m3++)
                                  {
                                    if (end) break;
                                    
                                    squareA = rotateSquare(flippedSquareA, m3);
                                    if ( (checkEdgeTree(squareA[0], squareE[0])) &&
                                         (checkEdgeTree(squareA[1], squareB[0])) &&
                                         (checkEdgeTree(squareA[2], squareC[0])) &&
                                         (checkEdgeTree(squareA[3], squareD[0])) )
                                    {
                                      //check if the corner0 has exactly one of the three possible fields from the three squares
                                      corner0 = 0;
                                      if ( squareA[2] % 2 == 1 ) corner0++;
                                      if ( squareB[0] % 2 == 1 ) corner0++;
                                      if ( squareC[1] % 2 == 1 ) corner0++;
                                      if (corner0 == 1)
                                      {
                                        corner1 = 0;
                                        if ( squareA[3] % 2 == 1) corner1++;
                                        if ( squareC[0] % 2 == 1) corner1++;
                                        if ( squareD[1] % 2 == 1) corner1++;
                                      //console.log("A3: " + dec2bin(squareA[3]));
                                      //console.log("C0: " + dec2bin(squareC[0]));
                                      //console.log("D1: " + dec2bin(squareD[1]));
                                      //console.log(corner0);
                                        if (corner1 == 1)
                                        {
                                            //end = true;
                                          corner2 = 0;
                                          if ( squareA[0] % 2 == 1) corner2++;
                                          if ( squareD[0] % 2 == 1) corner2++;
                                          if ( squareE[1] % 2 == 1) corner2++;
                                      //console.log("A0: " + squareDec2bin(squareA));
                                      //console.log("D0: " + squareDec2bin(squareD));
                                      //console.log("E1: " + squareDec2bin(squareE));
                                      //console.log(corner2);

                                          if (corner2 == 1)
                                          {
                                            corner3 = 0;
                                            if ( squareA[1] % 2 == 1) corner3++;
                                            if ( squareB[1] % 2 == 1) corner3++;
                                            if ( squareE[0] % 2 == 1) corner3++;

                                            if (corner3 == 1)
                                            {
                                              for (var n1 = 0; n1 < 6; n1++)
                                              {
                                              if (end) break;

                                              if (n1 == i1) continue;
                                              if (n1 == j1) continue;
                                              if (n1 == k1) continue;
                                              if (n1 == l1) continue;
                                              if (n1 == m1) continue;
                                
                                              for (var n2 = 0; n2 < 2; n2++)
                                              {
                                                if (end) break;

                                                flippedSquareF = cube[n1].slice();
                                                if (n2 == 1)
                                                  flippedSquareF = flipSquare(cube[n1]);
                                                for (var n3 = 0; n3 < 4; n3++)
                                                {
                                                  if (end) break;
                                    
                                                  squareF = rotateSquare(flippedSquareF, n3);
                                                  if ( (checkEdgeTree(squareF[0], squareC[2])) &&
                                                       (checkEdgeTree(squareF[1], squareB[2])) &&
                                                       (checkEdgeTree(squareF[2], squareE[2])) &&
                                                       (checkEdgeTree(squareF[3], squareD[2])) )
                                                  {
                                                  //check if the corner0 has exactly one of the three possible fields from the three squares
                                                    cornerF0 = 0;
                                                    if ( squareF[0] % 2 == 1 ) cornerF0++;
                                                    if ( squareC[3] % 2 == 1 ) cornerF0++;
                                                    if ( squareD[2] % 2 == 1 ) cornerF0++;
                                                    if (cornerF0 == 1)
                                                    {
                                                      cornerF1 = 0;
                                                      if ( squareF[1] % 2 == 1) cornerF1++;
                                                      if ( squareB[3] % 2 == 1) cornerF1++;
                                                      if ( squareC[2] % 2 == 1) cornerF1++;
                                                      if (cornerF1 == 1)
                                                      {
   //end = true; 
                                                        cornerF2 = 0;
                                                        if ( squareF[2] % 2 == 1) cornerF2++;
                                                        if ( squareB[3] % 2 == 1) cornerF2++;
                                                        if ( squareE[3] % 2 == 1) cornerF2++;

                                                        if (cornerF2 == 1)
                                                        {
                                                          cornerF3 = 0;
                                                          if ( squareF[3] % 2 == 1) cornerF3++;
                                                          if ( squareE[2] % 2 == 1) cornerF3++;
                                                          if ( squareD[3] % 2 == 1) cornerF3++;

                                                          if (cornerF3 == 1)
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
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }}

//TODO: count solutions
  fillHtmlSquare(squareB, "bb");
  fillHtmlSquare(squareC, "cc");
  fillHtmlSquare(squareD, "dd");
  fillHtmlSquare(squareE, "ee");
  fillHtmlSquare(squareA, "aa");
  fillHtmlSquare(squareF, "ff");
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
  resultRightOrder = [ 0b0, 0b0, 0b0, 0b0 ];
  for (var i=0; i<4; i++)
  {
    //console.log("flipSquare()" + i + ": " + dec2bin(square[i]) + " -> " + dec2bin(flipRow(square[i])));
    result[i] = flipRow(square[i]);
  }

  for (var i=0; i<4; i++)
  {
    resultRightOrder[i] = result[3-i];
    //console.log("res1: "+dec2bin(result[i]));
    //console.log("res2: "+dec2bin(resultRightOrder[i]));
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

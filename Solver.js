


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
 
      squareB = cube[i1].slice();

 // 6 flächen (wenn schon gebraucht = continue), flippen, drehen, flächen kontrollieren
    
      for (var j1 = 0; j1 < 6; j1++) 
      {
        if (end) break;

        if (j1 == i1) continue;

        for (var j2 = 0; j2 < 2; j2++)
        {
          if (end) break;

          flippedSquareC = cube[j1].slice();
          if (j2 == 1)
          {
            flippedSquareC = flipSquare(cube[j1]);
          }
 
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
                                    
                                      cornerA0 = 0;
                                      if ( squareA[2] % 2 == 1 ) cornerA0++;
                                      if ( squareB[0] % 2 == 1 ) cornerA0++;
                                      if ( squareC[1] % 2 == 1 ) cornerA0++;
                                      if (cornerA0 == 1)
                                      {
                                        cornerA1 = 0;
                                        if ( squareA[3] % 2 == 1) cornerA1++;
                                        if ( squareC[0] % 2 == 1) cornerA1++;
                                        if ( squareD[1] % 2 == 1) cornerA1++;
                                      //console.log("A3: " + getBitRow(squareA[3]));
                                      //console.log("C0: " + getBitRow(squareC[0]));
                                      //console.log("D1: " + getBitRow(squareD[1]));
                                      //console.log(corner0);
                                        if (cornerA1 == 1)
                                        {

                                          cornerA2 = 0;
                                          if ( squareA[0] % 2 == 1) cornerA2++;
                                          if ( squareD[0] % 2 == 1) cornerA2++;
                                          if ( squareE[1] % 2 == 1) cornerA2++;
                                      //console.log("A0: " + getBitRow(squareA));
                                      //console.log("D0: " + getBitRow(squareD));
                                      //console.log("E1: " + getBitRow(squareE));
                                      //console.log(corner2);

                                          if (cornerA2 == 1)
                                          {
                                            cornerA3 = 0;
                                            if ( squareA[1] % 2 == 1) cornerA3++;
                                            if ( squareB[1] % 2 == 1) cornerA3++;
                                            if ( squareE[0] % 2 == 1) cornerA3++;

                                            if (cornerA3 == 1)
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
                                                    if (squareF[0] % 2 == 1) cornerF0++;
                                                    if (squareC[3] % 2 == 1) cornerF0++;
                                                    if (squareD[2] % 2 == 1) cornerF0++;
                                                    console.log("cF0= "+cornerF0);
                                                    if (cornerF0 == 1)
                                                    {
                                                      cornerF1 = 0;
                                                      if (squareF[1] % 2 == 1) cornerF1++;
                                                      if (squareC[2] % 2 == 1) cornerF1++;
                                                      if (squareB[3] % 2 == 1) cornerF1++;
                                                      console.log("cF1= "+cornerF1);
                                                      if (cornerF1 == 1)
                                                      {
                                                        cornerF2 = 0;
                                                        if (squareF[2] % 2 == 1) cornerF2++;
                                                        if (squareE[3] % 2 == 1) cornerF2++;
                                                        if (squareB[2] % 2 == 1) cornerF2++;
                                                        console.log("cF2= "+cornerF2);
                                                        if (cornerF2 == 1)
                                                        {
                                                          cornerF3 = 0;
                                                          if (squareF[3] % 2 == 1) cornerF3++;
                                                          if (squareE[2] % 2 == 1) cornerF3++;
                                                          if (squareD[3] % 2 == 1) cornerF3++;
                                                          console.log("cF2= "+cornerF3);
                                                          if (cornerF3 == 1)
                                                          {
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
    }
  }

//TODO: count solutions
fillHtmlSquare(squareB, "bb", "white");
fillHtmlSquare(squareC, "cc", "white");
fillHtmlSquare(squareD, "dd", "white");
fillHtmlSquare(squareE, "ee", "white");
fillHtmlSquare(squareA, "aa", "white");
fillHtmlSquare(squareF, "ff", "white"); 



}


function checkEdgeTree(edgeA, edgeB)
{
  for ( var i = 1; i < 3; i++)
    if (!((getBit(edgeA, i) == "0" && getBit(edgeB, i) == "1")||
         ( getBit(edgeA, i) == "1" && getBit(edgeB, i) == "0")) )
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


//  <--           -->
// 11010         01011
// 1   1 ^     ^ 1   1 |
// 0   0 | =>  | 0   0 |
// 1   1 |     | 1   1 v
// 00100         00100
//  -->           <--

//  testSquare = [ 0b11010, 0b01011, 0b00100, 0b01010 ];
//  flippedTestSquare = [ 0b01011, 0b01010, 0b00100, 0b11010 ];


function flipSquare(square)     //TODO: check if order of the direction not changed
{
  
  a = flipRow(square[0]);
  b = flipRow(square[3]);
  c = flipRow(square[2]);
  d = flipRow(square[1]);
  return [a, b, c, d];
}


function flipRow(row)
{
  result = 0b00000;

  for (var i = 0; i<5; i++)
    if (getBit(row, i))
    {
      //console.log(Math.pow(2,4-i));
      result += Math.pow(2, 4-i);
    } 
  return result;
}


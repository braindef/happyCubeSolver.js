

document.addEventListener("DOMContentLoaded", function(event) { 

  fillHtmlCube(blue);
//  solveCube(blue);

  test();

  testSquare = [ 0b11010, 0b00101, 0b01010, 0b01010 ];
  flippedTestSquare = [ 0b01011, 0b01010, 0b01010, 0b10100 ];

  console.log("Row");
  console.log(getBitRow(blue[3][0]));
  console.log("flipedRow");
  console.log(getBitRow(flipRow(blue[3][0])));
  
});


function test()
{

          flippedSquareCc = blue[3].slice();
          {
            //printBitSquare(flippedSquareC);
            console.log("slice()");
            printBitSquare(blue[3].slice());
            console.log("NOslice()");
            printBitSquare(blue[3]);
            var flippedSquareCc = [ 0b0, 0b0, 0b0, 0b0 ];
            for ( var i = 0; i < 4; i++)
              flippedSquareCc[i] = blue[3][i];
            console.log("bytewise copied");
            printBitSquare(flippedSquareCc);
            var flippedSquareCcc = flipSquare(flippedSquareCc.slice());
            console.log("CCCCCCC");
            printBitSquare(flippedSquareCcc);
            console.log("flipped");
            printBitSquare(flippedSquareCc);
          }
          
}

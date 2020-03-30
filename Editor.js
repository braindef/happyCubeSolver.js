

var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;

for (var i = 0; i < buttonsCount; i++) {
    if (buttons[i].id.length == 3) 
    buttons[i].onclick = function(e) {
        var squares = "abcdef";
        for ( var i = 0; i < 6; i++)
        if (squares.substring(i,i+1) == this.id.substring(0,1))
        {
          //this.innerHTML = this.id.substring(0,1);
          for ( var i = 0; i < 6; i++)
          if (this.id.substring(0,1) == squares.substring(i,i+1))
            toggle(selected, i, this.id.substring(2,3), this.id.substring(1,2));
        }
    };
}

function toggle(selected, squareNo, x, y)
{
  console.log("square: " + squareNo + " x: " + x + " y: " + y);
  
  if (debug>0) console.log(selected.data);
  
  if (y == 0)
  {
    var row = selected.data[squareNo][0];
    selected.data[squareNo][0] = toggleKthBit(row, 5-x);

    console.log(selected);
  } 

  if (y == 4)
  {
    row = selected.data[squareNo][2];
    //console.log("row: " + getBitRow(row));

    row = flipRow(row);
    //console.log("row: " + getBitRow(row));

    row = toggleKthBit(row, 5-x);
    //console.log("row: " + getBitRow(row));

    row = flipRow(row);
    //console.log("row: " + getBitRow(row));
    
    selected.data[squareNo][2] = row;

    //printBitSquare(selected.data[squareNo]);
  } 

  if (x == 0)
  {
    row = selected.data[squareNo][1];

    row = flipRow(row);
    console.log("row: " + getBitRow(row));

    row = toggleKthBit(row, 5-y);
    console.log("row: " + getBitRow(row));

    row = flipRow(row);
    console.log("row: " + getBitRow(row));

    selected.data[squareNo][1] = row;
    console.log("row: " + getBitRow(row));
    
    printBitSquare(selected.data[squareNo]);

  }

  if (x == 4)
  {
    row = selected.data[squareNo][3];

    row = toggleKthBit(row, 5-y);
    console.log("row: " + getBitRow(row));

    selected.data[squareNo][3] = row;
  }

//  load(selected);
//  drawCube(selected, selectedSymbols);
drawCube(selected);

  printBitSquare(selected.data[squareNo]);

}


function toggleKthBit(n, k) 
{ 
    return (n ^ (1 << (k-1))); 
} 

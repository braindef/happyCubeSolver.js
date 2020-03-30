

var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;

for (var i = 0; i < buttonsCount; i++) {
    if (buttons[i].id.length == 3) 
    buttons[i].onclick = function(e) {
        var squares = "abcdef";
        for ( var i = 0; i < 6; i++)
        if (squares.substring(i,i+1) == this.id.substring(0,1))
        {
          this.innerHTML = this.id.substring(0,1);
          for ( var i = 0; i < 6; i++)
          if (this.id.substring(0,1) == squares.substring(i,i+1))
            toggle(i, this.id.substring(2,3), this.id.substring(1,2));
        }
    };
}

function toggle(square, x, y)
{
  console.log("square: " + square + " x: " + x + " y: " + y);
  
  if (y == 0)
  {
    row = selected[square][0];
    selected[square][0] = toggleKthBit(row, 5-x);

    console.log(selected);
  } 

  if (y == 4)
  {
    row = selected[square][2];
    //console.log("row: " + getBitRow(row));

    row = flipRow(row);
    //console.log("row: " + getBitRow(row));

    row = toggleKthBit(row, 5-x);
    //console.log("row: " + getBitRow(row));

    row = flipRow(row);
    //console.log("row: " + getBitRow(row));
    
    selected[square][2] = row;

    //printBitSquare(selected[square]);
  } 

  if (x == 0)
  {
    row = selected[square][1];

    row = flipRow(row);
    console.log("row: " + getBitRow(row));

    row = toggleKthBit(row, 5-y);
    console.log("row: " + getBitRow(row));

    row = flipRow(row);
    console.log("row: " + getBitRow(row));

    selected[square][1] = row;
    console.log("row: " + getBitRow(row));
    
    printBitSquare(selected[square]);

  }

  if (x == 4)
  {
    row = selected[square][3];

    row = toggleKthBit(row, 5-y);
    console.log("row: " + getBitRow(row));

    selected[square][3] = row;
  }

  load("selected");
  fillHtmlCube(selected, selectedSymbols);

  printBitSquare(selected[square]);

}


function toggleKthBit(n, k) 
{ 
    return (n ^ (1 << (k-1))); 
} 

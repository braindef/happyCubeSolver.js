

//fields in html code
/*
fields = [["f00", "f01", "f02", "f03", "f04"],
          ["f10", "f11", "f12", "f13", "f14"],
          ["f20", "f21", "f22", "f23", "f24"],
          ["f30", "f31", "f32", "f33", "f34"],
          ["f40", "f41", "f42", "f43", "f44"]];
*/


document.addEventListener("DOMContentLoaded", function(event) { 

  changeFieldColor("#afafaf", "button");
    changeFieldColor("#afdde9", "#blue");
    changeFieldColor("#aaf400", "#green");
    changeFieldColor("#fcfc77", "#yellow");
    changeFieldColor("#ffa20b", "#orange");
    changeFieldColor("#fa7777", "#red");
    changeFieldColor("#ff7cff", "#purple");
    changeFieldColor("#afafff", "#nature");
    changeFieldColor("#00af00", "#fruits");
    changeFieldColor("#fcfcaa", "#animals");
    changeFieldColor("#ff7f2a", "#smiley");
    changeFieldColor("#fa0000", "#transport");
    
    changeFieldColor("#000000", "#solve");
  
  fillHtmlCube(selected, selectedSymbols);
  
});



function load(color)
{
    selectedSymbols = defaultSymbols;
  if (color == "blue")
  {
    changeFieldColor("#afdde9", "button");
  
    selected = blue;
  }
  if (color == "green")
  {
    changeFieldColor("#aaf400", "button");
  
    selected = green;
  }
  if (color == "yellow")
  {
    changeFieldColor("#fcfc77", "button");
  
    selected = yellow;
  }
  if (color == "orange")
  {
    changeFieldColor("#ffa20b", "button");
  
    selected = orange;
  }
  if (color == "red")
  {
    changeFieldColor("#fa7777", "button");
  
    selected = red;
  }
  if (color == "purple")
  {
    changeFieldColor("#ff7cff", "button");
  
    selected = purple;
  }

  if (color == "nature")
  {
    changeFieldColor("#afafe9", "button");
  
    selected = purple;
    selectedSymbols = natureSymbols;
  }
  
  if (color == "fruits")
  {
    changeFieldColor("#00af00", "button");
  
    selected = purple;
    selectedSymbols = fruitSymbols;
  }
  
  if (color == "animals")
  {
    changeFieldColor("#fcfcaa", "button");
  
    selected = animals;
    selectedSymbols = animalSymbols;
  }
  
  if (color == "smiley")
  {
    changeFieldColor("#ff7f2a", "button");
  
    selected = smiley;
    selectedSymbols = smileySymbols;
  }
  
  if (color == "transport")
  {
    changeFieldColor("#fa0000", "button");
  
    selected = smiley;
    selectedSymbols = smileySymbols;
  }
  
  

    changeFieldColor("#afdde9", "#blue");
    changeFieldColor("#aaf400", "#green");
    changeFieldColor("#fcfc77", "#yellow");
    changeFieldColor("#ffa20b", "#orange");
    changeFieldColor("#fa7777", "#red");
    changeFieldColor("#ff7cff", "#purple");
    changeFieldColor("#afafff", "#nature");
    changeFieldColor("#00af00", "#fruits");
    changeFieldColor("#fcfcaa", "#animals");
    changeFieldColor("#ff7f2a", "#smiley");
    changeFieldColor("#fa0000", "#transport");
    
    
    changeFieldColor("#000000", "#solve");
    
    fillHtmlCube(selected, selectedSymbols);
}

function changeFieldColor(color, item){
    Array.from(document.querySelectorAll(item)).map(function(button) {
               button.style.backgroundColor=color;
    })
}



function fillHtmlCube(cube, symbols)
{
  pos = "abcdef";
  for (var i=0; i<6; i++)
  {
    //console.log(cube[i] +" " +pos.charAt(i));
    fillHtmlSquare(cube[i], pos.charAt(i), "white", symbols[i]);
  }
}


//TODO in a loop with different field vars
function fillHtmlSquare(square, placement, color, symbol)
{
  row = [ 0b0, 0b0, 0b0, 0b0 ];
  for (var i = 0; i < 4; i++)
    for (var j = 0; j < 5; j++)
    {                 // aa 0 1
      row[0] = placement + "0" + (4-j);     //top
      row[1] = placement + j + "0";       //left
      row[2] = placement + "4" + j;       //bottom
      row[3] = placement + (4-j) + "4";
      
      if (!getBit(square[i], j))
      {
        document.getElementById(row[i]).style.backgroundColor = color;
      }
    }
    
    document.getElementById(placement+"22").innerHTML = symbol;
    
    //printBitSquare(square); 
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
  console.log("*******************");
  console.log("1 -> " + getBit(square[0], 0) + " " + getBit(square[0], 1) + " " + getBit(square[0], 2) + " " + getBit(square[0], 3) + " " + getBit(square[0], 4) + " <- 0");
  console.log("     " + getBit(square[1], 1) + "       " + getBit(square[3], 3));
  console.log("     " + getBit(square[1], 2) + "       " + getBit(square[3], 2));
  console.log("     " + getBit(square[1], 3) + "       " + getBit(square[3], 1));
  console.log("2 -> " + getBit(square[2], 4)+" " + getBit(square[2], 3) + " " + getBit(square[2], 2)+ " " + getBit(square[2], 1) + " " + getBit(square[2], 0) + " <- 3");

}

function getVarName(v) {
    for (var key in window) {
        if (window[key] === v)
            return key;
    }
}


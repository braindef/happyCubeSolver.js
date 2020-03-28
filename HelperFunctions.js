

function squareDec2bin(square)
{
  result = "";
  for (var i = 0; i < 4; i++)
    result += " | " + i + ": " + dec2bin(square[i]);
    
    return result.substr(3);
}


function dec2bin(dec)
{
  if (debug) console.log("dec2bin()");
  res = "00000" + (dec >>> 0).toString(2);
  return res.substring(res.length-5);
}

//fields in html code
fields = [["f00", "f01", "f02", "f03", "f04"],
          ["f10", "f11", "f12", "f13", "f14"],
          ["f20", "f21", "f22", "f23", "f24"],
          ["f30", "f31", "f32", "f33", "f34"],
          ["f40", "f41", "f42", "f43", "f44"]];


function fillHtmlCube(cube)
{
  pos = "abcdef";
  for (var i=0; i<6; i++)
  {
    console.log(cube[i] +" " +pos.charAt(i));
    fillHtmlSquare(cube[i], pos.charAt(i));
  }
}


//TODO in a loop with different field vars
function fillHtmlSquare(square, placement)
{

//  for (var i = 0; i < 4; i++)
    for (var j = 0; j < 5; j++)
    {                 // aa 0 1
      var rowTop = placement + "0" + j;
      var rowLeft = placement + (4-j) + "0";
      var rowBottom = placement + "4" + (4-j);
      var rowRight = placement + j + "4";
      
      if (getBit(square[0], j))
        document.getElementById(rowTop).style.backgroundColor = "white";
      
      if (getBit(square[1], j))
        document.getElementById(rowLeft).style.backgroundColor = "white";
      
      if (getBit(square[2], j))
        document.getElementById(rowBottom).style.backgroundColor = "white";
      
      if (getBit(square[3], j))
        document.getElementById(rowRight).style.backgroundColor = "white";
    }
}


  function getBit(row, bitPosition)
  {
    return !(( row >>> bitPosition ) & 1);
  }


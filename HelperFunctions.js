


function dec2bin(dec){
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



function fillHtmlSquare(square, placement)
{

  for (var j = 0; j < 5; j++)
  {
    var field = placement+"0"+j;
    if (debug) console.log(field);
    if (dec2bin(square[0]).charAt(j) == "0") document.getElementById(field).style.backgroundColor = "white";
    else
      document.getElementById(field).style.backgroundColor = "gray";
  }

  for (var j = 0; j < 5; j++)
  {
    field = placement+(4-j)+"0";
    if (dec2bin(square[1]).charAt(j) == "0") document.getElementById(field).style.backgroundColor = "white";
    else
      document.getElementById(field).style.backgroundColor = "gray";
  }

  for (var j = 0; j < 5; j++)
  {
    if (dec2bin(square[2]).charAt(j) == "0") document.getElementById(placement+"4"+(4-j)).style.backgroundColor = "white";
    else
      document.getElementById(placement+"4"+(4-j)).style.backgroundColor = "gray";
  }

  for (var j = 0; j < 5; j++)
  {
    field = placement+j+"4";
    if (debug) console.log(field);
    if (dec2bin(square[3]).charAt(j) == "0") document.getElementById(field).style.backgroundColor = "white";
    else
      document.getElementById(field).style.backgroundColor = "gray";
  }

}

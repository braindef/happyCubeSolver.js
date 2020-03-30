
class Empty{
  constructor() 
  {
    this.name = "empty";

    this.outerColor = "#afafaf";
    this.innerColor = "#bebebe";

    this.background = "";

    this.symbols = [ "A", "B", "C", "D", "E", "F" ];

    this.data  = 
[ [ 0b01011, 0b11110, 0b01111, 0b11111 ],
  [ 0b11111, 0b11111, 0b11111, 0b11111 ],
  [ 0b11111, 0b11111, 0b11111, 0b11111 ],
  [ 0b11111, 0b11111, 0b11111, 0b11111 ],
  [ 0b11111, 0b11111, 0b11111, 0b11111 ],
  [ 0b11111, 0b11111, 0b11111, 0b11111 ] ];
//  edges:

//   upper,   left,    lower,   right
//  rotate square clockwise

  }

}

//var selected = new Empty();

class Blue {
  constructor() 
  {
    this.name = "blue";

    this.outerColor = "#afdde9";
    this.innerColor = "#aad6e1";

    this.background = "";

    this.symbols = [ "A", "B", "C", "D", "E", "F" ];

    this.data =
[ [ 0b00100, 0b00100, 0b00100, 0b00100 ],
  [ 0b11011, 0b00101, 0b01010, 0b11010 ],
  [ 0b11010, 0b01011, 0b00100, 0b01010 ],
  [ 0b10100, 0b01011, 0b01010, 0b01010 ],
  [ 0b01010, 0b00100, 0b00100, 0b00100 ],
  [ 0b10101, 0b11011, 0b10101, 0b11011 ] ];
  }
}

class Green {
  constructor() 
  {
    this.name = "green";

    this.outerColor = "#aaf400";
    this.innerColor = "#9ae400";

    this.background = "";

    this.symbols = [ "A", "B", "C", "D", "E", "F" ];

    this.data =
[ [ 0b00101, 0b00100, 0b00100, 0b11010 ],
  [ 0b11010, 0b10101, 0b11011, 0b01011 ],
  [ 0b11011, 0b00101, 0b00100, 0b10100 ],
  [ 0b00100, 0b11010, 0b11011, 0b00101 ],
  [ 0b01010, 0b01010, 0b00100, 0b01010 ],
  [ 0b01010, 0b00100, 0b01010, 0b00100 ] ];
  }
}

class Yellow {
  constructor() 
  {
    this.name = "yellow";

    this.outerColor = "#fcfc77";
    this.innerColor = "#ecec67";

    this.background = "";

    this.symbols = [ "A", "B", "C", "D", "E", "F" ];

    this.data =
[ [ 0b10101, 0b11011, 0b00101, 0b11010 ],
  [ 0b11010, 0b00101, 0b01010, 0b00100 ],
  [ 0b00100, 0b01010, 0b01010, 0b00100 ],
  [ 0b10100, 0b00011, 0b01010, 0b01010 ],
  [ 0b10100, 0b01011, 0b01010, 0b00100 ],
  [ 0b10100, 0b00111, 0b10100, 0b01011 ] ];
  }
}

class Orange {
  constructor() 
  {
    this.name = "orange";

    this.outerColor = "#ffa20b";
    this.innerColor = "#ef9200";

    this.background = "";

    this.symbols = [ "A", "B", "C", "D", "E", "F" ];

    this.data =
[ [ 0b10101, 0b00011, 0b01010, 0b11010 ],
  [ 0b01100, 0b00100, 0b00110, 0b00100 ],
  [ 0b00100, 0b11010, 0b10101, 0b01011 ],
  [ 0b01100, 0b01010, 0b11010, 0b00101 ],
  [ 0b11010, 0b10101, 0b11011, 0b01001 ],
  [ 0b00100, 0b00100, 0b01010, 0b00010 ] ];
  }
}



class Red {
  constructor() 
  {
    this.name = "red";

    this.outerColor = "#fa7777";
    this.innerColor = "#ea6767";

    this.background = "";

    this.symbols = [ "A", "B", "C", "D", "E", "F" ];

    this.data =
[ [ 0b00100, 0b11000, 0b10101, 0b01011 ],
  [ 0b10110, 0b11011, 0b10011, 0b01011 ],
  [ 0b01100, 0b10100, 0b11011, 0b00101 ],
  [ 0b00100, 0b01000, 0b01010, 0b01010 ],
  [ 0b01010, 0b10100, 0b01011, 0b01100 ],
  [ 0b00100, 0b00100, 0b01010, 0b00100 ] ];
  }
}




class Purple {
  constructor() 
  {
    this.name = "purple";

    this.outerColor = "#ff7cff";
    this.innerColor = "#ef6cef";

    this.background = "";

    this.symbols = [ "A", "B", "C", "D", "E", "F" ];

    this.data =
[ [ 0b10110, 0b00111, 0b10100, 0b00111 ],
  [ 0b11011, 0b00011, 0b01010, 0b10100 ],
  [ 0b00100, 0b00010, 0b11010, 0b00111 ],
  [ 0b11000, 0b01011, 0b10100, 0b01011 ],
  [ 0b00100, 0b01000, 0b01010, 0b00100 ],
  [ 0b00110, 0b01010, 0b10100, 0b00011 ] ];
  }
}

class Nature {
  constructor() 
  {
    this.name = "nature";

    this.outerColor = "#afafff";
    this.innerColor = "#9f9fef";

    this.background = "";

    this.symbols = [ "☀️", "☁️", "🌊", "🔥", "🌙", "⛰️" ];

    this.data =
[ [ 0b00100, 0b01010, 0b10100, 0b01011 ],
  [ 0b01010, 0b00100, 0b11010, 0b00101 ],
  [ 0b01010, 0b10100, 0b01011, 0b00100 ],
  [ 0b00100, 0b11010, 0b00101, 0b01010 ],
  [ 0b11011, 0b10101, 0b01011, 0b10100 ],
  [ 0b01010, 0b00100, 0b11010, 0b00101 ] ];
  }
}




//  changeFieldColor("#afafaf", "button");
//  changeFieldColor("#afdde9", "#blue");
//  changeFieldColor("#aaf400", "#green");
//  changeFieldColor("#fcfc77", "#yellow");
//  changeFieldColor("#ffa20b", "#orange");
//  changeFieldColor("#fillHtmlCube", "#red");
//  changeFieldColor("#ff7cff", "#purple");
//  changeFieldColor("#afafff", "#nature");
//  changeFieldColor("#00af00", "#fruits");
//  changeFieldColor("#fcfcaa", "#animals");
//  changeFieldColor("#ff7f2a", "#smiley");
//  changeFieldColor("#fa0000", "#transport");
//  changeFieldColor("#af7caf", "#shapes");

class Fruits {
  constructor() 
  {
    this.name = "fruits";

    this.outerColor = "#00af00";
    this.innerColor = "#008f00";

    this.background = "";

    this.symbols = [ "🍏", "🍊", "🍇", "🍅", "🍋", "🍌" ];

    this.data =
[ [ 0b00100, 0b10100, 0b01011, 0b01010 ],
  [ 0b11010, 0b00101, 0b00100, 0b01010 ],
  [ 0b00101, 0b00100, 0b01010, 0b11010 ],
  [ 0b00101, 0b10100, 0b11011, 0b11011 ],
  [ 0b10100, 0b01011, 0b01010, 0b00100 ],
  [ 0b10100, 0b01011, 0b01010, 0b00100 ] ];
  }
}

class Animals {
  constructor() 
  {
    this.name = "animals";

    this.outerColor = "#fcfcaa";
    this.innerColor = "#ecec9a";

    this.background = "";

    this.symbols = [ "🐈", "🕊️", "🐞", "🐟", "🧸", "🐕" ];


    this.data =
[[ 0b11011, 0b00101, 0b00100, 0b11010 ],
  [ 0b01010, 0b00100, 0b01010, 0b00100 ],
  [ 0b11011, 0b01011, 0b00100, 0b10100 ],
  [ 0b00100, 0b01010, 0b00100, 0b01010 ],
  [ 0b11011, 0b00101, 0b00100, 0b11010 ],
  [ 0b11011, 0b01011, 0b00100, 0b10100 ] ];
  }
}

class Smiley {
  constructor() 
  {
    this.name = "smiley";

    this.outerColor = "#ff7f2a";
    this.innerColor = "#ef6f1a";

    this.background = "";

    this.symbols = [ "😄", "😢", "☺️", "😐", "😮", "☹️" ];


    this.data =
[ [ 0b00100, 0b11010, 0b00101, 0b00100 ],
  [ 0b01011, 0b01010, 0b11010, 0b11011 ],
  [ 0b00100, 0b00100, 0b10100, 0b01011 ],
  [ 0b00100, 0b00100, 0b11010, 0b00101 ],
  [ 0b00100, 0b00100, 0b10100, 0b01011 ],
  [ 0b11010, 0b11011, 0b01011, 0b01010 ] ];
  }
}

class Transport {
  constructor() 
  {
    this.name = "transport";

    this.outerColor = "#ea0000";
    this.innerColor = "#ca0000";

    this.background = "";

    this.symbols = [ "🚂", "🚌", "⛵", "🚲", "🛩️", "🚗" ];

    this.data =
[[ 0b10101, 0b11011, 0b11011, 0b11011 ],
  [ 0b00100, 0b01010, 0b01010, 0b00100 ],
  [ 0b00100, 0b01010, 0b00100, 0b00100 ],
  [ 0b00100, 0b01010, 0b00100, 0b00100 ],
  [ 0b10101, 0b11011, 0b11011, 0b11011 ],
  [ 0b00100, 0b00100, 0b01010, 0b01010 ] ];
  }
}
               
class Shapes {
  constructor() 
  {
    this.name = "shapes";

    this.outerColor = "#af7caf";
    this.innerColor = "#9f6c9f";

    this.background = "";

    this.symbols = [ "😄", "😢", "☺️", "😐", "😮", "☹️" ];

    this.data =
[ [ 0b01010, 0b01010, 0b00100, 0b01010 ],
  [ 0b11011, 0b00101, 0b00100, 0b10100 ],
  [ 0b10100, 0b01011, 0b01010, 0b01010 ],
  [ 0b00101, 0b01010, 0b01010, 0b11010 ],
  [ 0b11011, 0b00101, 0b00100, 0b10100 ],
  [ 0b11011, 0b00101, 0b00100, 0b10100 ] ];
  }               
}


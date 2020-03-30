
var debug = false;


//               oben,   links,   unten,   rechts
//               rotate square clockwise

var blue =   [ [ 0b00100, 0b00100, 0b00100, 0b00100 ],
               [ 0b11011, 0b00101, 0b01010, 0b11010 ],
               [ 0b11010, 0b01011, 0b00100, 0b01010 ],
               [ 0b10100, 0b01011, 0b01010, 0b01010 ],
               [ 0b01010, 0b00100, 0b00100, 0b00100 ],
               [ 0b10101, 0b11011, 0b10101, 0b11011 ] ];


var green  = [ [ 0b00101, 0b00100, 0b00100, 0b11010 ],
               [ 0b11010, 0b10101, 0b11011, 0b01011 ],
               [ 0b11011, 0b00101, 0b00100, 0b10100 ],
               [ 0b00100, 0b11010, 0b11011, 0b00101 ],
               [ 0b01010, 0b01010, 0b00100, 0b01010 ],
               [ 0b01010, 0b00100, 0b01010, 0b00100 ] ];


var yellow = [ [ 0b10101, 0b11011, 0b00101, 0b11010 ],
               [ 0b11010, 0b00101, 0b01010, 0b00100 ],
               [ 0b00100, 0b01010, 0b01010, 0b00100 ],
               [ 0b10100, 0b00011, 0b01010, 0b01010 ],
               [ 0b10100, 0b01011, 0b01010, 0b00100 ],
               [ 0b10100, 0b00111, 0b10100, 0b01011 ] ];
               

var orange = [ [ 0b10101, 0b00011, 0b01010, 0b11010 ],
               [ 0b01100, 0b00100, 0b00110, 0b00100 ],
               [ 0b00100, 0b11010, 0b10101, 0b01011 ],
               [ 0b01100, 0b01010, 0b11010, 0b00101 ],
               [ 0b11010, 0b10101, 0b11011, 0b01001 ],
               [ 0b00100, 0b00100, 0b01010, 0b00010 ] ];


var red    = [ [ 0b00100, 0b11000, 0b10101, 0b01011 ],
               [ 0b10110, 0b11011, 0b10011, 0b01011 ],
               [ 0b01100, 0b10100, 0b11011, 0b00101 ],
               [ 0b00100, 0b01000, 0b01010, 0b01010 ],
               [ 0b01010, 0b10100, 0b01011, 0b01100 ],
               [ 0b00100, 0b00100, 0b01010, 0b00100 ] ];

            
var purple = [ [ 0b10110, 0b00111, 0b10100, 0b00111 ],
               [ 0b11011, 0b00011, 0b01010, 0b10100 ],
               [ 0b00100, 0b00010, 0b11010, 0b00111 ],
               [ 0b11000, 0b01011, 0b10100, 0b01011 ],
               [ 0b00100, 0b01000, 0b01010, 0b00100 ],
               [ 0b00110, 0b01010, 0b10100, 0b00011 ] ];
               
var defaultSymbols = [ "A", "B", "C", "D", "E", "F" ];
               
var nature = [ [ 0b00100, 0b01010, 0b10100, 0b01011 ],
               [ 0b01010, 0b00100, 0b11010, 0b00101 ],
               [ 0b01010, 0b10100, 0b01011, 0b00100 ],
               [ 0b00100, 0b11010, 0b00101, 0b01010 ],
               [ 0b11011, 0b10101, 0b01011, 0b10100 ],
               [ 0b01010, 0b00100, 0b11010, 0b00101 ] ];
var natureSymbols = [ "☀️", "☁️", "🌊", "🔥", "🌙", "⛰️" ];

var fruits = [ [ 0b00100, 0b10100, 0b01011, 0b01010 ],
               [ 0b11010, 0b00101, 0b00100, 0b01010 ],
               [ 0b00101, 0b00100, 0b01010, 0b11010 ],
               [ 0b00101, 0b10100, 0b11011, 0b11011 ],
               [ 0b10100, 0b01011, 0b01010, 0b00100 ],
               [ 0b10100, 0b01011, 0b01010, 0b00100 ] ];
var fruitSymbols = [ "🍏", "🍊", "🍇", "🍅", "🍋", "🍌" ];
               
var selected = nature;
var selectedSymbols = defaultSymbols;


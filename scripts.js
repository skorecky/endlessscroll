var colors = ["lightsalmon",
"salmon",
"darksalmon",
"lightcoral",
"indianred",
"crimson",
"firebrick",
"red",
"darkred",
"coral",
"tomato",
"orangered",
"gold",
"orange",
"darkorange",
"lightyellow",
"lemonchiffon",
"lightgoldenrodyellow",
"papayawhip",
"moccasin",
"peachpuff",
"palegoldenrod",
"khaki",
"darkkhaki",
"yellow",
"lawngreen",
"chartreuse",
"limegreen",
"lime",
"forestgreen",
"green",
"darkgreen",
"greenyellow",
"yellowgreen",
"springgreen",
"mediumspringgreen",
"lightgreen",
"palegreen",
"darkseagreen",
"mediumseagreen",
"seagreen",
"olive",
"darkolivegreen",
"olivedrab",
"lightcyan",
"cyan",
"aqua",
"aquamarine",
"mediumaquamarine",
"paleturquoise",
"turquoise",
"mediumturquoise",
"darkturquoise",
"lightseagreen",
"cadetblue",
"darkcyan",
"teal",
"powderblue",
"lightblue",
"lightskyblue",
"skyblue",
"deepskyblue",
"lightsteelblue",
"dodgerblue",
"cornflowerblue",
"steelblue",
"royalblue",
"blue",
"mediumblue",
"darkblue",
"navy",
"midnightblue",
"mediumslateblue",
"slateblue",
"darkslateblue",
"lavender",
"thistle",
"plum",
"violet",
"orchid",
"fuchsia",
"magenta",
"mediumorchid",
"mediumpurple",
"blueviolet",
"darkviolet",
"darkorchid",
"darkmagenta",
"purple",
"indigo",
"pink",
"lightpink",
"hotpink",
"deeppink",
"palevioletred",
"mediumvioletred",
"white",
"snow",
"honeydew",
"mintcream",
"azure",
"aliceblue",
"ghostwhite",
"whitesmoke",
"seashell",
"beige",
"oldlace",
"floralwhite",
"ivory",
"antiquewhite",
"linen",
"lavenderblush",
"mistyrose",
"gainsboro",
"lightgray",
"silver",
"darkgray",
"gray",
"dimgray",
"lightslategray",
"slategray",
"darkslategray",
"cornsilk",
"blanchedalmond",
"bisque",
"navajowhite",
"wheat",
"burlywood",
"tan",
"rosybrown",
"sandybrown",
"goldenrod",
"peru",
"chocolate",
"saddlebrown",
"sienna",
"brown",
"maroon"]


var html = "<p> <img src='https://picsum.photos/400/400'/>"
html += "<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
html += "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
html += "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
html += "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in "
html += "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
html += "sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
html += "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur "
html += "sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
html += "mollit anim id est laborum. proident, sunt in culpa qui officia des.</span></p>"

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

var addPannel = function() {
  var node = document.createElement("li");
  node.style.backgroundColor = colors.random();
  node.innerHTML = html;
  // node.style.height = window.innerHeight + "px";
  document.getElementById("list").appendChild(node);
}

var init = function() {
  addPannel();
};

setInterval(function(){
  addPannel();
}, 500);

 init(); // Run at launch

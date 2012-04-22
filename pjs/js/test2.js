// var print = console.log;
var print = document.write;


window.addEventListener('load', unitDoc, false);
function unitDoc(){
  stringTest();
}

function stringTest(){
  var s = new String('abc');
  print(s[1], 'abc'[2]);
}


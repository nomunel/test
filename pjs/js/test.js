var print = console.log;
function write(v){
	document.write(v);
}

window.addEventListener('load', unitDoc, false);
function unitDoc(){
//  stringPropTest();
  DiagnosticTypeForm();
}

/* stringPropTest */
function stringPropTest(){
  var s = new String('abc');
  print(
    s[1],
    'abc'[2]
  );
}


/* DiagnosticTypeForm */
function DiagnosticTypeForm(){
  alert('a');
}
window.addEventListener('load', unitDoc, false);
function unitDoc(){
//
function write(v){
	document.write(v);
}
write(s[1]);
//
}

var print = console.log;

var s = new String('abc');
print(
s[1],
'abc'[2]
);


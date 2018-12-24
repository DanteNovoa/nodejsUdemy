console.log('inicio del programa|');

setTimeout( function(){
    console.log("Primer timetout");

}, 3000);

setTimeout( function(){
    console.log("Segundo timetout");
}, 0);
setTimeout( function(){
    console.log("Tercer timetout");
}, 0);

console.log("Fin del programa");
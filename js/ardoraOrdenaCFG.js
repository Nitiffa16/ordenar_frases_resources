var timeAct=360; timeIni=360; timeBon=1;
var successes=0; successesMax=5; attempts=0; attemptsMax=3;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#DDE3E3"; colorText="#000000"; colorSele="#8D649B";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="FELICIDADES "; messageTime="TU PUEDES "; messageError="VUELVE A INTENTARLO "; messageErrorG="VUELVE A INTENTARLO "; messageAttempts="NO TE RINDAS "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="b3JkZW5hcl9mcmFzZXM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["bWFzIHZhbGUgcGFqYXJvIGVuIG1hbm8gcXVlIGNpZW50byB2b2xhbmRv","cGVycm8gbGFkcmFkb3IgcG9jbyBtb3JkZWRvcg==","YSBwYWxhYnJhcyBuZWNpYXMsIG9pZG9zIHNvcmRvcw==","bm8gaGF5IG1hbCBxdWUgcG9yIGJpZW4gbm8gdmVuZ2E=","YSBjYWJhbGxvIHJlZ2FsYWRvIG5vIGxlIG1pcmVzIGVsIGRpZW50ZQ=="];imaW=["pajaros.jpg","perro.jpg","oidos.jpg","bien_mal.jpg","caballo.jpg"];queW=["","","","",""];altW=["","","","",""];c=[42,28,31,32,40];
var auW=["","","","",""];
var actMaxWidth="900"; actMaxHeight="400";indexG=0;profG=0;dirMedia="ordenar_frases_resources/media/"; textBNext="siguiente :P";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];

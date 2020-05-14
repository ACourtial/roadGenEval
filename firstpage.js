var id =0;
var itime=Date.now();
var page=0;
var url = "/data/first_test.txt";



var tab_e=[["i1","p12"],["i1","p12"]]
var tab_r=[["i1","p12"],["i1","p12"]]
var sequence_e=tab_e[id%8];
var sequence_r=tab_r[id%3];

// TODO: GET_id
var myInit = { method: 'GET'};
fetch(url,myInit).then(function(response) {response.text().then(function(text) {
    console.log(text);});
});

//Affichage init
document.getElementById("eval").style.display = "none";
document.getElementById("rank").style.display = "none";
document.getElementById("out").style.display = "none";

//Boutton et changeent de page
const butt=document.querySelectorAll(".button");
console.log(butt);
for (let but=0; but< butt.length;but++){
  console.log(butt[but]);
  butt[but].addEventListener("click", function() {
  var saisie=null;// TODO: recupérer la saisie
  registre(saisie);
    page+=1;
  console.log(page);
  reinitialiser();
  open_next(page);
});
};

function registre(saisie){
  // TODO:register la saisie
  console.log('register');
};

function open_next(page){

  if(page==7 ||page==14){
    document.getElementById("eval").style.display = "none";
    // TODO: choix image_rank
    document.getElementById("rank").style.display = "inherit";
  } else if (page==15) {
    document.getElementById("rank").style.display = "none";
    document.getElementById("out").style.display = "inherit";
  }else if (page>15){
    console.log('merci');
   // TODO: page de merci
 }else{
    document.getElementById("entrance").style.display = "none";
    document.getElementById("rank").style.display = "none";
    // TODO: choix image_eval
    document.getElementById("image_row").innerHTML=  "<img src=\"images\\image_eval\\Initial\\i1.png\" class=\"img\">  <img src=\"images\\fleche.jpg\" class=\"imgdemi\"><img src=\"images\\image_eval\\pix2pix\\p1.png\" class=\"img\">"
    document.getElementById("eval").style.display = "inherit";

  }
};
function reinitialiser(){
  for (let elem=0; elem<butform.length;elem++){
    butform[elem].disabled = true;
  }
  var f = document.querySelectorAll('.form');

  for (var question = 0; question <f.length; question++) {
    b=f[question].length;
    var fill=false
    for (var opt=0; opt<b;opt++){
      f[question][opt].checked=false;
    }
    if (!fill) cansubmit = false;
  }
}

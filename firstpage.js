var id =0;
var itime=Date.now();
var page=0;
var url = "https://acourtial.github.io/roadGenEval/data/first_test.csv";



var tab_e=[["r1","p2","c3","r5","p6","c7"," ","r9","p10","c11","r13","p14","c15"],
           ["p1","c2","r4","p5","c6","r8"," ","p9","c10","r12","p13","c14","r16"],
           ["c1","r3","p4","c5","r7","p8"," ","c9","r11","p12","c13","r15","p16"],
           ["r2","p3","c4","r6","p7","c8"," ","r10","p11","c12","r14","p15","c16"],

           ["r9","p10","c11","r13","p14","c15"," ","r1","p2","c3","r5","p6","c7"],
           ["p9","c10","r12","p13","c14","r16"," ","p1","c2","r4","p5","c6","r8"],
           ["c9","r11","p12","c13","r15","p16"," ","c1","r3","p4","c5","r7","p8"],
           ["r10","p11","c12","r14","p15","c16"," ","r2","p3","c4","r6","p7","c8"]
         ]
var tab_r=[[1,5],[2,4],[3,6],[5,1],[4,2],[6,3]]



var saisie=0;
var sequence_e=tab_e[id%8];
var sequence_r=tab_r[id%3];

window.addEventListener('beforeunload',function (event){
  // Cancel the event as stated by the standard.
  event.preventDefault();
  // Chrome requires returnValue to be set.
  event.returnValue = '';

});




var myInit = { method: 'GET'};
fetch(url,myInit).then(function(response) {response.text().then(function(text) {
  var data = text.split('\n');
  var derniere_ligne=data[data.length-2].split(',');
  id=parseInt(derniere_ligne[0],10)+1;
  })
});

document.getElementById('start').addEventListener('click',function(){
  console.log(id);
  saisie=String(id);
  sequence_e=tab_e[id%8];
  sequence_r=tab_r[id%3];
});



const butfin=document.querySelectorAll(".cansubfinal");

//Affichage init
document.getElementById("eval").style.display = "none";
document.getElementById("rank").style.display = "none";
document.getElementById("out").style.display = "none";

//Boutton et changement de page
const butt=document.querySelectorAll(".button");

for (let but=0; but< butt.length;but++){
  butt[but].addEventListener("click", function() {
  saisir(page);
  reinitialiser();

  open_next(page);
  page+=1;
});
};

butfin[0].addEventListener('click',function(){
  time=Date.now()-itime;
  registre(saisie,time);
});

function saisir(page){
  if(page==7 ||page==14){
    var im=sequence_r[(page-1)%6];
    var f =document.querySelectorAll(".empty_square");
    saisie+=" rank 2"+im+",";
    for (let question = 0; question <f.length; question++) {
      saisie+=f[question].querySelectorAll(".img")[0].id+",";
    }

  } else if (page==15) {
    saisie+=" infos,"
    var f = document.querySelectorAll('.infos');
    for (let question = 0; question <f.length; question++) {
      b=f[question].length;
      console.log(f[question]);
      for (let opt=0; opt<b;opt++){
        if (f[question][opt].checked) {saisie+=opt+",";}
      }
    }
  }else if (page>14 ||page<1){
    console.log("no change");
 }else{
    var im=sequence_e[page-1];
    saisie+=" eval "+im+",";
    var f = document.querySelectorAll('.form');
    for (let question = 0; question <f.length; question++) {
      b=f[question].length;
      for (let opt=0; opt<b;opt++){
        if (f[question][opt].checked) {saisie+=opt+",";}
      }
  }

}}


function registre(saisie,time){
  // TODO:register la saisie et du time
  console.log('register a coder ');
  console.log(saisie);
  console.log(time);
};

function open_next(page){

  if(page==6 ||page==13){

    document.getElementById("eval").style.display = "none";
        var im=sequence_r[page%6];

        document.getElementById("init_image").innerHTML="<img src=\"images\\image_rank\\i2"+im+".png\"  class=\"img\" draggable=\"false\">";
        document.getElementById("empty_row").innerHTML="<div class=\"empty_square\" value=\"1\"></div><div class=\"empty_square\" value=\"2\"></div><div class=\"empty_square\" value=\"2\"></div><div class=\"empty_square\" value=\"2\"></div>"
        document.getElementById("row").innerHTML="<img src=\"images\\image_rank\\p2"+im+".png\" draggable=\"true\" class=\"img\" id=\"p\"><img src=\"images\\image_rank\\r2"+im+".png\" draggable=\"true\" class=\"img\" id=\"r\"><img src=\"images\\image_rank\\u2"+im+".png\" draggable=\"true\" class=\"img\" id=\"u\" ><img src=\"images\\image_rank\\c2"+im+".png\" draggable=\"true\" class=\"img\" id=\"c\">";
    document.getElementById("rank").style.display = "inherit";
    draganddrop();
  } else if (page==14) {
    document.getElementById("rank").style.display = "none";
    document.getElementById("out").style.display = "inherit";
  }else if (page>14){
    console.log('merci');
   // TODO: page de merci
 }else{
    document.getElementById("entrance").style.display = "none";
    document.getElementById("rank").style.display = "none";
    var im=sequence_e[page];
    document.getElementById("image_row").innerHTML=  "<img src=\"images\\image_eval\\i"+im.substring(1,im.length)+".png\" class=\"img\">  <img src=\"images\\fleche.jpg\" class=\"imgdemi\"><img src=\"images\\image_eval\\"+im+".png\" class=\"img\">"
    document.getElementById("eval").style.display = "inherit";

  }
};
function reinitialiser(){
  for (let elem=0; elem<butform.length;elem++){
    butform[elem].disabled = true;
  }
  for (let elem=0; elem<butfin.length;elem++){
    butfin[elem].disabled = true;
  }
  for (let elem=0; elem<butrank.length;elem++){
    butrank[elem].disabled = true;
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


function draganddrop(){
  let draggedItem=null;
  var imgs= document.querySelectorAll('.img');
  var rks= document.querySelectorAll('.empty_square');
  var img_row=document.getElementById('row');
  var previouspos=[img_row,img_row,img_row,img_row];
  for (let i=0; i<imgs.length; i++){
  var img=imgs[i];
  var initpos=img_row[0];
  img.addEventListener('dragstart',function(e){
    draggedItem=this;
    initpos=this.parentNode
  });
  img.addEventListener('dragend',function(){
    setTimeout(function(){
           draggedItem=null;
     },0);
  });
  for (let j=0; j<rks.length; j++){
    var rk=rks[j];
    rk.addEventListener('dragover',function(e){
      e.preventDefault();
    });
    rk.addEventListener('dragenter',function(e){
      e.preventDefault();
    });
    rk.addEventListener('drop',function(e){
      this.append(draggedItem);
      if (this.childNodes.length>1){
          aimg= this.querySelectorAll('.img');
          if (aimg[0].id==i){
            var k=1;
          }else{
            var k=0;
          };
          this.removeChild(aimg[k]);
          initpos.append(aimg[k]);

          previouspos[i]=rk;
          previouspos[aimg[k].id] =initpos;
      }else{
        previouspos[i]=rk;
      }
    });
  }
}};

const cancel=document.getElementById('cancel');

cancel.addEventListener('click',function(e){
  var imgs= document.querySelectorAll('.img');
  var rks= document.querySelectorAll('.empty_square');
  var img_row=document.getElementById('row');
  for (let j=0; j<rks.length; j++){
    var rk=rks[j];
    var aimg= rk.querySelectorAll('.img');
    for (var i = 0; i <aimg.length; i++){
      rk.removeChild(aimg[i]);
      img_row.append(aimg[i]);
    }
  }
  butrank[0].disabled = true;
});

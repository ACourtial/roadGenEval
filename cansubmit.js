
const butform=document.querySelectorAll('.cansubform');
const out=document.getElementById("out");

document.addEventListener('click', function (){

    var f = document.querySelectorAll('.form');

    var cansubmit = true;
    var a=f.length;
    for (var question = 0; question <a; question++) {
      b=f[question].length;
      var fill=false
      for (var opt=0; opt<b;opt++){
        if (f[question][opt].checked) fill=true;
      }
      if (!fill) cansubmit = false;
    }
    if (cansubmit) {
        butform[0].disabled = false;
    }
    var f1 = out.querySelectorAll('.form');
    var cansubmit = true;
    for (var question = 0; question <f1.length; question++) {
      b=f[question].length;
      var fill=false
      for (var opt=0; opt<b;opt++){
        if (f[question][opt].checked) fill=true;
      }
      if (!fill) cansubmit = false;
    }
    if (cansubmit) {
        butfin[0].disabled = false;
    }
});


const butrank=document.querySelectorAll('.cansubrank');

document.addEventListener('drop', function (){
  console.log('saleté de voisin pose ton marteau si tu veux pas que je te le rentre dans le front');
    var f = document.querySelectorAll(".empty_square");
    var cansubmit = true;
    for (var question = 0; question <f.length; question++) {
      b=f[question].querySelectorAll('.img');
      if (b.length==0){cansubmit = false;}
    }
    if (cansubmit) {
        butrank[0].disabled = false;
    }else{butrank[0].disabled = true;}
});

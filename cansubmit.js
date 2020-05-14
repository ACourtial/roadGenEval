const butform=document.querySelectorAll('.cansubform');


document.addEventListener('click', function (){
    console.log('click');
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
      for (let elem =0; elem<butform.length;elem++){
        butform[elem].disabled = false;
      }
    }
});

const butfin=document.querySelectorAll('.cansubfinal');
const out=document.getElementById("out");

document.addEventListener('click', function (){
    console.log('click');
    var f = out.querySelectorAll('.form');

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
      for (let elem =0; elem<butform.length;elem++){
        butfin[elem].disabled = false;
      }
    }
});

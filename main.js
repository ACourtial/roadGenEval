const but=document.querySelectorAll('.button');


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
        document.getElementById('submitbutton').disabled = false;
    }
});

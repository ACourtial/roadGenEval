const imgs= document.querySelectorAll('.img');
const rks= document.querySelectorAll('.empty_square');
const img_row=document.querySelectorAll('.image_row');
let draggedItem=null;

const but=document.querySelectorAll('.button');
const cancel=document.getElementById('cancel');
cancel.addEventListener('click',function(e){
  for (let j=0; j<rks.length; j++){
    var rk=rks[j];
    var aimg= rk.querySelectorAll('.img');
    for (var i = 0; i <aimg.length; i++){
    rk.removeChild(aimg[0]);
    img_row[0].append(aimg[0]);};
  };
});
if ( typeof(document.getElementById('submitbutton')) == 'undefined' ){
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
    else {
        document.getElementById('submitbutton').disabled = 'disabled';
    }
});};



for (let i=0; i<imgs.length; i++){
  const img=imgs[i];
  var previouspos=img_row[0]
  img.addEventListener('dragstart',function(e){

    draggedItem=this;

  });
  img.addEventListener('dragend',function(){

    setTimeout(function(){
           draggedItem=null;
     },0);
  });

  for (let j=0; j<rks.length; j++){
    const rk=rks[j];
    rk.addEventListener('dragover',function(e){
      e.preventDefault();
    });
    rk.addEventListener('dragenter',function(e){
      e.preventDefault();
    });
    rk.addEventListener('drop',function(e){
      aimg= this.querySelectorAll('.img');
      console.log(aimg);
            this.append(draggedItem);
      if(aimg.length>1){
          console.log('in');
          aimg[0].remove();
          previouspos.append(aimg[0]);
      }
      previouspos=this;
    });
  }
}

const imgs= document.querySelectorAll('.img');
const rks= document.querySelectorAll('.empty_square');
const img_row=document.querySelectorAll('.image_row');
let draggedItem=null;

for (let i=0; i<imgs.length; i++){
  const img=imgs[i];
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
      this.append(draggedItem);

      console.log(aimg);
      if(aimg.length>0){
        console.log('in');
        aimg[0].remove();
        img_row[0].append(aimg[0]);
      }
    });
  }
}

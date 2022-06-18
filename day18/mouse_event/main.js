
   
//    document.addEventListener('mousedown', function() {
//     console.log('mousedown');
//    })
   
//    document.addEventListener('mousemove', function() {
//     console.log('mousemove');
//    })
   
//    document.addEventListener('mouseup', function() {
//     console.log('mouseup');
//    })

//    document.addEventListener('click', function(event) {
//     console.log(event);
//    })


   document.addEventListener('click', function(event) {

      //xoa hinh tron truoc (neu co)
   const boxEl = document.querySelector(".box");

   //kiem tra neu ton tai --> xoa
   if(boxEl) {
    boxEl.parentElement.removeChild(boxEl);
   }

   //b1 tao hinh tron
   let box = document.createElement("div");
   box.classList.add("box");

   //b2 gan toa do
   console.log(event);
   box.style.top = `${event.offsetY-50}px`
   box.style.left = `${event.offsetX-50}px`
   //b3 gan vao DOM
   document.body.prepend(box);

   })

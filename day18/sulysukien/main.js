
//Yêu cầu 1:

//Khi nhấn vào button “Change content” hiển thị một nội dung quote bất kỳ

const content = () =>{
    alert("xin chao cac ban 1");
}


//Yêu cầu 2:

//Khi nhấn vào button “Change color” thì thay đổi màu của thẻ p (sử dụng màu HEX - cần viết 1 function để random màu HEX)

const content2 = document.getElementById("btn-2");
 const paras = document.getElementById("text");

 content2.onclick =  function() {
    
    let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {     
        hexCode += characters[Math.floor(Math.random() * characters.length)];
       } 

       paras.style.color = hexCode;

   
 }



//Yêu cầu 3:

//Khi nhấn vào button “Change background” thì thay đổi màu của thẻ p (sử dụng màu RGB - cần viết 1 function để random màu RGB)


const content3 = document.getElementById("btn-3");
 const paras2 = document.getElementById("text");

 content3.addEventListener("click", function() {
    
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);  
       
     paras2.style.color = `rgb(${r},${g},${b})`;

   
 })



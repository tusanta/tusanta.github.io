// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)
// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
// Thay thế các ký hiệu ? => 🤔, ! => 😲

const para = document.querySelector("p");
let conten = [];
for (let i= 0; i<para.length; i++){
    if(i.length >= 8){
        i.push(conten)
       
      
    }   
    console.log(conten);
}

const linkS = document.createElement('a');
linkS.innerHTML= "facebook.com"
linkS.href ="https://www.facebook.com/"
document.body.appendChild(linkS);






para.innerHTML = para.innerHTML.replaceAll("?" , "🤔")
para.innerHTML = para.innerHTML.replaceAll("!" , "😲")
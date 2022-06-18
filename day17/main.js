// truy cập thông qua id
const heading = document.getElementById("heading");
console.log(heading);

//truy cập thông qua tag name
//HTMLCollection --> giống như mảng nhưng bản chất không phải mảng
// HTMLCollection là tập hợp các Node ở dạng Element Node
// node : Element, text nodem comment node, Attribute node...
 const paras = document.getElementsByTagName("p");
 console.log(paras);


 console.log(paras[0]); // truy cập para1
 console.log(paras.length);

 //duyệt Htmlcollecttion

 for (let i= 0; i<paras.length; i++){
     console.log(paras[i]);
     

 }

 Array.from(paras).forEach(Element => {
     console.log(Element);
 });

 // truy cập thông qua class name
const parasClassName = document.querySelector("#heading");
console.log(parasClassName);


// truy cập thông qua css selector
const ul2 = document.querySelector("body > ul")
const ul1 = document.querySelector(".box ul")



// thay đổi thuộc tính css
heading.style.color = "red";
heading.style.backgroundColor = "black"

// lấy ra nội dung
console.log(heading.innerHTML)
console.log(heading.innerText)
console.log(heading.textContent)

///
// document.body.prepend(para1);

// document.body.append(para1);

//thêm phần tử
const box = document.querySelector(".box");

//tạo phần tử DOM
// ví dụ tạo ra thẻ a (google)

const link = document.createElement("a");
link.innerText = "trang google";
link.href = "https://www.google.com/";
console.log(link);

// tạo thẻ input, type ="text", placeholder = "Enter name"
// vị trí : đằng trước para2

// const input = document.createElement("input");



 document.body.insertAdjacentElement("beforebegin",link);

 box.insertAdjacentHTML("afterend", "<button>click me</button>")

 // sử dụng vòng lặp để tạo nội dung vào insert

 let links = [
     {
     link : "https://www.google.com/",
     title : "trang google ",
    },
    {
        link : "https://www.facebook.com/",
        title : "trang google ", 
    },
    {
        link : "https://www.instagram.com/",
        title : "trang google ",
       },

 ];
 // truy cập
 const socialMedia = document.querySelector(".social-media")

 // cách 1 tạo thẻ --> chèn

//  links.forEach(ele =>{
// const link = document.createElement("a");
// link.innerText = ele.title;
// link.href = ele.link;

//  socialMedia.appendChild(link);
// }
// )
// cách 2 insert trực tiếp html --> insertAdjacentHTML
links.forEach(ele =>{
    socialMedia.insertAdjacentHTML("beforeend",`<a href="${ele.link}">${ele.title}</a>}`)
})



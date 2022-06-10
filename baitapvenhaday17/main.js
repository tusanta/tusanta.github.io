// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.


const paras = document.getElementById("text");
paras.style.color = "#777";
paras.style.fontSize = "2rem";
paras.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript";




// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)

// <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
// </ul>

const Item = document.getElementsByTagName("ul");

for (let i = 0; i < Item.length; i++) { 
    Item[i].style.color = "blue";
}



// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):

/* <ul id="list">
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
   <li>Item 4</li>
   <li>Item 5</li>
   <li>Item 6</li>
   <li>Item 7</li>
</ul> */

// Sử dụng javascript để thực hiện những công việc sau

// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách

const list = document.getElementById('list');
li = document.createElement("li")
li.innerHTML = "Item 8";
list.appendChild(li);

li2 = document.createElement("li")
li2.innerHTML = "Item 9";
list.appendChild(li2);

li3 = document.createElement("li")
li3.innerHTML = "Item 10";
list.appendChild(li3);





// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)


const para3 = document.querySelector("#list li");
 para3.style.color = "red";


// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)

const title = document.querySelector("#list li:nth-child(3)");
 title.style.backgroundColor = "red";

// Remove thẻ <li> 4

const Remove = document.getElementById("list");
const RemoveList = document.querySelector("#list li:nth-child(4)");
Remove.removeChild(RemoveList);


// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ

const UpDate = document.getElementById("list");
const NewLI = document.createElement("li");
NewLI.innerHTML = "ITEM 99999";
const box = document.querySelector("#list li:nth-child(4)");
UpDate.insertBefore(NewLI, box);
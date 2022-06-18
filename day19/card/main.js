// Sử dụng Javascript để thực hiện các công việc sau




// Một tính năng mới vào gói Pro: ‘24/7 Phone support’



const proNew = document.createElement("li");
proNew.innerHTML = "24/7 Phone support";
document.querySelector("#pro-plan ul").appendChild(proNew)


// Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)

let cards = document.querySelectorAll(".col-md-4");
let row = document.querySelector(".row");
row.innerHTML = "";
row.appendChild(cards[1]);
row.appendChild(cards[0]);


// Trong gói Pro hãy cập nhật nút ‘Get Started’ hiện tại thành màu xanh có màu background: #0984e3, có chữ màu #fff và có dòng chữ ‘Buy Now’

// Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%
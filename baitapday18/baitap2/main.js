







// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).
 const ulEl = document.getElementById("list");
 
 let removeEl = document.createElement("button");
 removeEl.innerHTML = "Remove";
 document.body.prepend(removeEl)
 

 let inputEl = document.createElement("input");
 document.body.prepend(inputEl);
 
  let addEl = document.createElement("button");
  addEl.innerHTML = "add"
  document.body.prepend(addEl);

  // Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)

  const addEl_1 = addEl;
  addEl_1.addEventListener("click", function() {
    let value = inputEl.value;
    if(value == "") {
        alert("nội dung không được để trống");
        return;
    }
    liNew = document.createElement("li")
    liNew.innerHTML = value;
    ulEl.appendChild(liNew);

  })

// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul

  const removeEl_1 = removeEl;
  removeEl_1.addEventListener("click", function() {
    const RemoveList = liNew;
     ulEl.removeChild(RemoveList);

  })


// Thêm 1 nút Hide trên đầu của danh sách ul

const hideEl = document.createElement("button");
hideEl.innerHTML = "Hide"

document.body.insertBefore(hideEl,ulEl);


// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide

hideEl.addEventListener("click", function() {
    hideEl.innerHTML  = "Show"
    ulEl.style.display = "none"
    if(hideEl.innerHTML = "Show") {
       hideEl.onclick = function() {
        hideEl.innerHTML  = "Hide"
        ulEl.style.display = "block"
         
       }
    }
})
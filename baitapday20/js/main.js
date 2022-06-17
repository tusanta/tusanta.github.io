// Chức năng
// 1. Thêm công việc
// 2. Sửa công việc
// 3. Xóa công việc
// 4. Lọc công việc theo trạng thái
// 5. Thay đổi trạng thái công việc

// Đối tượng trong ứng dụng này là gì? Bao gồm những thuộc tính nào?
// Id, title, status
// UUID

let todos;

// 4->1000
const randomId = () => {
    return Math.floor(Math.random() * (1000 - 4 + 1) + 4);
}

// Truy cập
const todoListEl = document.querySelector(".todo-list");
const todoOptionEls = document.querySelectorAll(".todo-option-item input");
const todoInputEl = document.getElementById("todo-input");
const btnAdd = document.getElementById("btn-add");

// const btnUpdate = document.getElementById("btn-update");

let isUpdate = false;
let idupdate = null;

const renderTodo = arr => {
    todoListEl.innerHTML = "";

    // Kiểm tra danh sách công việc có trống hay không
    if(arr.length == 0) {
        todoListEl.innerHTML = `<p class="todos-empty">Không có công việc nào trong danh sách</p>`;
        return;
    }

    // Hiển thị danh sách
    let html = "";
    arr.forEach(t => {
        console.log(1)
        html += `
            <div class="todo-item ${t.status ? "active-todo" : ""}">
                <div class="todo-item-title">
                    <input 
                        type="checkbox" ${t.status ? "checked" : ""} 
                        onclick="toggleStatus(${t.id})"
                    />
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update"  onclick="updateTodo(${t.id})">
                        <img src="./img/pencil.svg" alt="icon" />
                    </button>
                    <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                        <img src="./img/remove.svg" alt="icon" />
                    </button>
                </div>
            </div>
        `
    });

    todoListEl.innerHTML = html;
}

const updateTodo = id => {
    let title
    console.log(id, todos, 123)
    for (let i = 0; i < todos.length; i++) {
     if(todos[i].id == id) {
        title == todos[i].title;
     }
    
    }
    btnAdd.innerText = "CẬP NHẬT"

    todoInputEl.value = title;
    todoInputEl.focus();

    idupdate = id;
    isUpdate = true;

}

// Xóa công việc
const deleteTodo = id => {
    // Lọc ra các cv khác id của công việc muốn xóa
    todos = todos.filter(todo => todo.id != id);

    // Hiển thị lại trên giao diện
    setDataToLocalStorage(todos);
}

// Thay đổi trạng thái công việc
const toggleStatus = id => {
    // Lấy ra cv cần thay đổi
    let todo = todos.find(todo => todo.id == id);

    // Thay đổi trạng thái của cv đó : true -> false , false -> true
    todo.status = !todo.status;

    // Hiển thị lên trên giao diện
    setDataToLocalStorage(todos);
}

// Lọc công việc theo trạng thái
Array.from(todoOptionEls).forEach(input => {
    input.addEventListener("change", () => {
        let option = input.value;
        
        let todosFilter = [];

        switch(option) {
            case "all" : {
                todosFilter = [...todos]; // spread operator
                break;
            }
            case "active" :
                todosFilter = todos.filter(todo => todo.status == true);
                break;
            case "unactive" : {
                todosFilter = todos.filter(todo => todo.status == false);
                break;
            }
            default : {
                todosFilter = [...todos]; // spread operator
                break;
            }
        }
        renderTodo(todosFilter);
    })
})



// Thêm công việc
const addTodo = () => {
    // Lấy ra dữ liệu trong ô input
    let title = todoInputEl.value;

    // Kiểm tra xem tiêu đề có trống hay không
    if(title == "") {
        alert("Tiêu đề công việc không được để trống");
        return;
    }


      if(isUpdate){
         for (let i = 0; i < todos.length; i++) {
             if(todos[i].id == idupdate){
                    todos[i].title = title
             }
            }
            btnAdd.innerText = "THÊM";
           isUpdate = false;
           idupdate = null;
                
                
            } else{
    
                let newTodo = {
                    id : randomId(),
                    title : title,
                    status : false
                }
            
                
                todos.push(newTodo);
    
        }


    setDataToLocalStorage(todos);

    todoInputEl.value = "";
}

//update công việc
 

// Thêm công việc bằng nút "THÊM"
btnAdd.addEventListener("click", () => {
    addTodo();
})

// Thêm công việc bằng phím Enter
todoInputEl.addEventListener("keydown", (event) => {
    if(event.keyCode == 13) {
        addTodo();
        
    }
})

// Lấy dữ liệu từ localStorage
const getDataFromLocalStorage = () => {
    console.log(4)
    let data = localStorage.getItem("todos");
    if(data) {
        todos = JSON.parse(data);
    } else {
        todos = [];
    }
    renderTodo(todos);
}

// Lưu dữ liệu vào localStorage
const setDataToLocalStorage = arr => {
    localStorage.setItem("todos", JSON.stringify(arr));
    renderTodo(arr);
}


getDataFromLocalStorage();



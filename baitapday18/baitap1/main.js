


const users = [
    {
        username: "bob",
        password: "123"
    },
    {
        username: "alice",
        password: "456"
    }  
]

// const content2 = document.getElementById("btn-login");

// const UserNameEl = document.getElementById("username");
// content2.addEventListener("click", function() {
//         let value = UserNameEl.value;
//         if(value == "") {
//             alert("nội dung không được để trống");
//             return;
//         }else if(value == users.username) {
//             alert("Đăng nhập thành công");
//             return;
//         }else{
//             alert("Tài khoản hoặc mật khẩu không chính xác");
//           return;
//         }
//     }

// )
// const PasswordEl = document.getElementById("password");
// content2.addEventListener("click", function() { 
//         let value = PasswordEl.value;
//         if(value == "") {
//             alert("nội dung không được để trống");
//             return;
//         }else if(value == users.password) {
//             alert("Đăng nhập thành công");
//             return;
//         }else{
//             alert("Tài khoản hoặc mật khẩu không chính xác");
//           return;
//         }
        
//     }

// )


const content2 = document.getElementById("btn-login");

const UserEl = document.getElementById("username","password");
content2.addEventListener("click", function() {
        let value = UserEl.value;
        if(value == "") {
            alert("nội dung không được để trống");
            return;
        }else if(value == users.username && value == users.password ) {
            alert("Đăng nhập thành công");
            return;
        }else{
            alert("Tài khoản hoặc mật khẩu không chính xác");
          return;
        }
    })




const sayhello = () =>{
    alert("xin chao cac ban 1");
}

// su dung DOM property

const btn2 = document.getElementById("btn-2");
// btn2.onclick = function() {
//     alert("xin chao cac ban 2");
// }

const sayhello2 = () =>{
    alert("xin chao cac ban 2");
}


btn2.onclick = sayhello2;

//  Sử dụng addEventListener
const btn3 = document.getElementById("btn-3");
btn3.addEventListener("click", function() {
    alert("xin chao cac ban 3")
});


const heading = document.getElementById("heading");


console.log(heading.classList);

// them class
heading.classList.add("text-big", "text-center");

//xoa class

heading.classList.remove("text-big", "text-center");


// kiem tra 1 class co ton tai khong true/false

console.log.apply(heading.classList.contains("text-red"));
console.log.apply(heading.classList.contains("text-big"));


//toggle
//neu co class ==> xoa di
//neu co class ==> them vao

// lap di lap lai 1 cong viec sau 1 khoang thoi gian nhat dinh
// paramreter 1: function(cv)
//parameter 2 : time (ms)
// setInterval(function() {
//     heading.classList.toggle("text-red");
// }, 100)


//delay 1 thoi gian sau do moi thuc hien cong viec

// setTimeout(function() {
//     heading.classList.toggle("text-red");
// },3000)


// thuc hien dem nguoc thoi gian tu 10s --> 0
//ket thuc thi hien thi ra message

let time = 10;
let interval = setInterval(function() {
    time --;
    document.querySelector(".time").innerText = `${time}s`;
    if(time==0){
        //dung qua trinh lap lai
        clearInterval(interval);

        document.querySelector(".message").classList.remove("hide")
    }
}, 1000)

//khai bao kieu boolean
let a = true;
let b = false;

console.log(a);
console.log(b);
console.log(!a);
console.log(!b);

//ham boolean

console.log(Boolean(10));
console.log(Boolean(5 > 10));
console.log(Boolean(10 > 5));

//Falsy value + 
console.log(Boolean(false)); // false

console.log(Boolean(0)); // false

console.log(Boolean(NaN)); // false

console.log(Boolean("")); // false

console.log(Boolean(null)); // false

console.log(Boolean(undefined)); // false

// 1 so toan tu: !, || , &&

console.log("toan tu dieu kien &&");
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);

console.log("toan tu dieu kien ||");
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);
// cau lenh if : neu...thi...

// console.log("cau lenh if");

// let hour = 6;
// if(hour<10) {
//     console.log("good morning");
// }
// vi du 2

let troiDep = true;
let coTien = true;
if( troiDep && coTien){
    console.log("di choi");
}

//vi du 3 neu co tien mat hoac tien trong tai khoan thi mua dc hang

let tienMat = false;
let chuyenKhoan = true;
if(tienMat || chuyenKhoan){
    console.log("Mua duoc hang");
}

// If/else
// vi du : neu troi dep thi di choi, nguoc lai thi o nha

if(troiDep == true) {
    console.log("di choi");
} else {
    console.log("o nha");
}

//vi du 2 :neu co 30 trieu thi mua iphone 13 oromaz, nguoc lai thi mua samsung s21

let money = 20;
if(money>=30){
    console.log("Mua Iphone 13 pro max");
} else {
    console.log("Mua sam sung s21");
}
// cau lenh if-else/ else - else
//vidu:
//neu co 30 trieu tro len thi mua Iphone 13 pro
//neu co 20 --> 30 trieu thi mya samsung s21
// neu co 15 --> 20 trieu thi mya oppo find x
// con 15 trieu tro xuong thi mua xiaomi pro 9
money = 40;
if(money >= 30) {
    console.log("mua iphone 13 pro max");
} else if(money >= 20 && money < 30){
    console.log("mua samsung s21");
} else if(money >= 15 && money < 20){
    console.log("mua oppo find x3");
} else {
    console.log("mua xiaomi pro 9");
}
//if else lồng nhau
// ví dụ: kiểm tra 1 số là số nguyên dương, số nguyên âm hay là số 0
//nếu đó là số nguyên dương thì kiểm tra tiếp số chẵn hay số lẻ

let number = 10;
if(number > 0) {
    console.log("số nguyên dương");
    if(number % 2 ==0) {
        console.log("số chẵn");
    } else{
        console.log("số lẻ");
    }
} else if(number == 0){
    console.log("số 0")
} else{
    console.log("số nguyên âm");
}

//toán tử 3 ngôi

if(hour < 12) {
console.log("good morning");
} else{
    console.log("good afternoon");
}
hour < 12
  ? console.log("good morning")

  : console.log("good afternoon");
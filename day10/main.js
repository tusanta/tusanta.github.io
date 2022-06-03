//dinh nghia function
function sayHello() {
    console.log("xin chao..");
}

sayHello();

function sayHellowithName(name) {
    console.log(`xin chao ${name}`);
}

sayHellowithName("nguyen van a");
sayHellowithName("tran van b");
sayHellowithName("ngo b");


//function co 2 tham so

function showInfo(name, year) {
    console.log(`xin chao, toi tenla ${name}, nam nay toi ${2022 -year} tuoi`);
}
showInfo("ductuan", 2022);
showInfo("duc thinh", 1996);

//function co tra ve ket qua
// vi du tinh tong 2 so a + b
// function sum(a, b) {
//     let result = a + b;
//     return result;
// }

// let data = sum(3 ,4);
// console.log(data);

// console.log(sum(10, 20));


//default parameter
// function


function hello() {
console.log("xin chao cac ban...");
}

hello();

function helloNAme(name) {
    console.log(`xin chao ${name}`);
}

helloNAme("X")

function hiName(name1) {
    console.log(`xin chao "${name1}"`);
}

hiName("X")

function numBer(a, b){
    let result = a + b;
    return result
}

let data = numBer(3, 4);
console.log(data);

function binhPhuong(v){
    let result = (Math.pow(v, 2));
    return result
}

let beta = binhPhuong(5);
console.log(beta);



///bài 1 Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.

function functionName(a){
let b = ''
    for (let functionName = 1; functionName <=10; functionName++){
       b+=a
    }
    console.log(b)
}
functionName("a");
//bài 2 Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.


function myName(a) {
    let b = ''
    for (let myName = 1; myName<=10; myName++){
        b+=a
        if(myName < 10)
        b+='-'
    }
    console.log(b)
    
}
myName("a")


// bài 3
function myName2(a, n) {
    let b = ''
    for (let myName = 1; myName<=n; myName++){
        b+=a
        if(myName < n)
        b+='-'
    }
    console.log(b)
    
}
myName2("a",5)

// bài 4 tỏng các số 0 --> 100 chia hết cho 5:

let b=0;

 for (let i = 1; i<=100; i++){  
    
    if( i % 5 ==0) {
       console.log(` các số chia hết cho 5 là:${i}`)
       } 
  b+=i;
            
}

 console.log(` tổng các số chia hết cho 5 là :${b}`);


//bài 5 tính thể tích hình cầu :
// V(hình cầu) = πR3
// Math.pow(a, b) : Số mũ (a^b)
// Math.PI : Lấy ra giá trị của số PI


function banKinh(a) {
    let result =  Math.PI * Math.pow(a, 3);

    return result;
}
let theTich = banKinh(20);
console.log(`thể tích hình cầu là :${theTich}`);


//bài 6 Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

let c = 0;
for(e = 5; e < 10; e++){
   
    if(e>5){

    c+=e;  
}
}
console.log(` tổng các số nguyên giữa 5 và 10 là: ${c}`)

//bài 7 Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

function myNumber(n){
    if(n<2){
        console.log("false")
    }
    else if(n==2){
        console.log("true")
    }
    else if(n % 2 == 0){
        console.log("false")

    }
    else{
        for (let i = 3; i < n-1; i+=2)
        {
            if (n % i == 0){
                console.log("false")
                break; }
}
}
}
let so = myNumber(8);
console.log(so);
// bài 8 Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.


let p=0;
    function soNguyento(f) {
    if (f < 2) {
        return 0;
    }
    for (i = 2; i <= f; i++) {
        if (f % i == 0) {
            return 0;
        }
        p+=f;
    }
    return 1;
   
}
soNguyento(50);
console.log(p)


//bai 9 : Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

function main(k){
    
    do{
        if(k <= 0){
            
        }
    }while(k <= 0);
    sum = 0;
    for(let i = 1;i <= k;i++){
        if(k % i == 0){
            sum += i;
        }
    }
}
main(8);
console.log(sum);

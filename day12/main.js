//bài 1  Viết function truyền vào 1 số nguyên dưong. Tính giai thừa của số đó

//Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120 

function calculateFactorial(a){
    let p=1;
    for(let i = 0; i<=a; i++){
        if(a%i !==0){
            p*=i;

        }
        return p;
    }
    console.log(p);
}
calculateFactorial(10);


//Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó

//Ví dụ: reverseString(‘hello’) => olleh






//Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào

//Ví dụ: translate(‘VN’) => “Xin chào”
//translate(‘EN’) => “Hello
  


// Bài tập thực hành : Vòng lặp lồng nhau

// function printRectangleEmpty(row,col){
//     let content = "";
//     for (let i=0; i< row; i++){
//         for(let j = 0; j<col; j++){
//             if(i=0 || i)
//         }
//     }
// }
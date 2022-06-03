//Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false

//Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

//Ví dụ:

//checkStringExist(“i love you”, “you”) => true
//checkStringExist(“i love you”, “hate”) => false

function checkStringExist(str1, str2){
    if(str1.includes(str2)){
        console.log(true);
    }else{
        console.log(false);
    }

}
checkStringExist("i love you", "hate");
checkStringExist("i love you", "love");

//bài 2 Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên

//Ví dụ:

//shortenString(“Xin chào các bạn”) => “Xin chào…”
//shortenString("hello’) => “hello”

function shortenString(str3){
    if(str3.length>8){
    return str3.slice(0,8) + "...";
    }
    return str3;
    
}
console.log(shortenString("xin chào các bạn"));
console.log(shortenString("hello"));

//Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.

//Ví dụ

//“Race car” => true,
//“hello world” => false.

function doiXung(str3){
let i= str3.indexOf(str3);
    p =  str3.lastIndexOf(str3);
    if( i == p){
        console.log(true);
    }else{
        console.log(false);
    }

}
doiXung("Race ecar");
doiXung("hello world");




//Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

// function numBer(str4){
//  let nbSort = numBer.sort();

// console.log(nbSort); 

// }
//   numBer(521037)



//Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

//Ví dụ:

//“HELLO world” => “hello_world”
//“Xin Chào Các BẠN” => “xin_chào_các_bạn”
function stringOne(str5){
let strLower = str5.toLowerCase(str5).replace(/ /g, "_");

     return strLower;


}
console.log(stringOne("HELLO WOLRD"));
console.log(stringOne("XIN CHÀO CÁC BẠN"));
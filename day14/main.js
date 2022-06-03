//Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?

//checkElementExist([1,2,3,4,5], 5) => true
//checkElementExist([1,2,3,4,5], 6) => false

function checkStringExist(str1, str2){
    if(str1.includes(str2)){
        console.log(true);
    }else{
        console.log(false);
    }

}
checkStringExist([1,2,3,4,5], 5); 
checkStringExist([1,2,3,4,5], 6); 


//Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào

//getElementGreater([1,2,3,4,5], 3) => [4,5]
//getElementGreater([1,2,3,4,5], 5) => []


function getElementGreater(str){

    let number =[];
    for (let i = 0; i < str.length; i++) {
        if (str[i] > 3) {
            number.push(str[i]);
    }    
    }
    console.log(number);
}
getElementGreater([1,2,3,4,5], 3);
getElementGreater([1,2,3,4,5], 5)




//Bài 3: Viết function để tạo mã màu HEX ngẫu nhiên.

//randomHexCode() => #728a98
//randomHexCode() => #a72938

function randomHexCode (color){
let character = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

for (let i = 0; i < 6; i += 1) {
    character+=color
  }
  console.log(character);
  }


document.write(`<span style="color: #728a98;">tuấn</span>`)




//Bài 4: Viết function để tạo mã màu RGB ngẫu nhiên.

//randomRgbCode() => rgb(213,43,133)
//randomRgbCode() => rgb(12,32,122)
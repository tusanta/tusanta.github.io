

//Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.
//Hãy cẩn thận trường hợp trong mảng có nhiều số lớn nhất
// // Ví dụ:
//max2Numbers([2, 1, 3, 4]) => 3
//max2Numbers([2, 1, 4, 3, 4]) => 3

let array = [2, 1, 4, 3];

array.sort(function(a, b) {    /*Sắp xếp mảng số theo thứ tự tăng dần*/
  return a - b;
});
console.log("max thứ "+2 +"= ",array[array.length-2]);  // lấy ra giá trị lớn thứ 2 theo thứ tự



//Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
// Ví dụ:
//getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']) => ['aba', 'vcd'].

function getStringHasMaxLength(arr){

    // let str = [];
    // for (let i = 0; i < arr_str.length; i++) {
    //     if(arr_str[i] > ){
    //         str.push(arr_str[i])
    //     }
    //    return str
        
    // }

    let max = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
}}
return max
}
console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']))





//Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó
// Ví dụ:
//getRandomElement([3, 7, 9, 11]) => 3
//getRandomElement([3, 7, 9, 11]) => 9


function getRandomElement( arr)
{
   return  arr[Math.floor(Math.random() * arr.length)];  /// lấy ra giá trị ngẫu nghiên từ length của mảng arr
}
console.log(getRandomElement([3, 7, 9, 11]));

//Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó
// Ví dụ:
//similarity([1, 2, 3], [1, 2, 4]) => [1,2]
//similarity([1, 2, 3], [3, 4, 5]) => [3]


function similarity(str1, str2) {     // khởi tạo function với 2 mảng

   let p = [];       // đặt p  bằng chuỗi rỗng

    for (let i = 0; i < str1.length; i++) {    // duyệt mảng đầu tiên với vòng lặp for
        
      if (str2.includes(str1[i])) {     // nếu mảng đầu tiên có giá trị nằm trong mảng 2
        p.push(str1[i]);              // in giá trị đó vào p
      }
    }
    for (let i = 0; i < str2.length; i++) {   // duyệt mảng 2
      if (str1.includes(str2[i])) {            // nếu mảng 2 có giá trị nằm trong mảng 1
        p.push(str2[i]);                      // in giá trị đó vào p
      }
    }
    return p;                                
  }
  console.log(similarity([1, 2, 3], [1, 2, 4]));
  console.log(similarity([1, 2, 3], [3, 4, 5]));





//Bài 5 (2 điểm). Viết function truyền vào 2 tham số:

//Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
//Tham số 2: Là 1 số x <= 1000
//Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.
// Ví dụ: getTime("9:20:56", 7) => "9:21:3"







//Bài 6 (2 điểm). Cho mảng users như sau:
users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

//Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true


const findusers = (arr, n) => {
    let newArr = [];
    arr.forEach(users => {
        if(users.age > n && users.isStatus == true) {
            newArr.push(users);
        }
    })
    return newArr

   
}
console.log(findusers(users, 25));

//Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần

users.sort((a, b) => a.age - b.age);

users.forEach((e) => {
    console.log(`${e.name} ${e.age} ${e.isStatus}`);
});



//Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

//getCountElement(["one", "two", "three", "one", "one", "three"])

// Kết quả
// {
//     one: 3,
//     two : 1,
//     three : 2
// }



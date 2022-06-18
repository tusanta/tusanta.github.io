//Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.

//sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]

let sortStudents =["Nam", "Hoa", "Tuấn"] ;
sortStudents.sort(function(str1, str2) {
  if (str1 < str2) {
    return 1;
  }
  if (str1 > str2) {
    return -1;
  }
  return 0;
});
console.log(sortStudents);



// function sortStudentsFunction(str) {

//   str.sort((str1, str2) => { 
//     if (str1 < str2) {
//       return 1;
//     }
//     if (str1 > str2) {
//       return -1;
//     }
//     return 0;
//   });
//   return str;
// }
// let sortStudents = ["Nam", "Hoa", "Tuấn"];

// console.log(sortStudentsFunction(sortStudents));





//Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng

//shuffle([1,2,3,4,5]) => [2,3,4,1,5]
//shuffle([1,2,3,4,5]) => [4,2,3,5,1]

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
console.log(shuffleArray([1, 2, 3, 4, 5]));







//Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng

//symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]

function symmetricDifference(str1, str2) {
  p = [];
  for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1[i])) {
      p.push(str1[i]);
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (!str1.includes(str2[i])) {
      p.push(str2[i]);
    }
  }
  return p;
}
console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));





//Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng

//union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
//union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]

function union(str1, str2) {
  p = [];
  for (let i = 0; i < str1.length; i++) {
    if (p.includes(str1[i]) == false) {
      p.push(str1[i]);
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (p.includes(str2[i]) == false) {
      p.push(str2[i]);
    }
  }
  return p;
}
console.log(union([1, 2, 3, 1], [4, 3, 2, 4]));
console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]));

///Grade


const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
   ]

//1. Viết function tính thứ hạng trung bình của cả lớp.
const avgGrade = (arr) => {
    let total = 0;
    arr.forEach(grades => {
        total += grades.grade / arr.length ;
    });
    return total
}
console.log(avgGrade(grades));


//2.Viết function tính thứ hạng trung bình của nam trong lớp
const avgGradeNam = (arr) => {

    let newArr = [];
    
    arr.forEach(grades => {
        if(grades.sex == 'M') {
            newArr.push(grades);
        }   
        });
        return newArr

};
console.log(avgGradeNam(grades));


//3.Viết function tính thứ hạng trung bình của Nữ trong lớp

const avgGradeNu = (arr) => {
    
    let newArr = [];
    let total = 0;
    arr.forEach(grades => {
        if(grades.sex == 'F' &&   arr.forEach(newArr => {
            total += (newArr.grade / newArr.length)})) {
            newArr.push(grades);
        }   
        });

    return total
} 
console.log(avgGradeNu(grades));



//4.Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp


//5.Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp


//6.Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp


//7.Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp


//8.Viết function thứ hạng cao nhất của cả lớp


//9.Viết function thứ hạng thấp nhất của cả lớp


//10.Viếtfunction lấy ra danh sách tất cả học viên Nữ trong lớp


//11.Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái


//12.Viết function sắp xếp thứ hạng học viên theo chiều giảm dần

grades.sort((a, b) => b.grade - a.grade);

grades.forEach((e) => {
    console.log(`${e.name} ${e.grade} ${e.sex}`);
});

//13.Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”

const findGradesByName = (arr, name) => {

return arr.filter(grades => grades.name.toLowerCase().includes(name.toLowerCase()))
}

console.log(findGradesByName(grades, "J"));

//14.Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp



let empty=[];

let names=[];
names[0]= "10"
names[1]="11"
names[2]="12"
names[3]="13"
console.log(names);


// Câu 1: Kiểm tra mảng có phải là mảng tăng dần hay không
// Ví dụ : Mảng tăng dần [1,2,6,8,9]
// Ví dụ : Mảng không tăng dần [1,5,4,8,9]

function checkArrAsc(arr) {
    
    // Sử dụng vòng for để duyệt mảng
    for (let i = 0; i < arr.length-1; i++) {
        
        if(arr[i] > arr[i + 1]){
            return false;  
        }  
        }
        return true;
        
    // Kiểm tra nếu tồn tại phần tử đằng trước > phần tử đằng sau => Không tăng dần
}
console.log(checkArrAsc(12345));
console.log(checkArrAsc(26453));


// tính tổng
function NumberArr(Number){

let total = 0;
for (let i=0; i<Number.length; i++){
    total += Number[i];
}
console.log(total)
}
NumberArr([1,5,4,8,9]);
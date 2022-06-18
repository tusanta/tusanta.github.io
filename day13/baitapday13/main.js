//bài 1 Tìm số lớn nhất trong mảng




function maxElement(array){

    let max =  array[0];
    
   
    for (let i = 0; i < array.length; ++i) {

        if (max < array[i]) { 

            max = array[i];
            
        }
    }
   
    console.log("so lon nhat", max);
}
let numMax = [12,25,80,75,22]
maxElement(numMax);



//Bài 2: Tìm số nhỏ nhất trong mảng

 


function minElement(array){

    let min =  array[0];  
   
    for (let i = 0; i < array.length; ++i) {

        if (min > array[i]) { 
            min = array[i];         
        }
    }
    console.log("so be nhat", min);
    
}
let numMin = [11, 25, 80, 75, 22]
minElement(numMin);





//Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

//Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]





function numberElement(arr) {

    
let numBer = 0;
for ( let i = 0; i<arr.length; i++){
    numBer+=arr[i];
    if(arr[i] % i == 0){
        return 0;
    } else{
        return 1;
    }
    
}

 console.log(numBer)
       
}
 numberElement([4,2,5,6,2,7]);





//Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần


function text(str){
    return  str.repeat(10);
    
}
  console.log(text("hello wolrd"));

// Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

//Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a


function repeatString(str){

    let   result =`${str}-`.repeat(10);
       
    
          return result.slice(0, length-1);
    }
      console.log(repeatString("hello"));




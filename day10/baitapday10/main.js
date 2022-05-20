// bài 1

function numBer(a) {
    if (a % 3 === 0 && a % 5 === 0) {
      console.log("FizzBuzz");
    }
    else if (a % 3 === 0) {
      console.log("Fizz");
    }
    else if (a % 5 === 0) {
      console.log("Buzz");
    }
  }
  let data = numBer(15);
  console.log(data)


 //bài2 (ax + b= 0)


 function numBer2(a,b) {

    if(a==0){
     if(b==0) console.log("phuong trinh vo so nghiem");
     else console.log("phuong trinh vo nghiem");  
    }
    else{ 
     console.log("phuong trinh co 1 nghiem la ${-b/a}");
    }
    
    }
    let beta = numBer2(2,3);
    

    //bai 3 (ax^2 + bx + c = 0)

    function numBer3(a, b, c){
        if(a == 0) {
         
            if(b == 0) {
                if (c == 0) {
                    console.log('Phuong trinh vo so nghiem')
                     
                } else {
                    console.log('Phuong trinh vo nghiem')
                }
            } else {
                console.log('Phuong trinh co nghiem duy nhat:' +(-c/b))
            }
        }   else {
    let delta = b*b - 4*a*c;
    if(delta > 0) {
        let x1 = (-b+Math.sqrt(delta))/(2*a);
        let x2 = (-b-Math.sqrt(delta))/(2*a);
        console.log('Nghiem thu nhat x1 = '+x1+'\n Nghiem thu hai x2 = '+x2)
    } else if ( delta == 0) {
        let sum = -b/2*a
        console.log('Phuong trinh co nghiem kep: x1 = x2 = '+sum)
    } else {
        console.log('Phuong trinh vo nghiem')
    }
}}
    let meta = numBer3(3, 4, 5);
    
    //bài 4 
     function year(a){
        if ((a % 4===0 && a % 100 !==0 && a % 400 !==0)||(a % 100===0 && a % 400===0)){
        return a + " Là năm nhuận.";
        } else{
        return a + " Không la năm nhuận.";
        }
        }
        let namNhuan = year(2022);
        console.log(namNhuan);

        //bài 5 tính chỉ số BMI
        
        function chiSo(a, b){
        let result = a / (b * 2);
        return result
    }
    let bMi = chiSo(70, 1.7);
    console.log(bMi);

    //bài 6

    function nhietDo(a){
        let result  = a*1.8 + 32;
        return result
    }
  let doF= nhietDo(20);
  console.log(doF);
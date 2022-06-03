// thực hiện công việc thức dậy lúc 5:00 trong 30 ngày
//day++
// day = day + 1
// day +=1

// for (let day = 1; day <=30; day++) {
//     console.log(`ngày ${day} thức dậy lúc 5:00`);
// }

// thực hiện công việc thức dậy lúc 5:00 trong 30 ngày vào các ngày lẻ

// for (let day = 1; day <=30; day++) {
//     if( day % 2 == 1) {
//     console.log(`ngày ${day} thức dậy lúc 5:00`);
// }
// }


// for (let day = 1; day <=30; day += 2) {
//    console.log(`ngày ${day} thức dậy lúc 5:00`);
// }

//break thực hiện công việc thức dậy lúc 5:00 trong 30 ngày đến ngày 20 bỏ

// for (let day = 1; day <=30; day ++) {
//     if(day == 20) {
//         console.log("chán quá nghỉ");
//         break;
//     }
//     console.log(` ngày ${day} thức dậy lúc 5:00`);
// }
// continue thực hiện công việc thức dậy lúc 5:00 trong 30 ngày nhưng cuối tuần không thực hiện

// for (let day = 1; day <=30; day += 2) {
//     if(day % 7 ==0){
//         console.log("nghỉ ngơi xả hơi");
//         continue;
//     }
//     console.log(` ngày ${day} thức dậy lúc 5:00`);
// }

// tiết kiệm tiền
// thực hiện tiết kiệm trong 10 ngày mỗi ngày 100.000
// sau 10 ngày có 1.000.000
// thời điểm chưa tiết kiệm tiền = 0
// let money = 0; //ví
// for (let day = 1; day <= 10; day++) {
//     money += 100000;
// }
// console.log("tổng tiền sau 1o ngày tiết kiệm là :" + money);

// đến ngày 8 heetd tiền không tiết kiệm nữa

// for (let day = 1; day <= 10; day++) {
//     if(day == 8){
//         console.log("hết tiền");
//         break;
//     }
//     money += 100000;
// }
// console.log("Money =" + money);

let day = 1;
for( ; ; ) {
    if(day > 30){
        break;
    }

console.log(` ngày ${day} thức dậy lúc 5:00`);
day++;
}
# Tổng hợp kiến thức js bài đầu tiên
**Định nghĩa javascript**
1. (js) là gnoon ngữ kịch bản phía client
2. (js) được kết hợp với html/css để tạo web động
**công dụng của javascipt**
- sửa đổi nội dung của một trang web.
- Thay đổi style và vị trí thành phần trên trang web.
- phản hồi với các sự kiện từ người dùng.
- Thực hiện và kiểm soát việc chuyển tiếp các hình ảnh động.
- thông báo người dùng
- Thao tác với các dữ liệu đầu vào và hiển thị kết quả sau sử lý.
- Xác thực dữ liệu đầu vào của người dùng trước khi gửi nó đến máy chủ.
- ...

## Cách thực hiện câu lệnh javascript
### cách 1: viết trực tiếp mã Jvascript vào trong thẻ html
- Tạo file html
- viết mã (js) với cú pháp <script> nội dung </script> trong phần body
- Lưu ý mã (js) phải được đặt ở cuối phần nội dung thẻ html (body)
- nếu đặt mã (js) ở trên phần nội dung sẽ gây ra lỗi do trình duyệt đọc mã (js) trước khi đọc sang phần nội dung.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <!-- Viết mã Javascript trong cặp thẻ script -->
    <script>
        console.log("Hello world");
    </script>
</body>
</html>
```
### cách 2: tạo file có đuôi là .js cùng cấp với thẻ html để viết mã (js) (nên sử dụng cách anyf)
- tạo file có đuôi **.js** để viết mã (js) (**.js**nằm cùng cấp với **.html**)
- nhúng file **.js** vào file **.html** thông qua thuộc tính **src** trong thẻ **script**
```
//file main.js
console.log("Hello world");
```
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <!-- Link sang 1 file javascript -->
    <script src="./main.js"></script>
</body>
</html>
```
**với 2 cách trên đều phải quay lại trình duyệt để xem kết quả**
- ấn **f12** hoặc **chuột phải + inspect** vào tab **console** để xem kết quả.
- lỗi sẽ được tìm thấy ở tab **console**
# định nghiã biến
biến là một định danh dùng dể lưu trữ dữ liệu, thông qua biến chbungs ta có thể thực hiện thao tác với dữ liệu.

mỗi biến có một kiểu dữ liệu riêng, dựa vào kiểu dữ liệu của biến có các thao tác khác nhau với biến.

Ví dụ:
- biến kiểu số thì có phép cộng, trừ, nhân, chia.
- biến kiểu chuỗi thì có độ dài của chuỗi, phép nối 2 chuỗi,...

# khai báo biến
Để khai báo biến sử dụng từ khóa : **let / const**

sử dụng 2 cách sau để khai báo biến:

1. Khai báo biến và không gán giá trị cho biến: **let name**

- khi khai báo biến mà chưa nhập dữ liệu cho biến thì sẽ nhận kiểu dữ liệu là **undfined**.

ví dụ :
```
//khai báo biến nhưng chưa nhập dữ liệu cho biến
let name;
console.log(name);
```


2. khai báo biến và gán giá trị cho biến : **let name = tuan**

ví dụ :
```
//khai báo biến và gán giá trị cho biến

let name;

name = "tuan";

console.log(name)
```
```
// khai báo biến và gán nhiều giá trị cho biến 

let name = "tuấn"; ( kiểu string)
let number = 10; ( kiểu number)
let isStatus= true; ( kiểu boolean)

```
**kiểu dữ liệu nguyên thủy**
```
1. undfined

2. string

3. number

4. boolean

```
**cách khai báo hằng số**
```
//khi khai báo hằng số bắt buộc phải khởi tạo giá trị nếu không sẽ bị lỗi và không thể thay đổi giá trị của một hằng số.

const PI = 3.14;

console.log(PI);
```


 ***không thể thay đổi giá trị bằng cách khai báo lại biến mà chỉ có thể thay đổi giá trị của biến**

 ví dụ :
 ```
 let name= "tuấn";

 console.log(name); (kết quả = "tuấn")

 name = "ronaldo";

 console.log(name); (kết quả bằng"ronaldo")
 ```
# Quy tăc đặt biến
- chứa các kí tự chữ, số,_ và $
- ký tự đầu tiên không được là số(nên là chữ)
- có phân biệt hoa thường
- không trùng với các từ khóa (js) <https://www.w3schools.in/javascript/keywords/>
- Nên đặt theo kiểu camelCase nếu tên biến có độ dài 2 từ trở lên cho dễ đọc. Ví dụ binhphuong nên đặt là binhPhuong.
# kiểm tra kiểu dữ liệu của biến

để kiểm tra kiểu dữ liệu của biến, chúng ta sử dụng toán tử typeof
```let number = 10;
console.log(typeof number); // "number"

let name = "Tuấn";
console.log(typeof name); // "string
```
 sau đó lên trình duyệt vào trang inspect xem kết quả.

 # kiểu dữ liệu String

 string(chuỗi) là một đoạn text có thể có một hoặc nhiều ký tự.

 các chuỗi đều phải được bao quanh bằng cặp dấu nháy đơn ' hoặc nháy kép ".4
 ví dụ
 ``
 let name = “Nguyễn Văn A”;
let email = “abc@gmail.com”;
```
# Một số lưu ý

trường hợp trong chuỗi cũng có xuất hiện dấu nháy đơn hoặc nháy kép thì phải thêm ký tự \ đằng trước dấu nháy đó.
```
//chuỗi
let message = "Xin chào các bạn, mình tên là \"duc tuan\". Mình sinh năm 2022";
console.log(message)
```
```
# nối chuỗi trong (JS)
```
//nối chuỗi
let fullName = firstName + " " + lastName;
console.log(fullname);
```
# Template strings - ES6
Khai báo chuỗi sử dụng ký tự back-tick `` thay cho ký tự nháy đơn hoặc nháy kép.

Khi khai báo chuỗi kiểu này có thể viết chuỗi trong nhiều dòng và có thể dùng dấu nháy đơn hoặc nháy kép thoải mái mà không cần dùng escape character.

Có thể dùng các biến, biểu thức ngay trong chuỗi với cú pháp như sau:
```
`string_text ${expression} string_text`
```

ví dụ:
```
//có sử dụng 
let name = tuan
let year = 2020
console.log( `xin chào các bạn mình tên là ${name}. năm nay mình ${2022 - year} tuổi`)

//không sử dụng
console.log("xin chào các bạn mình tên là" + name + ".năm nay mình" + (2022 - year) + "tuổi";)

```
```
//hiển thị text theo nhiều dòng
console.log(`
 dòng 1
 dòng 2
 dòng 3
`);
```
# kiểu dữ liệu Number

Number (số) là một tập hợp của các con số (0 – 9) không chứa dấu khoảng trắng và có thể chứa dấu trừ (-) nằm ở đầu để đại diện cho số âm.
```
let age = 25;
let num = 5.1;
```
# Math object trong Javascript
Đối tượng Math trong Javascript sẽ giúp bạn thực hiện các biểu thức đặc biệt trong toán học.

Một số phương thức hay được sử dụng

- Math.PI : Lấy ra giá trị của số PI
- Math.round(number) : Làm tròn số bình thường
- Math.ceil(number) : Làm tròn số lên
- Math.floor(number) : Làm tròn số xuống
- Math.random() : Random 1 số ngẫu nhiên trong khoảng 0 -> 1
- Math.min(number1, number 2, … number n) : Lấy ra giá trị nhỏ nhất trong danh sách số
- Math.max(number1, number 2, … number n) : Lấy ra giá trị lớn nhất trong danh sách số
- Math.pow(a, b) : Số mũ (a^b)
- Math.sqrt(number) : Căn bậc 2
- …
```
// 1. Math.PI
console.log(Math.PI); // 3.141592653589793

// 2. Math.ceil : Làm tròn lên
console.log(Math.ceil(1.2)); // 2
console.log(Math.ceil(1.7)); // 2

// 3. Math.floor : Làm tròn xuống
console.log(Math.floor(2.1)); // 2
console.log(Math.floor(2.6)); // 2

// 4. Math.round : Làm tròn bình thường
console.log(Math.round(2.1)); // 2
console.log(Math.round(2.6)); // 3

// 5. Math.min(number1, number 2, … number n) : Lấy ra giá trị nhỏ nhất trong danh sách số
console.log(Math.min(2, 4, 1, 6, 7)); // 1

// 6. Math.max(number1, number 2, … number n) : Lấy ra giá trị lớn nhất trong danh sách số
console.log(Math.max(2, 4, 1, 6, 7)); // 7

// 7. Math.pow(a, b) : Số mũ (a^b)
console.log(Math.pow(2, 3)); // 8

// 8. Math.sqrt(number) : Căn bậc 2
console.log(Math.sqrt(9)); // 3

// ...

```
<https://www.w3schools.com/js/js_math.asp>

# cách cộng biểu thức
chuỗi cộng số sẽ ra chuỗi 

ví dụ : "a" + 1 ="a1"
        "3" + 1 = "31"

chuỗi cộng chuỗi sẽ ra chuỗi 

ví dụ : "a" = "b1" = "ab1" 

        "1" + "1" ="11"

chuỗi số trừ chuỗi số ra số 

ví dụ :

"5" - "3" = 2

chuỗi số nhân,chia chuỗi số ra số

"5" * "3" = 15

"5" * 3 = 15

"15" / "5" = 3

"15" / 5 = 3

số mà *,/,- với chuỗi không phải số sẽ ra kết quả = ( NaN )



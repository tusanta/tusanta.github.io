# Tổng hợp kiến thức

## định nghĩa function

function là tập hợp các đoạn code dùng để thực hiện một tác vụ cụ thể nào đó.

cú pháp định nghĩa function

```
function functionName(para_1, ..., para_n) {
 // code thực thi function
}
```

thực thi function

```
functionName(para_1, ..., para_n)
```
# Phân biệt tham số (parameter) và đối số (argument)
- Tham số (parameter) là biến trong khai báo hàm.

```
function sum(a, b) {
    return a + b;
   }
```

- Đối số (argument) là giá trị thực của biến này được truyền vào hàm.

```
console.log(sum(3, 4));
```

# Một số loại function

- Function có tham số, hoặc không có tham số
- Function có giá trị trả về hoặc không


**1.  Function không có tham số**


```
//dinh nghia function khong co tham so
function sayHello() {
    console.log("xin chao..");
}

sayHello();
```

**2. Function có tham số**

Với function kiểu này có thể có một hoặc nhiều tham số (không nên quá 3 tham số)

```
//function co tham so

function sayHellowithName(name) {
    console.log(`xin chao ${name}`);
}

sayHellowithName("nguyen van a");
sayHellowithName("tran van b");
sayHellowithName("ngo b");

```


```
//function co 2 tham so

function showInfo(name, year) {
    console.log(`xin chao, toi tenla ${name}, nam nay toi ${2022 -year} tuoi`);
}
showInfo("ductuan", 2022);
showInfo("duc thinh", 1996)
```

**3. Function trả về kết quả**

Để trả về kết quả, sử dụng từ khóa return

```
function sum(a, b) {
    return a + b;
}

let data = sum(3, 4);
console.log(data);

// Nếu muốn kiểm tra nhanh kết quả của function có thể sử dụng luôn console.log
console.log(sum(4, 5))
```

**Chú ý** : 

- Những câu lệnh đằng sau từ khóa return sẽ không được thực thi

ví dụ :

```
function sum(a, b) {
    return a + b;
    console.log(a); // không được thực thi
    console.log(b); // không được thực thi
}
```
- Đối với function không có từ khóa return thì coi như function đó không trả về kết quả

# Default Parameter ES6

- Cho phép khởi tạo function với những default value nếu như chúng được định nghĩa sai.
- Khi sử dụng chức năng này sẽ giúp function dễ control và ít error hơn.

ví dụ:

```
function sayHello(name = "Lan Hương") {
    console.log(`Xin chào ${name}`);
}

sayHello(); // Lan Hương
sayHello("Bùi Hiên"); // Bùi Hiên
```
# Phạm vi của biến (scope)

**Scope** có thể hiểu nôm na là “phạm vi sử dụng của biến”

Có 3 loại scope:
- Global scope
- Function scope
- Block scope
## Global scope ( Biến toàn cục)
ví dụ

```
let name = "ĐỨc Tuấn";
let age = 25;

console.log(name);
console.log(age);
```
## Function scope (Biến Nằm Bên Trong function)

Một biến được coi là function scope nếu biến đó được định nghĩa bên trong function
ví dụ :

```
function hello() {
    let name = "ĐỨc Tuấn";
    console.log(name);
}

hello(); // ĐỨc Tuấn
console.log(name) // Lỗi
```
## Block scope (Biến Nằm Bên Trong Dấu {})
Một biến được coi là block scope nếu biến đó được định nghĩa bên trong cặp dấu {}

```
{
    let name = "ĐỨc Tuấn";
    console.log(name); // Bùi Hiên
}

console.log(name) // Lỗi
```

**Chú ý**
Nếu 1 biến không có từ khóa khai báo biến, sẽ trở thành biền global

vi dụ :

```
function sayHello() {
    number = 10;
    console.log(number);
}

sayHello() // 10

console.log(number); // 10
```

# Kiểu dữ liệu Boolean

Giá trị của kiểu dữ liệu này chỉ có thể là true hoặc false

ví dụ:

```
let a = true;
let b = false;
let c = !a;
let d = !b;
```
```
//khai bao kieu boolean
let a = true;
let b = false;

console.log(a);
console.log(b);
console.log(!a);
console.log(!b);
```
# Xác định giá trị Boolean

Để xác định giá trị boolean cho biến, biểu thức,… ta sử dụng hàm **Boolean()**


 ví dụ :

 ```
 let a = 5;
console.log(Boolean(a));

let b = 6;
let c = 10;
console.log(Boolean(b < c));
```


```
//ham boolean

console.log(Boolean(10));
console.log(Boolean(5 > 10));
console.log(Boolean(10 > 5));
```

# Truthy & Falsy value

**Truthy value** là những giá trị mà khi ép kiểu về Boolean thì sẽ cho ra giá trị là **true**.

Ngược lại, **Falsy value** là những giá trị mà khi ép kiểu về Boolean thì cho ra giá trị là **false**

- Có **6 giá trị** sau được coi là **falsy : false, 0, NaN, ‘’, null, undefined**

- Các giá trị còn lại, ngoài các giá trị trên được gọi là **truthy**


 ```
console.log(Boolean(false)); // false

console.log(Boolean(0)); // false

console.log(Boolean(NaN)); // false

console.log(Boolean("")); // false

console.log(Boolean(null)); // false

console.log(Boolean(undefined)); // false

```

**Toán Tử**


```
// 1 so toan tu: !, || , &&

console.log("toan tu dieu kien &&");
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);

console.log("toan tu dieu kien ||");
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);
```

# Câu lệnh if


Thực hiện câu lệnh trong if nếu điều kiện cho trước là đúng.


```
// Cú pháp
if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
}

// Ví dụ
let hour = 6;
if (hour < 10) {
    console.log("Good morning!");
}
```


# Câu lệnh if - else


Nếu **điều kiện đúng** thực hiện câu lệnh trong **if**, ngược lại nếu **điều kiện sai** thì hiện câu lệnh trong **else**


```
// Cú pháp
if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
} else {
    // Code được thực thi nếu điều kiện sai
}

// Ví dụ
let hour = 6;
if (hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}
```

```
// vi du 1

let troiDep = true;
let coTien = true;
if( troiDep && coTien){
    console.log("di choi");
}
```

# Câu lệnh if - else if - else

Chỉ định một điều kiện mới nếu điều kiện đầu tiên là sai


```
// Cú pháp
if (điều kiện 1) {
    // Code được thực thi nếu điều kiện 1 đúng
} else if (điều kiện 2) {
    // Code được thực thi nếu điều kiện 1 sai và điều kiện 2 đúng
} else {
    // Code được thực thi nếu điều kiện 1 và 2 sai
}

// Ví dụ
let hour = 6;
if (hour < 12) {
    console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
```

# Sự khác biệt giữa == và ===

== và === đều được sử dụng để so sánh.

- == so sánh trìu tượng (abstract equality): (so sánh về mặt giá trị)

- === so sánh nghiêm ngặt (strict equality):  (so sánh về mặt giá trị và kiểu dữ liệu)


ví dụ :


```
let a = 2;
let b = "2";

// Sử dụng toán tử ==
console.log(a == b) // true
// Đúng vì b khi thực hiện so sánh sẽ được convert sang dang số (2) 2 == 2 --> true

// Sử dụng toán tử ===
console.log(a === b) // false
// Sai vì kiểu dữ liệu của a là number và của b là string
```

# Toán Tử 3 Ngôi

- dùng ? thay cho if

- dùng : thay cho else

ví dụ:

```
if(hour < 12) {
console.log("good morning");
} else{
    console.log("good afternoon");
}
hour < 12
  ? console.log("good morning")

  : console.log("good afternoon");
  ```

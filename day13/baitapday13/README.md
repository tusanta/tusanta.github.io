# string methods
- charAt():

  -Trả về ký tự tại chỉ mục (index) đã xác định( 0 là ký tự của phần tử đầu tiên length-1 là ký tự của phần tử cuối cùng).


  -trả về một chuỗi rỗng nếu chỉ số truyền vào nằm ngoài phạm vi!


- length(): 


  -Để lấy độ dài của chuỗi trong javascript 


- charCodeAt():


   -Trả về một số chỉ dẫn giá trị Unicode của ký tự tại chỉ mục đã cho


- concat():


  -so khớp văn bản của hai chuỗi và trả về một chuỗi mới.



  -Nếu đối số đã thông qua không phải là một chuỗi thì nó sẽ 
   chuyển đổi đối số thành chuỗi và sau đó ghép nối nó.


- endsWith():


  -Để kiểm tra xem một chuỗi kết thúc bằng các ký tự được chỉ định hay không.


  -Nó sẽ trả về giá trị boolean và có thể thêm tham số độ dài (tùy chọn). Phương thức endWith() là phân biệt Hoa thường.


- includes():


  -Để kiểm tra xem một chuỗi chứa các ký tự được chỉ định.


  -Nó sẽ trả về giá trị boolean (true hoặc false). Có thể thêm vị trí chỉ định trong chuỗi để bắt đầu tìm kiếm.


- indexOf():


  -Để kiểm tra sự xuất hiện đầu tiên của một giá trị được chỉ định trong một chuỗi.


  -Phương thức này trả về vị trí đầu tiên của giá trị tìm thấy. Nếu giá trị không nằm trong chuỗi, nó sẽ trả về -1.


- lastIndexOf():


  -Để kiểm tra lần xuất hiện đầu tiên của một giá trị được chỉ định trong một chuỗi.


  -Giá trị được kiểm tra từ cuối ngược trở lại. Nhưng giá trị trả về thì vẫn tính theo chỉ số index.


  -Nếu giá trị không nằm trong chuỗi, nó sẽ trả về -1. Tham số thứ 2 là vị trí bắt đầu tìm kiếm ngược trở lại. Nếu không có, mặc định là tìm kiếm từ cuối chuỗi.


- match():


  -Được sử dụng để so khớp một Regular Expression với một chuỗi


- repeat():


  -trả về chuỗi được lặp lại một số lần cụ thể theo tham số truyền vào.


- replace():


  -dùng để thay thế một mẫu (pattern) trong một chuỗi nhất định. Mẫu có thể là một chuỗi hoặc một biểu thức chính quy (regex) và thay thế có thể là một chuỗi hoặc một hàm được gọi trên mỗi kết quả khớp.


    -Nếu các thay thế hoặc mẫu là một chuỗi thì chỉ có lần xuất hiện đầu tiên được thay thế.


- search():


  -Thực thi việc tìm kiếm cho một sự so khớp giữa một Regular Expression và một chuỗi đã xác định



- slice():


  -cắt lấy một phần của chuỗi, và trả về trong một chuỗi mới, mà không sửa đổi chuỗi gốc.


  -Phương thức slice() cần có 2 tham số.


  1. Begin Index là nơi bắt đầu cắt chuỗi


  2. End Index tùy chọn nơi dừng lại để cắt chuỗi.


  -Nếu không có End Index truyền vào, mặc định nó sẽ cắt chuỗi đến cuối chuỗi.


  -Chỉ số âm sẽ đếm ngược từ cuối chuỗi.


- split():


  -tạo ra một mảng từ một chuỗi.


  -có thể sử dụng một chuỗi phân tách được chỉ định để xác định cách phân tách chuỗi ra như thế nào.


- startsWith():


  -Kiểm tra xem một chuỗi bắt đầu bằng các ký tự được chỉ định.


  -Nó sẽ trả về giá trị boolean và có thể thêm vị trí bắt đầu tìm kiếm.


  - phân biệt Hoa thường.


- substr():


  -tìm kiếm chính xác một chuỗi ký tự cụ thể từ chuỗi ban đầu dựa trên các tham số truyền vào ký tự bắt đầu và chiều dài ký tự, sau đó trả về chính xác chuỗi ký tự được tìm thấy.



  -Tham số bắt đầu là nơi tìm kiếm chuỗi con bắt đầu và tham số chiều dài chỉ định số ký tự cần trích xuất.


  -Nếu tham số chiều dài không được cung cấp, tất cả các ký tự từ vị trí bắt đầu sẽ được trích xuất. Nếu độ dài bằng 0 hoặc giá trị âm, thì substr () sẽ trả về một chuỗi rỗng. 


- substring():


  -Để lấy một phần của chuỗi giữa các chỉ số bắt đầu và kết thúc, hoặc đến cuối chuỗi.


  -Bất kỳ giá trị đối số nào nhỏ hơn 0 hoặc lớn hơn stringName.length đều được xử lý như thể nó là 0 và stringName.length tương ứng. Bất kỳ giá trị đối số nào là NaN đều được xử lý như thể nó là 0.


- toLowerCase():


  -Các ký tự bên trong một chuỗi được biến đổi thành kiểu chữ thường


- toUpperCase():


  -Các ký tự bên trong một chuỗi được biến đổi thành kiểu chữ hoa 


- toString(): 



  -ép kiểu cho giá trị truyền vào thành một giá trị thuộc kiểu string.


- trim():


  -loại bỏ khoảng trắng ở hai đâu của chuỗi.


- valueOf():


  -trả về giá trị gốc của một đối tượng String.



  # array methods 


- push():

  -Thêm phần tử vào cuối mảng.


- unshift(): 


  -Thêm phần tử vào đầu mảng.


- pop():


   -Xóa phần tử cuối cùng trong mảng.


- shift(): 


  -Xóa phần tử đầu tiên trong mảng


- every():


  -dùng để kiểm tra trả về true nếu tất cả element đều thoả mản điều kiện của callback function, ngược lại trả về false nếu có ít nhất một element không thoả màn điều kiện.


- some():


   -dùng để kiểm tra trả về true nếu ít nhất một element thoả mản điều kiện của callback function, ngược lại trả về false nếu không có element nào thoả màn điều kiện.


- map():


  -giúp tạo ra một mảng mới với các phần tử là kết quả từ việc thực thi một hàm lên TỪNG PHẦN TỬ của mảng ban đầu.


  -map() KHÔNG làm thay đổi mảng ban đầu.


-  find():


   -dùng để lọc phần tử trong mảng, tuy nhiên nó sẽ trả về giá trị ĐẦU TIÊN tìm thấy ở trong mảng hoặc có thể trả về undefined nếu không tìm thấy


   -find() KHÔNG làm thay đổi mảng ban đầu.


- reduce():


   -dùng để tính toán từ các phần tử của mảng (theo thứ tự từ trái sang phải).


   1. làm phẳng mảng


   2. thay thế cho filter


   3. tính tổng


   4. nối mảng


   5. ...



- splice():


  -sử dụng để xóa các phần tử trong mảng và sẽ trả về các phần tử đã xóa.


- slice():

  -dùng để trích xuất một số phần tử trong mảng js.

  -Method này sẽ trả về mảng con từ vị trí start đến vị trí (end - 1) của mảng

- filter():


   -filter() dùng để lọc ra các phần tử trong mảng thoả mãn một 
    điều kiện nào đó.


   -filter() KHÔNG làm thay đổi mảng ban đầu


   -filter() trả về 1 mảng mới sau khi lọc


   -filter() trả về một mảng RỖNG nếu không có phần tử nào thỏa
    mãn điều kiện


-  includes():


   -includes() kiểm tra xem phần tử đã cho có tồn tại trong mảng  hay không


   -includes() KHÔNG làm thay đổi mảng ban đầu


   -includes() trả về kiểu Boolean: true nếu tìm thấy hoặc false nếu không tìm thấy


- forEach():

  -forEach() dùng để duyệt qua từng phần tử của mảng


  -forEach() trả về undefined

- findIndex

   -method lặp qua array elements và trả về index của element đầu tiên passed điều kiện của callback function, nếu không tìm thấy element nào thoả mản trả về -1.

- sort():

  -Mặc định các phần tử sẽ được sắp xếp theo bảng chữ cái với thứ tự tăng dần.


  -sort() CÓ làm thay đổi mảng ban đầu


  -sort() trả về mảng sau khi được sắp xếp


- concat():

    -dùng để nối 2 hay nhiều mảng với nhau

 
    -KHÔNG làm thay đổi mảng ban đầu


   -trả về 1 mảng mới sau khi nối


-  join():

  -dùng để tạo ra một chuỗi mới bằng cách nối tất cả các phần tử của mảng, mặc định ngăn cách chúng bởi dấu phẩy hoặc một chuỗi ký tự xác định.


  -KHÔNG làm thay đổi mảng ban đầu


  -trả về chính phần tử nếu mảng chỉ có một phần tử


  -trả về một chuỗi rỗng "" nếu arr.length === 0


- Array length():

  -Trả về độ dài của một mảng:





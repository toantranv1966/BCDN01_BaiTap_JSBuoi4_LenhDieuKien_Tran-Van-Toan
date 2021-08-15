// Bài 1 : Viết chương trình xuất 3 số theo thứ tự tăng dần
// Sử dụng If ...Else lồng nhau.

/**
 * Khối 1 : Inputs
 * Number1, Number2, Number3
 * 
 * Khối 2 : Xử lý
 * B1 : Tạo biến lấy kết quả từ form
 * 
 * B2 : 
 * So sánh Number1, Number2
 * 
 * Xét trường hợp 1 : Number1 > Number2
 *  + Xét Number1 > Number3
 *      - if Number2 > Number3 => Xuất ra màn hình : Number3, Number2,Number1
 *          Ngược lại Xuất ra màn hình : Number2, Number3, Number1
 *  + Ngược lại : Xuất ra màn hình : Number2, Number1, Number3
 * 
 * Xét trường hợp 2 : Number1 < Number2
 *  + Xét Number2 > Number3
 *      - if Number3 > Number1 => Xuất ra màn hình : Number1, Number3, Number2
 *          Ngược lại Xuất ra màn hình : Number3, Number1, Number2
 *  + Ngược lại : Xuất ra màn hình : Number1, Number2, Number3
 * 
 * Khối 3 : Outputs
 * 
 * Xuất kết quả 3 số nguyên theo thứ tự tăng dần
 * 
 */

function xuat3So(){
    var Number1 = parseInt(document.getElementById("soThu1").value);
    var Number2 = parseInt(document.getElementById("soThu2").value);
    var Number3 = parseInt(document.getElementById("soThu3").value);

    // Kiểm tra các số nguyên nhập vào
    console.log("Các số nguyên nhập vào : ");
    console.log(Number1,Number2,Number3);


    // Xét trường hợp 1 : Number1 > Number2
if(Number1 > Number2){
    if(Number1 > Number3){
        if(Number2 > Number3)
        {
            document.getElementById("txtThongbao").innerHTML = "Xuất các số nguyên tăng dần :" + Number3 + ", " + Number2 + ", " + Number1;
        }
        else
        {
            document.getElementById("txtThongbao").innerHTML = "Xuất các số nguyên tăng dần :" + Number2 + ", " + Number3 + ", " + Number1;
        } 
    }else{
            document.getElementById("txtThongbao").innerHTML = "Xuất các số nguyên tăng dần :" + Number2 + ", " + Number1 + ", " + Number3;
        }
    }

// Xét trường hợp 2 : Ngược lại Number1 < Number2
else{
    if(Number2 > Number3){
        if(Number3 > Number1)
        {
            document.getElementById("txtThongbao").innerHTML = "Xuất các số nguyên tăng dần :" + Number1 + ", " + Number3 + ", " + Number2;
        }
        else
        {
            document.getElementById("txtThongbao").innerHTML = "Xuất các số nguyên tăng dần :" + Number3 + ", " + Number1 + ", " + Number2;
        } 
    }
    else{
        document.getElementById("txtThongbao").innerHTML = "Xuất các số nguyên tăng dần :" + Number1 + ", " + Number2 + ", " + Number3;
    }
} 
}

document.getElementById("btnXuat").onclick = xuat3So;

// Bài 2 : Viết chương trình chào hỏi ai sử dụng máy
// Sử dụng Switch ... Case

/**
 * Khối 1 : Inputs
 * userName
 * 
 * Khối 2 : Xử lý
 * B1 : Tạo biến lấy kết quả từ form
 * 
 * B2 : 
 * Chuyển ký tự => ký tự hoa
 * B3 :
 * Sử dụng Switch ...case
 *  - case B : Xuất kết quả : Bố
 *    kết thúc
 * - case M : Xuất kết quả : Mẹ
 *    kết thúc
 * - case A : Xuất kết quả : Anh
 *    kết thúc
 * - case E : Xuất kết quả : Em
 *    kết thúc
 * 
 * 
 * Khối 3 : Outputs
 * 
 * Xuất kết quả người sử dụng máy tính
 * 
 */

function whoUser(){
    var userName = document.getElementById("inputUser").value;
    switch (userName)
    {
        case "B":
            document.getElementById("txtUsername").innerHTML = "Người sử dụng máy là bố.";
            break;
        case "M":
            document.getElementById("txtUsername").innerHTML = "Người sử dụng máy là mẹ.";
            break;
        case "A":
            document.getElementById("txtUsername").innerHTML = "Người sử dụng máy là anh.";
            break;
        case "E":
            document.getElementById("txtUsername").innerHTML = "Người sử dụng máy là em.";
            break;
        default:
            document.getElementById("txtUsername").innerHTML = "Vui lòng nhập ký tự đại diện thành viên gia đình !";
            console.log("Vui lòng nhập ký tự đại diện thành viên gia đình !");
    }
}

document.getElementById("btnUser").onclick = whoUser;

// Bài 3 : Viết chương trình kiểm tra chẵn lẻ
// Sử dụng If ...Else

/**
 * Khối 1 : Inputs
 * number1, number2, number3
 * 
 * 
 * Khối 2 : Xử lý
 * B1 : Tạo biến lấy kết quả từ form
 * 
 * B2 : 
 * sum = number1 + number2 + number3
 * B3 :
 * Sử dụng If ...Else
 *  Trường hợp 1 : sum % 2 = 0
 *      Nếu number1 % 2 # 0 hoặc number2 % 2 # 0 hoặc number3 % 2 # 0
 *          Thì có 2 số lẻ + 1 số chẵn
 *      Ngược lại có 3 số chẵn
 * 
 * Trường hợp 2 : sum / 2 # 0
 *      Nếu number1 % 2 =  0 hoặc number2 % 2 = 0 hoặc number3 % 2 = 0
 *          Thì có 2 số chẵn + 1 số lẻ
 *      Ngược lại có 3 số lẻ
 * 
 * 
 * Khối 3 : Outputs
 * 
 * Xuất kết quả có bao nhiêu số lẻ, bao nhiêu số chẵn
 * 
 */

 function checkNum(){
    var num1 = parseInt(document.getElementById("inputNum1").value) ;
    var num2 = parseInt(document.getElementById("inputNum2").value) ;
    var num3 = parseInt(document.getElementById("inputNum3").value) ;
    var sum = num1 + num2 + num3;
    console.log(sum);
    console.log(sum % 2);

    if(sum % 2 == 0)
    {
        if((num1 % 2 != 0) || (num2 % 2 != 0) || (num3 % 2 != 0))
        {
            document.getElementById("txtnumberCheck").innerHTML = "Có 2 số lẻ & 1 số chẵn.";
        }
        else
            document.getElementById("txtnumberCheck").innerHTML = "Có 3 số chẵn.";
    }
    else{
        if((num1 % 2 == 0) || (num2 % 2 == 0) || (num3 % 2 == 0))
        {
            document.getElementById("txtnumberCheck").innerHTML = "Có 1 số lẻ & 2 số chẵn.";
        }else
            document.getElementById("txtnumberCheck").innerHTML = "Có 3 số lẻ.";
    }

}

document.getElementById("btnnumberCheck").onclick = checkNum;


// Bài 4 : Viết chương trình nhập vào 3 cạnh tam giác, cho biết tam giác gì?
// Sử dụng If ...Else

/**
 * Khối 1 : Inputs
 * User nhập vào 3 cạnh tam giác a, b, c
 * 
 * 
 * Khối 2 : Xử lý
 * B1 : Tạo biến lấy kết quả từ form
 * 
 * B2 :
 * Sử dụng If ...Else
 * Nếu a = b = c => KQ : Tam giá đều
 * Nếu a = b hoặc b = c => Tam giá cân
 * So sánh 3 cạnh tam giác , tìm ra cạnh lớn nhất = cạnh huyền
 * Nếu bình phương c =  bình phương a + bình phương b => Tam giá vuông cân
 * 
 * Khối 3 : Outputs
 * 
 * Xuất kết quả loại tam giác
 * 
 */

 function kiemtraTamgiac()
 {
    var a = parseInt(document.getElementById("inputCanha").value) ;
    var b = parseInt(document.getElementById("inputCanhb").value) ;
    var c = parseInt(document.getElementById("inputCanhc").value) ;


    if(a == b && b == c)
    {
        document.getElementById("txtTamgiac").innerHTML = "Tam giác đều.";
    }else if(a == b || b == c || a == c)
            {
                document.getElementById("txtTamgiac").innerHTML = "Tam giác cân.";
            }

 // Xét trường hợp 1 : Cạnh a > Cạnh b
            else if(a > b)
                {
                    if(a > c)
                    {
                        if(Math.pow(a,2) == Math.pow(b,2) + Math.pow(c,2))
                        document.getElementById("txtTamgiac").innerHTML = "Tam giác vuông";
                    }else
                        {
                        if(Math.pow(c,2) == Math.pow(b,2) + Math.pow(a,2))
                        document.getElementById("txtTamgiac").innerHTML = "Tam giác vuông";
                        }
                }

// Xét trường hợp 2 : Ngược lại Cạnh a < Cạnh b
                else if(b > c)
                    {
                        if(Math.pow(b,2) == Math.pow(c,2) + Math.pow(a,2))
                        document.getElementById("txtTamgiac").innerHTML = "Tam giác vuông";
                    }else if(Math.pow(c,2) == Math.pow(b,2) + Math.pow(a,2))
                            {
                                document.getElementById("txtTamgiac").innerHTML = "Tam giác vuông";
                            }else
                            {
                                document.getElementById("txtTamgiac").innerHTML = "Tam giác thường";
                            }
}

document.getElementById("btnTamgiac").onclick = kiemtraTamgiac;
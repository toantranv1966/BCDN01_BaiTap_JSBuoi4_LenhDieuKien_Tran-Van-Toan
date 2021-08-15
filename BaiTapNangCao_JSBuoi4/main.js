// Bài 1 : Viết chương trình nhập ngày, tháng, năm cho biết ngày tiếp theo 
// Sử dụng kết hợp Switch case + If ...else

/**
 * Khối 1 : Inputs
 * month, year
 * 
 * Khối 2 : Xử lý
 * B1 : Tạo biến lấy kết quả từ form
 * 
 * B2 : 
 * month = 1 : 31 ngày
 * month = 2 : nếu year % 4 = 0 => 29 ngày
 *              ngược lại 28 ngày
 * month = 3 : 31 ngày
 * month = 4 : 30 ngày
 * month = 5 : 31 ngày
 * month = 6 : 30 ngày
 * month = 7 : 31 ngày
 * month = 8 : 31 ngày
 * month = 9 : 30 ngày
 * month = 10 : 31 ngày
 * month = 11 : 30 ngày
 * month = 12 : 31 ngày
 * 
 * 
 * Khối 3 : Outputs
 * 
 * Xuất kết quả tháng có bao nhiêu ngày
 * 
 */

 function thangNgay(){
    var Month = parseInt(document.getElementById("month").value);
    var Year = parseInt(document.getElementById("Year").value);


    // Sử dụng câu lệnh điều kiện Switch case + If ... else

    if (Month == 2 && Year % 4 == 0)
    {
        document.getElementById("txtSongay").innerHTML = "Tháng 2 năm nhuần có 29 ngày";
    }else
    {
        document.getElementById("txtSongay").innerHTML = "Tháng 2 có 28 ngày";
    }
    switch (Month)
    {
        case 1:
            document.getElementById("txtSongay").innerHTML = "Tháng 1 có 31 ngày";
            break;
        case 3:
            document.getElementById("txtSongay").innerHTML = "Tháng 3 có 31 ngày";
            break;
        case 4:
            document.getElementById("txtSongay").innerHTML = "Tháng 4 có 30 ngày";
            break;
        case 5:
            document.getElementById("txtSongay").innerHTML = "Tháng 5 có 31 ngày";
            break;
        case 6:
            document.getElementById("txtSongay").innerHTML = "Tháng 6 có 30 ngày";
            break;
        case 7:
            document.getElementById("txtSongay").innerHTML = "Tháng 7 có 31 ngày";
            break;
        case 8:
            document.getElementById("txtSongay").innerHTML = "Tháng 8 có 31 ngày";
            break;
        case 9:
            document.getElementById("txtSongay").innerHTML = "Tháng 9 có 30 ngày";
            break;
        case 10:
            document.getElementById("txtSongay").innerHTML = "Tháng 10 có 31 ngày";
            break;
        case 11:
            document.getElementById("txtSongay").innerHTML = "Tháng 11 có 30 ngày."
            break;
        case 12:
            document.getElementById("txtSongay").innerHTML = "Tháng 12 có 31 ngày";
            break;
        default:
    }
}

document.getElementById("btnTinhngay").onclick = thangNgay;



// Bài 2 : Viết chương trình nhập tháng, năm cho biết có bao nhiêu ngày 
// Sử dụng kết hợp Switch case + If ...else

/**
 * Khối 1 : Inputs
 * month, year
 * 
 * Khối 2 : Xử lý
 * B1 : Tạo biến lấy kết quả từ form
 * 
 * B2 : 
 * month = 1 : 31 ngày
 * month = 2 : nếu year % 4 = 0 => 29 ngày
 *              ngược lại 28 ngày
 * month = 3 : 31 ngày
 * month = 4 : 30 ngày
 * month = 5 : 31 ngày
 * month = 6 : 30 ngày
 * month = 7 : 31 ngày
 * month = 8 : 31 ngày
 * month = 9 : 30 ngày
 * month = 10 : 31 ngày
 * month = 11 : 30 ngày
 * month = 12 : 31 ngày
 * 
 * 
 * Khối 3 : Outputs
 * 
 * Xuất kết quả tháng có bao nhiêu ngày
 * 
 */

// function thangNgay(){
//     var Month = parseInt(document.getElementById("month").value);
//     var Year = parseInt(document.getElementById("Year").value);


//     // Sử dụng câu lệnh điều kiện Switch case + If ... else

//     if (Month == 2 && Year % 4 == 0)
//     {
//         document.getElementById("txtSongay").innerHTML = "Tháng 2 năm nhuần có 29 ngày";
//     }else
//     {
//         document.getElementById("txtSongay").innerHTML = "Tháng 2 có 28 ngày";
//     }
//     switch (Month)
//     {
//         case 1:
//             document.getElementById("txtSongay").innerHTML = "Tháng 1 có 31 ngày";
//             break;
//         case 3:
//             document.getElementById("txtSongay").innerHTML = "Tháng 3 có 31 ngày";
//             break;
//         case 4:
//             document.getElementById("txtSongay").innerHTML = "Tháng 4 có 30 ngày";
//             break;
//         case 5:
//             document.getElementById("txtSongay").innerHTML = "Tháng 5 có 31 ngày";
//             break;
//         case 6:
//             document.getElementById("txtSongay").innerHTML = "Tháng 6 có 30 ngày";
//             break;
//         case 7:
//             document.getElementById("txtSongay").innerHTML = "Tháng 7 có 31 ngày";
//             break;
//         case 8:
//             document.getElementById("txtSongay").innerHTML = "Tháng 8 có 31 ngày";
//             break;
//         case 9:
//             document.getElementById("txtSongay").innerHTML = "Tháng 9 có 30 ngày";
//             break;
//         case 10:
//             document.getElementById("txtSongay").innerHTML = "Tháng 10 có 31 ngày";
//             break;
//         case 11:
//             document.getElementById("txtSongay").innerHTML = "Tháng 11 có 30 ngày."
//             break;
//         case 12:
//             document.getElementById("txtSongay").innerHTML = "Tháng 12 có 31 ngày";
//             break;
//         default:
//     }




// }


// document.getElementById("btnTinhngay").onclick = thangNgay;

// Bài 3 : Viết chương trình nhập vào số nguyên có 3 chữ số, in ra cách đọc nó

/**
 * Khối 1 : Inputs
 * inputNumber
 * 
 * Khối 2 : Xử lý
 * B1 : Tạo biến lấy kết quả từ form
 * 
 * B2 : 
 * Tách số nguyên => hàng trăm, hàng chục, hàng đơn vị
 * var hangTram = Math.floor(number / 100)
 * var hangChuc = Math.floor( (number % 100) / 10 )
 * var hangDonvi = (number % 100) % 10
 * 
 * Sử dụng Switch case
 * 
 * docSo = 
 * 
 * 
 * 
 * 
 * 
 * 
 * Khối 3 : Outputs
 * 
 * Xuất kết quả cách đọc số ra màn hình
 * 
 */


function docSo(){
    var number = parseInt(document.getElementById("inputNumber").value);
    var hangTram = Math.floor(number / 100);
    console.log(hangTram);
    var hangChuc = (number % 100);
    hangChuc = Math.floor(hangChuc / 10);
    console.log(hangChuc);
    var hangDonvi = (number % 100) % 10;
    console.log(hangDonvi);
}

document.getElementById("btnIncachdoc").onclick=docSo;
/**
 * Created by Belive on 2017/2/24.
 */
$(function () {
    $(".meun-item").click(function () {
        $(".meun-item").removeClass("meun-item-active");
        $(this).addClass("meun-item-active");
    });
    $("#topAD").click(function () {
        $("#topA").toggleClass(" glyphicon-triangle-right");
        $("#topA").toggleClass(" glyphicon-triangle-bottom");
    });
    $("#topBD").click(function () {
        $("#topB").toggleClass(" glyphicon-triangle-right");
        $("#topB").toggleClass(" glyphicon-triangle-bottom");
    });
    $("#topCD").click(function () {
        $("#topC").toggleClass(" glyphicon-triangle-right");
        $("#topC").toggleClass(" glyphicon-triangle-bottom");
    });
    $(".toggle-btn").click(function () {
        $("#leftMeun").toggleClass("show");
        $("#rightContent").toggleClass("pd0px");
    });

    console.dir($("#Staff_tr"));
    $.each($("#Staff_tr"), function (i) {
        alert(1);
        $(this).eq(2*i).css("background","#ccc");
        $(this).eq(2*i+1).css("background","#c0c0c0");
    });

})

//window.onload= function () {
//    var trArr = document.getElementById("Staff_tr");
//    console.log(trArr.length);
//    for(var i=0;i<trArr.length;i++){
//        if(i%2==0){
//            trArr[i].style.backgroundColor = "#ccc";
//        }else{
//            trArr[i].style.backgroundColor = "#c0c0c0";
//        }
//    }
//    var color = "";
//    for(var i=0;i<trArr.length;i++){
//        trArr[i].onmouseover = function () {
//            color = this.style.backgroundColor;
//            this.style.backgroundColor = "#fff";
//        }
//        trArr[i].onmouseout = function () {
//            this.style.backgroundColor = color;
//        }
//    }
//}
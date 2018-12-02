import  $ from 'jquery';

$(document).ready(function(){
    $("#login").addClass("selected");
    $("#registerform").css('display','none');
    $("#forgotpassword").removeClass("selected");
    $("#login").click(function(){
        $("#registerform").css('display','none');
        $("#loginform").css('display', 'block');
        $("#login").addClass("selected");
        $("#register").removeClass("selected");
        $("#forgotpassword").removeClass("selected");
        $("#loginpage").removeClass("deselected");
    });
    $("#register").click(function(){
           $("#loginform").css({'display':'none'});
           $("#registerform").css('display', 'block');
           $("#register").addClass("selected");
           $("#login").removeClass("selected");
           $("#forgotpassword").removeClass("selected");
    });
    $("#forgot").click(function(){
        $("#forgotpassword").addClass("selected");
        $("#loginpage").addClass("deselected");
        $(".header").addClass("deselected");
    });

    $(".glyphicon-arrow-left").click(function(){
        $(".header").removeClass("deselected");
        $("#loginpage").removeClass("deselected");
        $("#forgotpassword").removeClass("selected");
        
    });

  });
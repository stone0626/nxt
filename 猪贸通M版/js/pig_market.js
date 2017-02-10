/**
 * 
 * @authors 赵石
 * @date    2016-04-11 17:19:07
 * @version $Id$
 */


// 选择区域
$(function(){
  $("#pig_add01 li").click(function(){
    $("#pig_add01").css({display: "none"});
    $("#pig_add02").css({display: "block"});
    $(".pig_add_cur").css({display: "block"});
    $(".cur01").css({display: "block"});
    $(".cur01").text($(this).text());
  });
  $("#pig_add02 li").click(function(){
    $("#pig_add02").css({display: "none"});
    $("#pig_add03").css({display: "block"});
    $(".cur02").css({display: "block"});
    $(".cur02").text($(this).text());
  });
  $("#pig_add03 li").click(function(){
    $("#pig_add03").css({display: "none"});
    $(".cur03").css({display: "block"});
    $(".cur03").text($(this).text());
  });
  $(".cur03").click(function(){
    $(this).css({display: "none"});
    $("#pig_add03").css({display: "block"})
  });
  $(".cur02").click(function(){
    $(this).css({display: "none"});
    $(".cur03").css({display: "none"});
    $("#pig_add03").css({display: "none"})
    $("#pig_add02").css({display: "block"})
  });
  $(".cur01").click(function(){
    $(this).css({display: "none"});
    $(".cur02").css({display: "none"});
    $(".cur03").css({display: "none"});
    $("#pig_add03").css({display: "none"})
    $("#pig_add02").css({display: "none"})
    $("#pig_add01").css({display: "block"})
  });
  $(".pig_add_clo").click(function(){
    $(".pig_add_cover").css({display: "none"})
    $(".pig_add").css({display: "none"})
  });
  $(".pig_add_cur button").click(function(){
    $(".pig_add_cover").css({display: "none"})
    $(".pig_add").css({display: "none"})
  });
  $(".pig_sort_li_01").click(function(){
    $(".pig_add_cover").css({display: "block"})
    $(".pig_add").css({display: "block"})
  });



// 选择品种、选择供求
  $(".pig_sort_li_02").click(function(){
    $(".pig_add_cover").css({display: "block"})
    $("#pig_variety").css({display: "block"})
  });
  $("#pig_variety_ul li").click(function(){
    $("#pig_variety_ul").css({display: "none"});
    $(".pig_add_cur").css({display: "block"});
    $("#pig_variety_top li").css({display: "block"});
    $("#pig_variety_top li").text($(this).text());
  });
  $("#pig_variety_top li").click(function(){
    $(this).css({display: "none"});
    $("#pig_variety_ul").css({display: "block"})
  });

  $(".pig_sort_li_03").click(function(){
    $(".pig_add_cover").css({display: "block"})
    $("#pig_trade").css({display: "block"})
  });
  $("#pig_trade_ul li").click(function(){
    $("#pig_trade_ul").css({display: "none"});
    $(".pig_add_cur").css({display: "block"});
    $("#pig_trade_top li").css({display: "block"});
    $("#pig_trade_top li").text($(this).text());
  });
  $("#pig_trade_top li").click(function(){
    $(this).css({display: "none"});
    $("#pig_trade_ul").css({display: "block"})
  });

  

// 选择筛选
  $(".pig_sort_li_04").click(function(){
    $(".pig_filter_wrapper").css({display: "block"});
  });
  $(".pig_filter_wrapper header a").click(function(){
    $(".pig_filter_wrapper").css({display: "none"});
  });
  $(".pig_filter_btn .btn02").click(function(){
    $(".pig_filter_wrapper").css({display: "none"});
  });
  // 前三个调用之前的页面
  $(".pig_p01").click(function(){
    $(".pig_add_cover").css({display: "block"});
    $(".pig_add").css({display: "block"});
  });
  $(".pig_p02").click(function(){
    $(".pig_add_cover").css({display: "block"})
    $("#pig_trade").css({display: "block"})
  });
  $(".pig_p03").click(function(){
    $(".pig_add_cover").css({display: "block"})
    $("#pig_variety").css({display: "block"})
  });

  //后两个引用的父级的框架 
  $(".pig_p04").click(function(){
    $(".pig_add_cover").css({display: "block"})
    $("#pig_price").css({display: "block"})
  });
  $("#pig_price_ul li").click(function(){
    $("#pig_price_ul").css({display: "none"});
    $(".pig_add_cur").css({display: "block"});
    $("#pig_price_top li").css({display: "block"});
    $("#pig_price_top li").text($(this).text());
  });
  $("#pig_price_top li").click(function(){
    $(this).css({display: "none"});
    $("#pig_price_ul").css({display: "block"})
  });

  $(".pig_p05").click(function(){
    $(".pig_add_cover").css({display: "block"})
    $("#pig_status").css({display: "block"})
  });
  $("#pig_status_ul li").click(function(){
    $("#pig_status_ul").css({display: "none"});
    $(".pig_add_cur").css({display: "block"});
    $("#pig_status_top li").css({display: "block"});
    $("#pig_status_top li").text($(this).text());
  });
  $("#pig_status_top li").click(function(){
    $(this).css({display: "none"});
    $("#pig_status_ul").css({display: "block"})
  });

  $(".pig_add_cover").click(function(){
    $(this).css({display: "none"});
    $(".pig_add").css({display: "none"});
  });

});

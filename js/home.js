$(function(){

    //地址
    $('._hover')
    .mouseenter(function(){
        $('.citys').show();
        $('.left>a').addClass('left_hover_in');
    })
    .mouseleave(function(){
        $('.citys').hide();
        $('.left>a').removeClass('left_hover_in');
    });

    //地址改变
    $('.city_up>div').click(function(){
        $('.city_current').removeClass();
        $(this).children('a').addClass('city_current');
        // $(this).children('a').html()
        $('.left>a').html('<img src="./img/add.png"></img>' +$(this).children('a').html())
        // console.log($('.left>a').text($(this).children('a').html())) ;
    })

    //我的京东
    show_hide('.right>ul>li:eq(1)', '.myJD');
    //企业采购
    show_hide('.right>ul>li:eq(3)', '.business_buy');
    //客服服务
    show_hide('.right>ul>li:eq(4)', '.customer_service');
    //网站导航
    show_hide('.right>ul>li:eq(5)', '.navigation');
    //手机京东
    show_hide('.right>ul>li:eq(6)', '.triangle', '.phone_JD');




    //参数： jquery选择器
    function show_hide(obj, targit, targit2){
        $(obj).hover(function(){
            var result = obj+'>a';
            $(result).addClass('hover_in');
            // 
            // console.log(result);
            $(targit).show();
            $(targit2).show();
        }, function(){
            var result = obj+'>a';
            $(result).removeClass('hover_in');
            // $(obj+">a").removeClass('hover_in');
            $(targit).hide();
            $(targit2).hide();
        })
    }

})
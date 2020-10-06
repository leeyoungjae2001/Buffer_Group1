// 硫붿씤 �뱀뀡�곸뿭 �ㅽ겕濡� �대깽��

var pager = $(".pager li"); // 蹂몃Ц �ㅻⅨ履� 怨좎젙 踰꾪듉

var contents = $("#wrap>section"); // 蹂몃Ц �곸뿭




// �ㅽ겕濡ㅼ씠 諛쒖깮�� ��

$(window).scroll(function(){

 var sct = $(window).scrollTop();

 contents.each(function(){

  var tg = $(this);

  var i = tg.index();

  if(tg.offset().top <= sct){

pager.removeClass('on');

   pager.eq(i).addClass('on');

  }

 }); 

});  // $(window).scroll()紐낅졊�� ��




// �ㅻⅨ履� 怨좎젙 踰꾪듉 �대┃

pager.click(function(){

 var an = $(this).index();

 var top = $("html, body").scrollTop();

 var tt = contents.eq(an).offset().top;

 if( top == 0 ) top = $("body").scrollTop();

    $("html, body").stop().animate({scrollTop: tt}, 500);

 return false;

});


$(".bt2 a").colorbox({
    rel : "plan2"
});
$(".bt5 a").colorbox({
    rel : "plan1"
});
$(".bt6 a").colorbox({
    rel : "plan3"
});
$(".bt4 a").colorbox({
    rel : "app"
})
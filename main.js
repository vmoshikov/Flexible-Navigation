$(function(){
    $('li.menu-item-has-children>a').click(function(event){
        event.preventDefault();
    });
    $('li.menu-item-has-children').hover(function () {
        $(this).addClass('open');
      }, function () {
        $(this).removeClass('open');
      });
    $('nav').click(function(){
        $(this).children('ul.flex-x').toggleClass('open');
    })
})
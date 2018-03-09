/******************
 * Base Execution *
 ******************/

  // loading
(function(){

  setTimeout(function(){
    $('.loading-inner').removeClass('opacity');
  }, 1000);

  $(window).on('load', function(){
    setTimeout(function(){
      $('.loading').addClass('opacity').delay(1000).queue(function(){
        $(this).addClass('none');
      });
    }, 3000);

    if( $('*').hasClass('before-load') ){
      $('*').removeClass('before-load');
    }

  })

})();

$(function(){

  // 공사 조직도 높이 동일

  (function(){

    var colOneIndex = $('.organization-chart.type3 .organization-chart-list-item').length;
    for (var i = 0; i <= colOneIndex; i++) {
      $(".organization-chart.type3 .organization-chart-list-item:eq(" + i + ")").addClass('col' + i);
    }
    var rowOneIndex = $('.organization-chart.type3 .organization-chart-list').children('.organization-chart-list-item').find('.organization-chart-team').length;
    for (var i = 0; i <= rowOneIndex; i++) {
      $(".organization-chart.type3 .organization-chart-list").children(".organization-chart-list-item").find(".organization-chart-team:eq(" + i + ")").addClass('row' + i);
      $(".organization-chart.type3 .organization-chart-list").children(".organization-chart-list-item").find(".organization-chart-subtit:eq(" + i + ")").addClass('row' + i);
    }
    $('.organization-chart.type1').each(function(){
      var col0row = 0;
      $('.organization-chart-team', this).each(function(){
        if($(this).height() > col0row)
          col0row = $(this).height();
      });
      $('.organization-chart-team',this).height(col0row);
    });
    $('.organization-chart.type2').each(function(){
      var col0row = 0;
      $(".organization-chart-tit", this).each(function () {
        if ($(this).height() > col0row)
          col0row = $(this).height();
      });
      $(".organization-chart-tit", this).height(col0row);

      var col0row = 0;
      $(".organization-chart-team", this).each(function () {
        if ($(this).height() > col0row)
          col0row = $(this).height();
      });
      $(".organization-chart-team", this).height(col0row);
    });
    $('.organization-chart.type3').each(function(){
      $('.organization-chart-list').each(function(){

      var col0row = 0;
      $(".organization-chart-tit", this).each(function () {
        if ($(this).height() > col0row)
          col0row = $(this).height();
      });
      $(".organization-chart-tit", this).height(col0row);

      var col0row = 0;
      $(".organization-chart-subtit.row0", this).each(function () {
        if ($(this).height() > col0row)
          col0row = $(this).height();
      });
      $(".organization-chart-subtit.row0", this).height(col0row);

      var col0row = 0;
      $(".organization-chart-subtit.row1", this).each(function () {
        if ($(this).height() > col0row)
          col0row = $(this).height();
      });
      $(".organization-chart-subtit.row1", this).height(col0row);

      var col0row = 0;
      $(".organization-chart-subtit.row2", this).each(function () {
        if ($(this).height() > col0row)
          col0row = $(this).height();
      });
      $(".organization-chart-subtit.row2", this).height(col0row);

      var col0row = 0;
      $(".organization-chart-subtit.row3", this).each(function () {
        if ($(this).height() > col0row)
          col0row = $(this).height();
      });
      $(".organization-chart-subtit.row3", this).height(col0row);

      var col0row = 0;
      $(".organization-chart-subtit.row4", this).each(function () {
        if ($(this).height() > col0row)
          col0row = $(this).height();
      });
      $(".organization-chart-subtit.row4", this).height(col0row);




      var col0row = 0;
      $(".organization-chart-team.row0", this).each(function () {
        if ($(this).height() > col0row)
          col0row = $(this).height();
      });
      $(".organization-chart-team.row0", this).height(col0row);

      var col0row = 0;
      $(".organization-chart-team.row1", this).each(function () {
        if ($(this).height() > col0row)
          col0row = $(this).height();
      });
      $(".organization-chart-team.row1", this).height(col0row);

      var col0row = 0;
      $(".organization-chart-team.row2", this).each(function () {
        if ($(this).height() > col0row)
          col0row = $(this).height();
      });
      $(".organization-chart-team.row2", this).height(col0row);

      var col0row = 0;
      $(".organization-chart-team.row3", this).each(function () {
        if ($(this).height() > col0row)
          col0row = $(this).height();
      });
      $(".organization-chart-team.row3", this).height(col0row);

      var col0row = 0;
      $(".organization-chart-team.row4", this).each(function () {
        if ($(this).height() > col0row)
          col0row = $(this).height();
      });
      $(".organization-chart-team.row4", this).height(col0row);

      });
    });

  })();

  // 공사 메인 탭 모바일
  (function(){

    var windowSize = $(window).outerWidth();


    //if( windowSize <= 1080){

      var depthOne = $('.left-menu-depth2'); //lnb
      var depthTwo = $('.tab-nav-list'); //tab

      depthOne.prepend('<li class="menu-mobile-item"><button type="button" class="menu-mobile-ui"><span>메뉴선택</span></button></li>');
      depthTwo.prepend('<li class="menu-mobile-item"><button type="button" class="menu-mobile-ui"><span>메뉴선택</span></button></li>');

      var oneOnText = $('.sub-contents-heading1').text();
      var twoOnText = $('.sub-contents-heading1+.tab-nav .tab-nav-list-link.on').text();
      var threeOnText = $('.tab-nav.sub .tab-nav-list-link.on').text();

      $('.left-menu-depth2 .menu-mobile-ui span').text(oneOnText);
      $('.sub-contents-heading1+.tab-nav .tab-nav-list .menu-mobile-ui span').text(twoOnText);
      $('.tab-nav.sub .tab-nav-list .menu-mobile-ui span').text(threeOnText);

      $('.left-menu-depth2 .menu-mobile-ui').on('click', function(){
          $(this).parent().siblings().toggleClass('open-ui');
      });

      $('.tab-nav-list .menu-mobile-ui').on('click', function(){
        $(this).parent().siblings().toggleClass('open-ui');
      });

    //}




    if( $('html').hasClass('mobile') || windowSize <= 1080){
      $('.main-section2-text-tit').addClass('on');
      $('.main-section2-text-tit').on('click',function(){
        $(this).toggleClass('on');
      });
    }

    if( $('html').hasClass('mobile') ){
      //$('.left-menu-depth1-item-link').removeClass('open');
      $('.left-menu-depth1-item-link').addClass('close');

    }




  })();

  /**
   * loading
   */

  var scrollHeight;

  $('.gnb').append('<div class="scroll-amount"></div>');

  // detect language
  (function(){

    var $html = $('html');
    var lang = $html.attr('lang');

    switch(lang){

      case 'ko' :
        $html.addClass('ko');
        break;

      case 'en' :
        $html.addClass('en');
        break;

      case 'ch' :
        $html.addClass('ch');
        break;

      case 'ja' :
        $html.addClass('ja');
        break;

    }

  })();

  // set full page
  (function(){

    if( $(window).outerWidth() > 1080 ){

      if( $('#fullpage').length > 0 ){

        $('#fullpage').fullpage({
          scrollBar: true,
          scrollingSpeed: 1000,
          responsiveWidth: 1081,
          normalScrollElements: '.layer',
          afterLoad: function(anchorLink, index){
            if(index == 2){
              //MainVisual.rollStop();
              //MainVisual.rollFirst();
              //MainVisual.rollAuto();
            }
          }
        });

      }

    } else {

      if( $('#fullpage').length > 0 ){

        $('#fullpage').fullpage({
          scrollBar: true,
          scrollingSpeed: 1000,
          responsiveWidth: 1081,
          normalScrollElements: '.layer.system, .layer, .relsite'
        });

        //MainVisual.rollFirst();
        //MainVisual.rollAuto();

      }

    }

  })();

  // header set when resize/scroll
  (function(){

    // 상단 팝업
    if( $(window).outerWidth() > 1200 ){
      // when main
      if( $('section').hasClass('main-visual') && $('.top-popup').length > 0 ){
        $('html').addClass('main');
        $('.top-popup, .header, .gnb, .total-search, .quick, .fullpage-wrapper').addClass('top-open');
        $('.top-popup-toggle').data('open', true).addClass('down');
        $(window).on('scroll', function() {
          if ($(window).scrollTop() > 400){
            $('.top-popup, .header, .gnb, .total-search, .quick, .fullpage-wrapper').removeClass('top-open');
            $('.top-popup').addClass('down');
            $('.top-popup-toggle').removeClass('down');
          } else{
            $('.top-popup').removeClass('down');
          }
        });
        // when sub
      } else {
        $('.top-popup-toggle').removeClass('down');
        $(window).on('scroll', function() {
          if ($(window).scrollTop() > 200){
            $('.top-popup').addClass('down');
          } else {
            $('.top-popup').removeClass('down');
          }
        });
      }
    } else if( $(window).outerWidth() < 1200 ){
      // mobile when main
      if( $('section').hasClass('main-visual') && $('.top-popup').length > 0 ){

        $('.top-popup, .header, .gnb, .total-search, .quick, .fullpage-wrapper').addClass('top-open');
        $(window).on('scroll', function() {
          if ($(window).scrollTop() > 400){
            $('.top-popup, .header, .gnb, .total-search, .quick, .fullpage-wrapper').removeClass('top-open');
            $('.top-popup-toggle').removeClass('down');
          } else{
            $('.top-popup').removeClass('down');
          }
        });
        // mobile when sub
      } else {
        $('.top-popup-toggle').removeClass('down');
        $('.top-popup').removeClass('down');
      }

    }


    $(window).on('resize', function(){

      scrollHeight = $('body').height() - $(window).height();

      if( $(window).outerWidth() > 1200 ){

        HeaderGnb.pcHeaderInit();
        $('body').removeClass('mobile-menu-on');
        $('.gnb').removeClass('mobile-on mobile-off');
        $('.quick-menu-list').removeClass('quick-off quick-on');


      } else {
        $('.gnb-depth1-link').attr('href', '#');
        $('.header, .gnb').removeClass('fixed down').addClass('bg');
        $('.quick').removeClass('quick-in');

        HeaderGnb.mobileHeaderInit();
        $('.visual-text').removeClass('text-right text-left');
        //$('.fullpage-wrapper').removeClass('top-open top-big-open');
        //$('.top-popup-toggle').data('open', false).removeClass('down');
      }

    }).resize();

  })();

  /**
   * event
   */

  // Header 이벤트
  (function(){

    $('.gnb').on({

      'mouseleave' : function(){

        if( $(window).outerWidth() > 1200 ){
          if( !$(this).hasClass('fixed') && !$('.total-search').hasClass('show') ){

            if( $('html').hasClass('main') ){
              if( !$('.header-search-item.gnb-search').hasClass('on') ){
                $('.header, .gnb').removeClass('bg');
              }
            }
          }

          $('.gnb').removeClass('on')
        }

      }

    });

    $('.gnb-depth1-link').on('mouseenter', function(e){

      if( $(window).outerWidth() > 1200 ){
        e.stopPropagation();

        if( !$('.gnb').hasClass('fixed') ){

          //$('.header, .gnb').addClass('show');
          $('.header, .gnb').addClass('bg');

        }

        $('.gnb').addClass('on');
      }

    });

    $('.gnb-depth1-link').data('open', false).on('click', function(e){

      if( $(window).outerWidth() <= 1200 ){

        e.preventDefault();

        if( !$(this).data().open ){

          //console.log($(this).data().open);

          $('.gnb-depth1-item').removeClass('on').children('.gnb-depth1-link').data('open', false);
          $(this).parents('.gnb-depth1-item').addClass('on');
          $(this).data('open', true);

        } else {

          //console.log($(this).data().open);

          $(this).parents('.gnb-depth1-item').removeClass('on').children('.gnb-depth1-link').data('open', false);
          $(this).data('open', false);

        }

      }

    });

    $('.header-search-btn.gnb-search').data('search', false).on('click', function(){

      if( !$(this).data().search && $(window).outerWidth() > 1200 ){

        $('.header-search-item.gnb-search').addClass('on');
        $(this).data('search', true);

      }

    });

    $('.header-search-close').on('click', function(){

      $('.header-search-item.gnb-search').removeClass('on');
      $('.header-search-btn.gnb-search').data('search', false);

    });
    var posY;
    $('body').on('click', 'button.gnb-mobile-btn.btn-gnb', function(e){
      posY = $(window).scrollTop();
      $('body').addClass('scrollfix');
      //$('body').on('scroll touchmove mousewheel', function(e){
      //  event.preventDefault();
      //  event.stopPropagation();
      //  return false;
      //});

      $('.gnb').removeClass('mobile-off').addClass('mobile-on');
      $('body').addClass('mobile-menu-on');
      $('.quick').addClass('none');

    });

    $('body').on('click', 'button.gnb-mobile-btn-close', function(e){
      $('body').removeClass('scrollfix');
      posY = $(window).scrollTop(posY);
      //$('body').off('scroll touchmove mousewheel');
      $('.gnb').removeClass('mobile-on').addClass('mobile-off');
      $('body').removeClass('mobile-menu-on');
      $('.quick').removeClass('none');

    });

    $('body').on('click', 'button.gnb-mobile-btn.btn-quick', function(e){

      $('.quick').addClass('mobile-on');

    });

  })();

  // zoom in/out
  (function(){

    $('.location-btn-minus').on('click', function(){

      Zoom.exec(-1);

    });

    $('.location-btn-plus').on('click', function(){

      Zoom.exec(1);

    });

    $('.location-btn-print').on('click', function(){
      window.print();
    });

  })();

  // 공통 이벤트
  (function(){

    $(window).on('scroll', function(){

      if( !$('.total-search').hasClass('show') ){

        var scrollAmount = ( $(this).scrollTop() / scrollHeight ) * 100;

        $('.scroll-amount').css({width : scrollAmount + '%'});

        if( $(this).scrollTop() >= 200 ){

          $('.header, .gnb').addClass('down');
          $('.total-search').addClass('down');

        } else if( $(this).scrollTop() < 200 ){

          $('.header, .gnb').removeClass('down');
          $('.total-search').removeClass('down');

        }

      }

    }).scroll();

    // Layer Popup 닫기
    $('.layer-close').on('click', function(){

      LayerPopup.closePopup( $(this).parent('.layer') );

    });

  })();

  // 메인 페이지 이벤트
  (function(){

    $('.main-visual-control-arrow .arrow.prev').on('click', function(){

      if( !MainVisual.checkAnimate() ){

        MainVisual.rollRight();

      }

    });

    $('.main-visual-control-arrow .arrow.next').on('click', function(){

      if( !MainVisual.checkAnimate() ){

        MainVisual.rollLeft();

      }

    });

    $('.main-visual-control-paging .play-button').on('click', function(){

      if( $(this).hasClass('pause') ){

        MainVisual.rollStop();

      } else {

        MainVisual.rollAuto();

      }

    });

    $('.main-visual-news-title.tab').on('click', function(){

      var indexTab = $(this).index('.main-visual-news-title.tab');

      $('.main-visual-news-title.tab').each(function(i){

        if( i < indexTab ){
          $('.main-visual-news-title.tab').eq(i).addClass('prev').removeClass('next on');
        } else if(i > indexTab) {
          $('.main-visual-news-title.tab').eq(i).addClass('next').removeClass('prev on');
        } else {
          $('.main-visual-news-title.tab').eq(i).addClass('on').removeClass('prev next');
        }

      });

      $('.main-visual-news-txt.tab').removeClass('on');
      $(this).next('.main-visual-news-txt.tab').addClass('on');

    });

    $('.main-banner-wrap .banner-btn.left').on('click', function(){
      BottomBanner.rollRight();
    });

    $('.main-banner-wrap .banner-btn.right').on('click', function(){
      BottomBanner.rollLeft();
    });

  })();


  // LNB 이벤트
  (function(){

    var $lnb = $('.left-menu-depth1-item-link');

    // init
    $lnb.each(function(i){

      if( $(this).next('.left-menu-depth2').length != 0 ){

        $(this).addClass('has-child');

      }

      if( !$(this).hasClass('open') ){
        $(this).data('open', false);
      } else {
        $(this).data('open', true);
      }

    });


    $lnb.on('click', function(e){

      if( $(this).hasClass('has-child') ){

        e.preventDefault();

        $lnb.each(function(){

          if( $(this).hasClass('has-child') ){

            $(this).addClass('close').removeClass('on open').data('open', false);

          }

        });

        if( $(this).data('open') ){
          //$(this).removeClass('on open').addClass('close').data('open', false);
        } else {
          $(this).removeClass('close').addClass('on open').data('open', true);
        }

      }

    });

  })();

  // select box 이벤트
  (function(){

    $('.search-box-btn').on('click', function(){
      if( $('div').hasClass('search-box-year-contents') ){
        var index = $('#search-year.search-box-input-select option:selected').index();
        var val = $('#search-year.search-box-input-select option:selected').text();

        $('.search-box-year-contents').removeClass('on');
        $('.search-box-year-contents').eq(index).addClass('on');
      }

      $('.sub-contents-heading2.change-heading .year').text( val );
      $('.sub-contents-heading2.change-heading .number').text( $('.search-box-year-contents').eq(index).find('.table.vt-dark tr').length-1 );
    });

  })();

});










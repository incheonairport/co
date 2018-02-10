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



  // 공사 메인 탭 모바일
  (function(){










    var windowSize = $(window).outerWidth();



    if( windowSize <= 1080){

      var depthOne = $('.left-menu-depth2'); //lnb
      var depthTwo = $('.tab-nav-list'); //tab

      var oneOnText = $('.left-menu-depth2-item-link.on').text();
      var twoOnText = $('.tab-nav-list-link.on').text();
      var threeOnText = $('.tab-nav.sub .tab-nav-list-link.on').text();

      depthOne.prepend('<li class="menu-mobile-item"><button type="button" class="menu-mobile-ui"><span>메뉴선택</span></button></li>');
      depthTwo.prepend('<li class="menu-mobile-item"><button type="button" class="menu-mobile-ui"><span>메뉴선택</span></button></li>');

      $('.left-menu-depth2 .menu-mobile-ui span').text(oneOnText);
      $('.tab-nav-list .menu-mobile-ui span').text(twoOnText);
      $('.tab-nav.sub .tab-nav-list .menu-mobile-ui span').text(threeOnText);

      $('.left-menu-depth2 .menu-mobile-ui').on('click', function(){
          $(this).parent().siblings().toggleClass('open-ui');
      });

      $('.tab-nav-list .menu-mobile-ui').on('click', function(){
        $(this).parent().siblings().toggleClass('open-ui');
      });

      //$('.tab-nav-list-link.on').attr("href", "#");
      //$('.left-menu-depth2-item-link.on').attr("href", "#");
      //$('.tab-nav-list-link.on').attr("href", "#");

      //$('.tab-nav-list-link.on').on('click', function(e){
      //  e.preventDefault();
      //  $(this).parent().siblings().children().toggleClass('m-on');
      //
      //});

      //$('.left-menu+.sub-contents .tab-nav:first').each(function() {
      //  $('.left-menu+.sub-contents .tab-nav:first .tab-nav-list-item > .tab-nav-list-link.on').each(function(){
      //    $(this).parent().detach().prependTo('.left-menu+.sub-contents .tab-nav:first .tab-nav-list'); // 해당 li를 떼어내서 #example의 처음에 끼운다. });
      //  });
      //});

      //$('.tab-nav.sub').each(function() {
      //  $('.tab-nav.sub .tab-nav-list-item > .tab-nav-list-link.on').each(function(){
      //    $(this).parent().detach().prependTo('.tab-nav.sub .tab-nav-list'); // 해당 li를 떼어내서 #example의 처음에 끼운다. });
      //  });
      //});

      //$('.left-menu-depth1-item-link.on').addClass('on');
      //$('.left-menu-depth2-item-link.on').on('click', function(e){
      //  e.preventDefault();
      //  $(this).parent().siblings().children().toggleClass('m-on');
      //
      //});
    } else {
      openUi.remove();
    }




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
          normalScrollElements: '.layer.system, .layer'
        });

        //MainVisual.rollFirst();
        //MainVisual.rollAuto();

      }

    }

  })();

  // header set when resize/scroll
  (function(){

    $(window).on('resize', function(){

      scrollHeight = $('body').height() - $(window).height();

      if( $(window).outerWidth() > 1200 ){

        if( $('section.top-big-popup').length >= 0 ){
          $('section.top-big-popup').removeClass('mobile none');
        }

      } else {

        if( $('section.top-big-popup').length >= 0 ){
          $('section.top-big-popup').addClass('mobile');
        }

      }

      if( $(window).outerWidth() > 1200 ){

        HeaderGnb.pcHeaderInit();
        $('body').removeClass('mobile-menu-on');
        $('.gnb').removeClass('mobile-on mobile-off');
        $('.quick-menu-list').removeClass('quick-off quick-on');

        if( $(window).scrollTop() < 400 ){

          // when main
          if( $('section').hasClass('main-visual') && $('.top-popup').length > 0 ){

            $('html').addClass('main');

            // set top popup
            if( $('.top-popup').has('.top-popup-inner').length > 0 ){
              $('.top-popup').addClass('top-open');
              $('.header').addClass('top-open');
              $('.gnb').addClass('top-open');
              $('.total-search').addClass('top-open');
              $('.quick').addClass('top-open');
              $('.fullpage-wrapper').addClass('top-open');
              $('.top-popup-toggle').data('open', true).addClass('down');

              // header, gnb
              $('.header, .gnb').removeClass('fixed down bg');
            }


            // when sub
          } else {

            $('.top-popup').data('open', false);

          }

          if( $('section.top-big-popup').length > 0 ){

            $('.top-popup').addClass('top-big-open');
            $('.header').addClass('top-big-open');
            $('.gnb').addClass('top-big-open');
            $('.total-search').addClass('top-big-open');
            $('.quick').addClass('top-big-open');
            $('.top-popup-toggle').data('open', true).addClass('down');

          }

        }

      } else {

        $('.gnb-depth1-link').attr('href', '#');
        $('.header, .gnb').removeClass('fixed down').addClass('bg');
        $('.quick').removeClass('quick-in');

        HeaderGnb.mobileHeaderInit();
        $('.visual-text').removeClass('text-right text-left');

        $('.top-popup').removeClass('top-open top-big-open');
        $('.header').removeClass('top-open top-big-open');
        $('.gnb').removeClass('top-open top-big-open');
        $('.quick').removeClass('top-open top-big-open');
        $('.fullpage-wrapper').removeClass('top-open top-big-open');
        $('.top-popup-toggle').data('open', false).removeClass('down');

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
          //if( !$(this).hasClass('fixed') && !$('.total-search').hasClass('show') ){
          //
          //  if( $('html').hasClass('main') ){
          //    if( !$('.header-search-item.gnb-search').hasClass('on') ){
          //      $('.header, .gnb').removeClass('bg');
          //    }
          //  }
          //}

          $('.gnb').removeClass('on')
        }

      }

    });

    $('.gnb-depth1-link').on('mouseenter', function(e){

      if( $(window).outerWidth() > 1200 ){
        e.stopPropagation();

        //if( !$('.gnb').hasClass('fixed') ){
        //
        //  //$('.header, .gnb').addClass('show');
        //  $('.header, .gnb').addClass('bg');
        //
        //}

        $('.gnb').addClass('on');
      }

    });

    $('.gnb-depth1-link').data('open', false).on('click', function(e){

      if( $(window).outerWidth() <= 1200 ){

        e.preventDefault();

        if( !$(this).data().open ){

          console.log($(this).data().open);

          $('.gnb-depth1-item').removeClass('on').children('.gnb-depth1-link').data('open', false);
          $(this).parents('.gnb-depth1-item').addClass('on');
          $(this).data('open', true);

        } else {

          console.log($(this).data().open);

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










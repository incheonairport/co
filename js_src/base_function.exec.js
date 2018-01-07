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
  })

})();

$(function(){

  /**
   * loading
   */

  var scrollHeight;

  $('.gnb').append('<div class="scroll-amount"></div>');

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

  /**
   * event
   */

  // Header 이벤트
  (function(){

    $('.gnb-depth1-link').on('mouseenter', function(){
      $('.gnb').addClass('on');
    });

    $('.gnb').on('mouseleave', function(){
      $('.gnb').removeClass('on');
    });

    $('.header-search-btn').on('click', function(){

      $('.total-search').addClass('show');
      $('.header, .gnb').addClass('bg');

    });

    $('.total-search-close').on('click', function(){

      $('.total-search').removeClass('show');

      $(window).scroll();

    });

  })();

  // 공통 이벤트
  (function(){

    $(window).on('resize', function(){

      scrollHeight = $('body').height() - $(window).height();

    }).resize();

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



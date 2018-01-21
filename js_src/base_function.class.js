/**************
 * Base Class *
 **************/

var Index, HeaderGnb, MainVisual, BottomBanner, Zoom;

$(function(){

  /**
   * Index Class( Parent Class )
   */

  Index = function(){

    this.$mainVisualItem = $('.main-visual-item');
    this.currentMainSectionIndex = 0;
    this.easingType = 'easeInOutExpo';

  };

  /**
   * HeaderGnb Class
   */

  HeaderGnb = new function(){

    Index.apply(this);

    this.mobileHeaderInit = function(){

      $('.header-util-cs').insertBefore('.gnb-depth1');

      $('.header-util-lang').insertAfter('.gnb-depth1');

      $('.header-site').insertAfter('.gnb-depth1');

      $('.scroll-amount').insertBefore('.header-util');

      $('.header-search-item.gnb-search .header-search-input').addClass('mobile-none');
      $('.header-search-item.gnb-search .header-search-close').removeClass('mobile-none');

      if( $('.gnb-mobile-btn').length <= 0 ){
        $('.header').append('<button type="button" class="gnb-mobile-btn btn-gnb"><span>주메뉴 열기</span></button>');
      }

      if( $('.quick-toggle').length <= 0 ){
        $('.quick').append('<button type="button" class="quick-toggle"><span>퀵메뉴 열기</span></button>');
      }

      if( $('.gnb-mobile-btn-close').length <= 0){
        $('.gnb').append('<button type="button" class="gnb-mobile-btn-close">닫기</button>');
      }

    };

    this.pcHeaderInit = function(){

      $('.header-util-cs').appendTo( $('.header-util') );

      $('.header-util-lang').appendTo( $('.header-util') );

      $('.header-site').prependTo( $('.header') );

      $('.scroll-amount').insertAfter('.header-search');

      //$('.header-search-item.gnb-search').appendTo($('.header-search'));

      $('.gnb-mobile-btn').remove();
      $('.gnb-mobile-btn-close').remove();
      $('.quick-toggle').remove();

    };

  };

  /**
   * MainVisual Class
   */

  MainVisual = new function(){

    Index.apply(this);

    // private
    var currentVisualIndex = 0;
    var nextVisualIndex = 0;

    var $visualItem = this.$mainVisualItem;
    var easingType = this.easingType;

    var $pageItem;

    var timeID, timeID2;
    var imageMovingTime = 1000;
    var imageIntervalTime = 7000;
    var barStretchTime = 10;

    // private
    var _initPaging = function(){

      var $paging = $('<ul class="paging-visual"></ul>');

      $('.main-visual-control-paging').prepend($paging);

      for(var i=0; i<$visualItem.length; i++){
        $paging.append('<li class="paging-item"><div class="paging-link">' + (i+1) + '</div></li>');
      }

      $pageItem = $('.paging-item');
      $pageItem.removeClass('on');
      $pageItem.eq(0).find('.paging-link').addClass('on');

    };

    var _initPosition = function(){

      $visualItem.hide().eq(0).show();

    };

    var _init = function(){

      _initPosition();

      _initPaging();

      _timeBar(true);

      setTimeout(function(){
        _textMotion();
      }, 1000);

    };

    var _textMotion = function(){

      $visualItem.eq(currentVisualIndex).find('.visual-text').eq(0).stop().animate({
        opacity:1,
        left:0
      }, 1000, 'easeOutCubic')
          .delay(4000)
          .queue(function(next){
            $(this).stop().animate({
              opacity:0,
              left:-20
            }, 500);
            next();
          });

      $visualItem.eq(currentVisualIndex).find('.visual-text').eq(1).stop().delay(300).animate({
        opacity:1,
        right:0
      }, 1000, 'easeOutCubic')
          .delay(4000)
          .queue(function(next){
            $(this).stop().animate({
              opacity:0,
              right:-20
            }, 500);
            next();
          });

      $visualItem.eq(currentVisualIndex).find('.visual-text').eq(2).stop().delay(600).animate({
        opacity:1,
        left:0
      }, 1000, 'easeOutCubic')
          .delay(4000)
          .queue(function(next){
            $(this).stop().animate({
              opacity:0,
              left:-20
            }, 500);
            next();
          });

    };

    var _timeBar = function(auto){

      clearInterval(timeID2);

      var barStretch = 0;
      var unitLength = 100 / ( imageIntervalTime / barStretchTime );

      $('.paging-link.on').css({height:(100 - barStretch) + '%'});

      if(auto){

        timeID2 = setInterval(function(){
          $('.paging-link.on').css({height:(100 - barStretch) + '%'});
          barStretch += unitLength;
        }, barStretchTime);

      }

    };

    var _setPlayButtonClass = function(status){
      $('.main-visual-control-paging .play-button').attr('class', 'play-button').addClass(status);
    };

    // public
    this.fade = function(){

      if( nextVisualIndex >= $visualItem.length ){

        nextVisualIndex = 0;

      } else if( nextVisualIndex <= -1 ){

        nextVisualIndex = $visualItem.length-1;

      }

      $visualItem.eq(currentVisualIndex).stop().fadeOut(imageMovingTime, easingType);
      $visualItem.eq(nextVisualIndex).stop().fadeIn(imageMovingTime, easingType, function(){
        _textMotion();
      });

      $pageItem.find('.paging-link').removeClass('on');
      $pageItem.eq(nextVisualIndex).find('.paging-link').addClass('on');

      currentVisualIndex = nextVisualIndex;

    };

    this.rollAuto = function(){

      var _fade = this.fade;

      timeID = setInterval(function(){

        nextVisualIndex = currentVisualIndex + 1;
        _fade();

        _timeBar(true);

        //HeaderGnb.setClass(HeaderGnb.getCurrentMainSectionIndex(), nextVisualIndex);

      }, imageIntervalTime);

      _setPlayButtonClass('pause');

    };

    this.rollLeft = function(){

      this.rollStop();

      nextVisualIndex = currentVisualIndex + 1;
      this.fade();
      _timeBar(false);

      //HeaderGnb.setClass(HeaderGnb.getCurrentMainSectionIndex(), nextVisualIndex);

    };

    this.rollRight = function(){

      this.rollStop();

      nextVisualIndex = currentVisualIndex - 1;
      this.fade();
      _timeBar(false);

      //HeaderGnb.setClass(HeaderGnb.getCurrentMainSectionIndex(), nextVisualIndex);

    };

    this.rollStop = function(){

      // stop rolling
      clearInterval(timeID);

      // stop time bar
      clearInterval(timeID2);

      _setPlayButtonClass('play');

    };

    this.checkAnimate = function(){

      return this.$mainVisualItem.is(':animated');

    };

    this.getNextVisualIndex = function(){

      return nextVisualIndex;

    };

    // running in constructor when loading
    _init();
    this.rollAuto();

  };

  /**
   * BottomBanner Class
   */

  BottomBanner = new function(){

    // private
    var currentVisualIndex = 0;
    var nextVisualIndex = 0;

    var $visualItem = $('.main-banner-img-inner');
    var easingType = this.easingType;

    var $pageItem;

    var timeID, timeID2;
    var imageMovingTime = 1000;

    // private
    var _initPosition = function(){

      $visualItem.hide().eq(0).show();

    };

    var _init = function(){

      _initPosition();

    };

    var _setPlayButtonClass = function(status){
      $('.main-visual-control-paging .play-button').attr('class', 'play-button').addClass(status);
    };

    // public
    this.fade = function(){

      if( nextVisualIndex >= $visualItem.length ){

        nextVisualIndex = 0;

      } else if( nextVisualIndex <= -1 ){

        nextVisualIndex = $visualItem.length-1;

      }

      $visualItem.eq(currentVisualIndex).stop().fadeOut(imageMovingTime, easingType);
      $visualItem.eq(nextVisualIndex).stop().fadeIn(imageMovingTime, easingType);

      //$pageItem.find('.paging-link').removeClass('on');
      //$pageItem.eq(nextVisualIndex).find('.paging-link').addClass('on');

      currentVisualIndex = nextVisualIndex;

    };

    this.rollLeft = function(){

      this.rollStop();

      nextVisualIndex = currentVisualIndex + 1;
      this.fade();

    };

    this.rollRight = function(){

      this.rollStop();

      nextVisualIndex = currentVisualIndex - 1;
      this.fade();

    };

    this.rollStop = function(){

      // stop rolling
      clearInterval(timeID);

      // stop time bar
      clearInterval(timeID2);

      _setPlayButtonClass('play');

    };

    this.checkAnimate = function(){

      return this.$mainVisualItem.is(':animated');

    };

    this.getNextVisualIndex = function(){

      return nextVisualIndex;

    };

    // running in constructor when loading
    _init();

  };

  /**
   * Zoom Class
   */

  Zoom = new function(){

    var size = 1.0;

    this.exec = function (v) {

      var currentSize = size;
      if (v == 0) {
        currentSize = 1.0;
      } else {
        currentSize += v * 0.1;
      }

      if (currentSize < 0.8 || currentSize > 3.0) {
        //alert(currentSize);
        return;
      } else {
        size = currentSize;
      }

      if ( !$('html').hasClass('ie') ) {
        $('body').css('-webkit-transform','scale(' + size + ')');
        $('body').css('-moz-transform','scale(' + size + ')');
        $('body').css('-o-transform','scale(' + size + ')');

        $('body').css('-webkit-transform-origin', '50% 0%');
        $('body').css('-moz-transform-origin', '50% 0%');
        $('body').css('-o-transform-origin', '50% 0%');
      } else {
        $('body').css('zoom', (size * 100) + '%');
        $('body').css('-ms-transform','scale(' + size + ')');
        $('body').css('-ms-transform-origin', '50% 0%');

        $('body')[0].filters.item(0).M11 *= 1.5;
        $('body')[0].filters.item(0).M12 *= 1.5;
        $('body')[0].filters.item(0).M21 *= 1.5;
        $('body')[0].filters.item(0).M22 *= 1.5;

        $('body').css('transform','scale(' + size + ')');
        $('body').css('transform-origin', '50% 0%');
      }

      if( size == 1 ){

        $('body').attr('style', '');

      }



    };

    //this.exec(1);

  };

});



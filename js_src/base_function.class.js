/**************
 * Base Class *
 **************/

var Index, HeaderGnb;

$(function(){

  /**
   * Index Class( Parent Class )
   */

  Index = function(){

    this.$mainSection = $('.full-page-content .section');
    this.$mainVisualItem = $('.main-visual-item');
    this.$mainFullPageContent = $('.full-page-content');
    this.currentMainSectionIndex = 0;
    this.easingType = 'easeInOutExpo';

    this.setCurrentMainSectionIndex = function(currentIndex){

      this.currentMainSectionIndex = currentIndex;

    };

    this.getCurrentMainSectionIndex = function(){

      return this.currentMainSectionIndex;

    };

  };

  /**
   * HeaderGnb Class
   */

  HeaderGnb = new function(){

    Index.apply(this);

    var $visualItem = this.$mainVisualItem;
    var $mainSection = this.$mainSection;
    var $fullPageContent = this.$mainFullPageContent;


    var _initClass = function(){
      $('.header, .gnb').addClass( $fullPageContent.find('.section').eq(0).data('gnb-color') );
    };

    var _setClassVisual = function(index){
      //console.log('set visual index : ' + index);
      $('.header').attr('class', 'header ' + $visualItem.eq(index).data('gnb-color') );
      $('.gnb').attr('class', 'gnb ' + $visualItem.eq(index).data('gnb-color') );
    };

    var _setClassSection = function(index){
      $('.header').attr('class', 'header ' + $mainSection.eq(index).data('gnb-color') );
      $('.gnb').attr('class', 'gnb ' + $mainSection.eq(index).data('gnb-color') );
      //console.log('set section index : ' + index);
    };

    this.setClass = function(setClassSectionIndex, setClassVisualIndex){

      //console.log('section index : ' + setClassSectionIndex);
      //console.log('visual index : ' + setClassVisualIndex);

      this.setCurrentMainSectionIndex(setClassSectionIndex);

      if( setClassSectionIndex == 0 ){

        //console.log('set visual');
        _setClassVisual(setClassVisualIndex);

      } else {

        //console.log('set section');
        _setClassSection(setClassSectionIndex);

      }

    };

    _initClass();

  };

});



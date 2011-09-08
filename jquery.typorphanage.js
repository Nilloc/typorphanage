(function( $ ){

  var settings = {
    'autoupdate'      : false,
    'orphans'         : true,
    'elements'        : ['p','blockquote','caption','cite','article','aside','details','summary','header', 'footer'],
    'customElements'  : []
  };

  var methods = {
    init : function( options ) {
      return this.each(function(){
        if ( options ) {
          $.extend( settings, options );
        }
        
        if( settings.customElements.length > 0)
        {
          $.extend( settings.elements, settings.customElements);
        }
        
        // bind events
        if(settings.autoupdate){
          
        }
        
        methods.update({ data: {typorphanage: this} });
      });

    },
    
    startAutoUpdate: function(){
      this.autoUpdater = setInterval( methods.update.apply({data: {typorphanage: this}}, this), 100 );
      // $(window).bind('resize.typorphanage', {typorphanage: this}, methods.update); // can't decide if this ie better then using a data object... I think it might be.
      $(this).bind('change.typorphanage', {typorphanage: this}, methods.update);
    },
    
    stopAutoUpdate: function(){
      
    },
    
    destroy : function( ) {
      var $paras = $(this).children(settings.elements);
      $paras.each(function(){
        $(this).html($(this).html().replace(/(.*)&nbsp;/, "$1 "));
      });
      
      return this.each(function(){
        $(window).unbind('.typorphanage');
      });
    },
    
    update : function( evt ) {
      // this is DOMWindow
      var $paras = $(evt.data.typorphanage).children(settings.elements);
      $paras.each(function(){
        var txt = $(this).html().replace(/(.*)&nbsp;/, "$1 ");
        var parts = txt.split(' ');
        if(parts.length > 1) parts[parts.length - 2] += "&nbsp;"+parts.pop();
        $(this).html(parts.join(' '));
      });
      return evt.data.typorphanage;
    }
  };

  $.fn.typorphanage = function( method ) {
    
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.typorphanage' );
    }
  };

})( jQuery );
$(function(){
  var
    revealConfig = {
      controls: true,
      progress: true,
      slideNumber: true,
      keyboard: true,
      overview: true,
      center: true,
      touch: true,
      loop: false,
      transition: 'convex',
      mouseWheel: true,
      hideAddressBar: true,
      previewLinks: true,
      transitionSpeed: 'default',
      zoomKey: 'shift',
      dependencies: [
          { src: '../assets/revealjs/plugin/markdown/marked.js', async: false, condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
          { src: '../assets/revealjs/plugin/markdown/markdown.js', async: false, condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
          { src: '../assets/revealjs/plugin/highlight/highlight.js', async: true },
          { src: '../assets/revealjs/plugin/zoom-js/zoom.js', async: true }
      ]
    }
    injectSections = function() {
      $('.slides > section').each(function(index, section){
        var $section = $(section),
            file = $section.data('html');
        if(file) {
          $section.load(file);
        }
      });
    }();//execute immediately

  Reveal.initialize(revealConfig);
});

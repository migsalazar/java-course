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
      mouseWheel: true,
      hideAddressBar: true,
      previewLinks: true,
      transitionSpeed: 'default'
    },
    plugins = {
      dependencies: [
          { src: 'revealjs/plugin/highlight/highlight.js', async: true },
          { src: 'revealjs/plugin/zoom-js/zoom.js', async: true }
      ]
    },
    injectSections = function() {
      $('.slides > section').each(function(index, section){
        var $section = $(section),
            file = $section.data('html');
        $.get(file, function(rawHtml) {
          $section.html(rawHtml);
        });
      });
    }();//execute immediately

  Reveal.initialize(revealConfig)
  Reveal.configure(plugins);
});

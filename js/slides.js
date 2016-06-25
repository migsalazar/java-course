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
          { src: 'revealjs/plugin/zoom-js/zoom.js', async: true },
          { src: 'revealjs/plugin/external/external.js', async: true, condition: function() { return !!document.querySelector( '[data-external]' ); } }
      ]
    };

  Reveal.initialize(revealConfig);
  Reveal.configure(plugins);
});

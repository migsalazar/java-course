$(function(){
  var
    revealConfig = {
      controls: true,
      progress: true,
      slideNumber: 'c/t',
      keyboard: true,
      overview: true,
      center: true,
      touch: true,
      loop: false,
      transition: 'slide',
      mouseWheel: true,
      hideAddressBar: true,
      previewLinks: true,
      transitionSpeed: 'default',
      zoomKey: 'shift',
      menu: {
        titleSelector: 'h1, h2, h3, h4, h5, h6',
        markers: true,
        themes: false,
        transitions: false,
        openSlideNumber: true,
        hideMissingTitles: true,
        keyboard: true
      },
      dependencies: [
          { src: '../assets/revealjs/plugin/markdown/marked.js', async: false, condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
          { src: '../assets/revealjs/plugin/markdown/markdown.js', async: false, condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
          { src: '../assets/revealjs/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
          { src: '../assets/revealjs/plugin/zoom-js/zoom.js', async: true },
          { src: '../assets/revealjs/plugin/menu/menu.js', async: true }
      ]
    };

  Reveal.initialize(revealConfig);
});

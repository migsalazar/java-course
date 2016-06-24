$(function(){

    $('body').scrollspy({
        target: '.bs-sidebar',
    });

    /* Prevent disabled links from causing a page reload */
    $("li.disabled a").click(function() {
        event.preventDefault();
    });
  
    // Highlight.js
    hljs.initHighlightingOnLoad();
    $('table').addClass('table table-striped table-hover');
});

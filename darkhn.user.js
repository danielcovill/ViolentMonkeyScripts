// ==UserScript==
// @name Dark HN
// @match https://news.ycombinator.com/*
// ==/UserScript==
(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = `
      table, .pagetop, .c00 {
        color: #CCC;
        background: #222;
      }
      a {
        color: #CCC !important;
      }
      body, .hnmain, .hnmain td {
        background: #111;
      }

    `;
    document.head.appendChild(style);
})();

// ==UserScript==
// @name Dark HN
// @namespace   Violentmonkey Scripts
// @match https://news.ycombinator.com/*
// @version     1.1
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = `
      body, .hnmain, .hnmain td, table, .pagetop, .c00 {
        color: #CCC;
        background: #111;
      }
      a {
        color: #CCC !important;
      }
      textarea, input {
        background: #000;
        color: #CCC
      }
    `;
    document.head.appendChild(style);
})();

// ==UserScript==
// @name Dark HN
// @match https://news.ycombinator.com/*
// ==/UserScript==
window.document.body.style.background = "#222"
window.document.body.style.color = "#eee"
window.document.getElementsByTagName("a").forEach(e=>e.setAttribute('style','color:#eee'))

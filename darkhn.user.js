// ==UserScript==
// @name Dark HN
// @match https://news.ycombinator.com/*
// ==/UserScript==
window.document.body.style.background = '#111';
[...(window.document.getElementsByTagName('a'))].forEach(e => e.style.color="#DDD");
window.document.getElementById("hnmain").getElementsByTagName("td")[0].style.backgroundColor = "#333";
window.document.getElementById("hnmain").style.backgroundColor = "#111";
window.document.getElementsByTagName('img')[0].style.filter = 'saturate(0)';

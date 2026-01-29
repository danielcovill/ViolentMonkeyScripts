// ==UserScript==
// @name Dark HN
// @match https://news.ycombinator.com/*
// ==/UserScript==
window.document.body.style.background = '#EEE'
[...(window.document.getElementsByTagName('a'))].forEach(e => e.style.color="#444")
window.document.getElementById("hnmain").getElementsByTagName("td")[0].style.backgroundColor = "#CCC"
window.document.getElementsByTagName('img')[0].style.filter = 'saturate(0)'

$(function(){var a=function(){var a=document.location.pathname,n=a.split("/")[1],e=$('nav ul li a[href="/'+n+'"');$("nav ul li").removeClass("active"),e.parent().addClass("active")};a(),$("pre code").each(function(a,n){hljs.highlightBlock(n)})});
//How to use jQuery Data API?

//store data

jQuery(document).data("investment",["stock","fund","bond"]);
jQuery.data(document,"lover","javascript");

//get data

jQuery.data(document,"lover");

//remove data

jQuery.removeData(document,"lover");

/* Use jQuery in the window console */
var jq = document.createElement("script");
jq.src= "http://code.jquery.com/jquery-1.11.2.min.js";
var head =document.getElementsByTagName("head")[0];
head.appendChild(jq);
jQuery(function(){ console.log("jQuery is ready");});


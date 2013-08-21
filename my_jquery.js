//How to use jQuery Data API?

//store data

jQuery(document).data("investment",["stock","fund","bond"]);
jQuery.data(document,"lover","javascript");

//get data

jQuery.data(document,"lover");

//remove data

jQuery.removeData(document,"lover");


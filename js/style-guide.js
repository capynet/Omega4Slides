jQuery(document).ready(function () {
    jQuery.fn.htmlEncode = function () {
        //create a in-memory div, set it's inner text(which jQuery automatically encodes)
        //then grab the encoded contents back out.  The div never exists on the page.
        jQuery(this).html(jQuery('<div/>').text(jQuery(this).html()).html());
    };

    jQuery('.example-code code').each(function(i, el){
        jQuery(el).htmlEncode();
    });
});

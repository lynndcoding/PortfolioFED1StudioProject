jQuery(document).ready(function () {
    console.log('jQuery is working!');
});


//-------------------Custom Lightbox------------------//
//When a user clicks on a thumbnail image, display the lightbox container and insert an <img> tag into #lightbox-content
$(function () {
    $('.thumb').on('click', function () {
        //Find the src of the image that was clicked
        var imgSrc = $(this).attr('src')
        //<img src="filepath alt=description />"   <<<<-----------capturing the SRC from img src
        //Insert an img tag as the content in #lightbox-content
        /*$('#lightbox-content').html('<img src="' + imgSrc + '" class="img-responsive" />')*/
        $('#lightbox-content').html('<img src="' + imgSrc + '"class="img-responsive" />')
        //Make the lightbox visible, fadeIn()
        $('#lightbox-container').fadeIn(500);
        //When the user clicks anywhere in the lightbox-container, fadeOut()
        $('#lightbox-container').on('click', function () {
            $(this).fadeOut(500);
        });
    });
});
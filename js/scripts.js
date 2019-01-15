$(document).ready(function(){
// Scroll Bar

function win_scroll() {

	var distFromTop = $(document).scrollTop();

	if (distFromTop >= 0) {
		$('nav').addClass('pinnedNav')
	}
	else {
		$('nav').removeClass('pinnedNav')
	}

	console.log(distFromTop)

	

}

$(window).scroll(win_scroll);


}); 

 $(document).ready(function() {
    $('body').hide().fadeIn(200);
    $("a").click(function(e) {
        e.preventDefault();
        $link = $(this).attr("href");
        $("body").fadeOut(200,function(){
          window.location =  $link; 
        });
    });
 });

 // End of doc.Ready
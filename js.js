$(document).ready(function(){

    	$('#nav-collaspe').click(function(){
            $('#line-one').toggleClass('line-one');
            $('#line-two').toggleClass('line-two');
            $('#line-three').toggleClass('line-three');

    	   $('#navigation ul').slideToggle('slow');

        $('#navigation a').click(function(){

            $('#navigation ul').slideUp('slow'); 

            $('#line-one').removeClass('line-one');
            $('#line-two').removeClass('line-two');
            $('#line-three').removeClass('line-three');
        });
    });
});
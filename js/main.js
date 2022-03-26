$(function(){

    $(".header__list a, .logo, .header__arrow").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});


    $('.burger, .header__list a').on('click', function(){
        $('.header__list').toggleClass('header__list--active'),
        $('.burger').toggleClass('burger--active'),
        $('body').toggleClass('lock')
    });

    $window = $(window);
    $window.scroll(function(){
	$scrollPosition = $window.scrollTop();
	if ($scrollPosition > 50) {
		$('.header__top').addClass('header__top--bg');
	} else {
		$('.header__top').removeClass('header__top--bg');
	}
    })

    
    var mixer = mixitup('.portfolio__content');
})
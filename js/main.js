$(document).ready(function(){


	/* contact-tabs top*/
	$(".contact-top .contact-map a").click(function() {
		$(".map-load-top").children().removeClass("map-visible");
		$(".img-map-top").addClass("map-visible");
	});
	$(".contact-top .contact-inside a").click(function() {
		$(".map-load-top").children().removeClass("map-visible");
		$(".img-inside-top").addClass("map-visible");
	});
	$(".contact-top .contact-view a").click(function() {
		$(".map-load-top").children().removeClass("map-visible");
		$(".img-view-top").addClass("map-visible");
	});

		/* contact-tabs bot*/
	$(".contact-bot .contact-map a").click(function() {
		$(".map-load-bot").children().removeClass("map-visible");
		$(".img-map-bot").addClass("map-visible");
	});
	$(".contact-bot .contact-inside a").click(function() {
		$(".map-load-bot").children().removeClass("map-visible");
		$(".img-inside-bot").addClass("map-visible");
	});
	$(".contact-bot .contact-view a").click(function() {
		$(".map-load-bot").children().removeClass("map-visible");
		$(".img-view-bot").addClass("map-visible");
	});





	  /* contact-page */
	  $(".map-info a").click(function() {
		$(this).parent().parent().children().removeClass("contact-active");
		$(this).parent().addClass("contact-active");
	  });
	  
	/*   methodic-page underline*/
	$(".level-info a").click(function() {
		$(".level-info a").removeClass("level-active");
		$(this).addClass("level-active");
	});
	  
	/* methodic page visible blocks  */ 
	$(".advanced").click(function() {
		$(".text-level").removeClass("visible");
		$(".text-advanced").addClass("visible");
	});
	$(".upper-intermediate").click(function() {
		$(".text-level").removeClass("visible");
		$(".text-upintermediate").addClass("visible");
	});
	$(".intermediate").click(function() {
		$(".text-level").removeClass("visible");
		$(".text-int").addClass("visible");
	});
	$(".pre-intermediate").click(function() {
		$(".text-level").removeClass("visible");
		$(".text-preint").addClass("visible");
	});
	$(".elementary").click(function() {
		$(".text-level").removeClass("visible");
		$(".text-elem").addClass("visible");
	});
	$(".beginner").click(function() {
		$(".text-level").removeClass("visible");
		$(".text-beg").addClass("visible");
	});	
	
		  
	  
	/*   nth-child for old IE */
	$(".info-page:nth-child(even)").css("margin-left", "20px");
	
	/* 	slider */
	$("#piu").PikaChoose();
	

	/* carousel */
	 $('.slider-wrap').carouFredSel({
	   auto: false,
	   prev: '.nav-prev',
	   next: '.nav-next',
	   mousewheel: true,
	   swipe: {
		onMouse: true,
		onTouch: true
		}
	  });
	  

		  /* tabs */
			$(".tab").hover(function() {
			if ($(".tab").hasClass("tab-on"))
				{
					$(".tab-on").children().css("display", "none");
				}
			});

			
		/* 	navigation menu */
			var $el, leftPos, newwidth;
			$mainNav = $("#fancy-nav");

			$mainNav.append("<li id='magic-line'></li>");
			var $magicLine = $("#magic-line");

			$magicLine
				.height($(".current_page_item").height())
				.css("top", $(".current_page_item").position().top)
				/* .css("left", $(".current_page_item").position().left) */
				.data("origTop", $magicLine.position().top)
				.data("origheight", $magicLine.height());   
			$("#fancy-nav li").hover(function() {
				$el = $(this);
				leftPos = $el.position().top;
				newwidth = $el.height(); 
								
			$magicLine.stop().animate({
				top: leftPos,
				height: newwidth  
				});
				}, function() {
				$magicLine.stop().animate({
				top: $magicLine.data("origTop"),
				height: $magicLine.data("origheight")   
				});    
			});
				
		
			





});







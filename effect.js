$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});

$(document).ready(function(){
	var vw;
	$(window).resize(function(){
		vw = $(window).width()/2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
	});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});

	$('#play').click(function(){
		var audio = $('.song')[0];
		audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		
		// إنشاء العنصر الذي يحتوي على الجملة وعرضه في منتصف الصفحة
		var sentenceDiv = $('<div id="play-sentence" style="position: fixed; top:50%; left:50%; transform: translate(-50%, -50%); font-size: 1em; color: #fff; z-index: 10000; text-align: center;">بمناسبة عيد الحب  <br> كل عيد حب وانتى الحب الاول و الاخير <br></div>');
		$('body').append(sentenceDiv);
		
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		// إخفاء أو إزالة الجملة
		$('#play-sentence').fadeOut('slow', function(){
			$(this).remove();
		});
		
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	// تحديث دوال تحريك البالونات باستخدام أبعاد الشاشة الفعلية
	function loopOne() {
		var randleft = $(window).width() * Math.random();
		var randbottom = $(window).height() * 0.5 * Math.random(); // استخدام نصف ارتفاع الشاشة كمعدل
		$('#b1').animate({ left: randleft, bottom: randbottom }, 10000, function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = $(window).width() * Math.random();
		var randbottom = $(window).height() * 0.5 * Math.random();
		$('#b2').animate({ left: randleft, bottom: randbottom }, 10000, function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = $(window).width() * Math.random();
		var randbottom = $(window).height() * 0.5 * Math.random();
		$('#b3').animate({ left: randleft, bottom: randbottom }, 10000, function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = $(window).width() * Math.random();
		var randbottom = $(window).height() * 0.5 * Math.random();
		$('#b4').animate({ left: randleft, bottom: randbottom }, 10000, function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = $(window).width() * Math.random();
		var randbottom = $(window).height() * 0.5 * Math.random();
		$('#b5').animate({ left: randleft, bottom: randbottom }, 10000, function(){
			loopFive();
		});
	}
	function loopSix() {
		var randleft = $(window).width() * Math.random();
		var randbottom = $(window).height() * 0.5 * Math.random();
		$('#b6').animate({ left: randleft, bottom: randbottom }, 10000, function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = $(window).width() * Math.random();
		var randbottom = $(window).height() * 0.5 * Math.random();
		$('#b7').animate({ left: randleft, bottom: randbottom }, 10000, function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top: -500}, 8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

	$('#wish_message').click(function(){
		vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22');
		$('#b3').attr('id','b33');
		$('#b4').attr('id','b44');
		$('#b5').attr('id','b55');
		$('#b6').attr('id','b66');
		$('#b7').attr('id','b77');
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});

	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		function msgLoop(i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
				i = i+1;
				$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
				if(i==50){
					$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
						$('.cake').fadeIn('fast');
					});
				} else {
					msgLoop(i);
				}
			});
		}
		msgLoop(0);
	});
});

// الجزء الخاص بزر Turn On Lights
$('#turn_on').click(function(){
	// إنشاء عنصر الحاوية لعرض الصورتين والنص في منتصف الصفحة
	var loveContainer = $('<div id="love-container" style="position:fixed; top:0; left:0; width:100%; height:100%; display:flex; justify-content:space-between; align-items:center; padding:0 50px; box-sizing:border-box; opacity:0; z-index:100000;"></div>');
	var leftImg = $('<img src="https://i.postimg.cc/L8DRz2PM/Whats-App-Image-2025-02-10-at-9-19-34-AM.jpg" style="max-width:30%; max-height:80%;" />');
	var textDiv = $('<div style="font-size:3em; color:#fff; text-align:center;">I love you hala</div>');
	var rightImg = $('<img src="https://i.postimg.cc/YCpxp2cy/Whats-App-Image-2025-02-14-at-6-13-17-AM.jpg" style="max-width:30%; max-height:80%;" />');
	
	loveContainer.append(leftImg, textDiv, rightImg);
	$('body').append(loveContainer);
	
	// ظهور الحاوية بتأثير تلاشي
	loveContainer.animate({opacity: 1}, 1000);
	
	// الكود الأصلي للزر
	$('#bulb_yellow').addClass('bulb-glow-yellow');
	$('#bulb_red').addClass('bulb-glow-red');
	$('#bulb_blue').addClass('bulb-glow-blue');
	$('#bulb_green').addClass('b	ulb-glow-green');
	$('#bulb_pink').addClass('bulb-glow-pink');
	$('#bulb_orange').addClass('bulb-glow-orange');
	$('body').addClass('peach');
	
	$(this).fadeOut('slow').delay(5000).promise().done(function(){
		// إخفاء أو إزالة loveContainer بعد انتهاء التأثير
		loveContainer.fadeOut('slow', function(){
			$(this).remove();
			// ظهور زر play music بعد إزالة الحاوية
			$('#play').fadeIn('slow');
		});
	});
});

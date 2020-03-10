$(function(){
	var  height= $(window).height()
	$('.swipe').height(height)
	$('.popup img').addClass('hvr-bob hover')
	setTimeout(function(){
		$('.start img').addClass('hvr-bob hover')
	},500)
	window.mySwipe = new Swipe(document.getElementById('slider'), {
	  startSlide: 0,
	  speed: 400,
	  auto: 0,
	  continuous: false,
	  disableScroll: false,
	  stopPropagation: true,
	  callback: function(index, elem) {
	  	$('*').removeClass('hvr-bob hover')
	  	$('*').removeClass('flipInX')
	  	if(index==0){
	  		$('.item').removeClass('active')
	  		$('.item').eq(index).addClass('active')
	  		$('.popup img').addClass('hvr-bob hover')
	  		setTimeout(function(){
			$('.start img').addClass('hvr-bob hover')
		 	},800)
		 	$('.enter img').click(function(event) {
		 		mySwipe.next()
		 	});	
	  	}else if(index==1){
	  		$('.typed1').text(' ')
	  		$('.item').removeClass('active')
	  		$('.item').eq(index).addClass('active')
			$('.active .type').addClass('flipInX')
			 setTimeout(function(){
			 	var typed1 = new Typed('.typed1', {
			    strings: ['你现在多少岁？'],
			    typeSpeed: 50,
			    backSpeed: 50,
			    fadeOut: true,
			    loop: false
			  });	
			 },500)
		 	$('.active .type img').addClass('hvr-bob hover')
		 	$('.active .typed1').addClass('hvr-bob hover')
		 	$('.active .next img').click(function(){
		 		mySwipe.next()
		 	})
	    }else if(index==2){
	  		$('.typed2').text(' ')
	  	
	  		$('.item').removeClass('active')
	  		$('.item').eq(index).addClass('active')
			$('.active .type').addClass('flipInX')
			 setTimeout(function(){
			 	var typed1 = new Typed('.typed2', {
			    strings: ['你每天工作几个小时？'],
			    typeSpeed: 50,
			    backSpeed: 50,
			    fadeOut: true,
			    loop: false
			  });
			 	
			 },500)
		 	$('.active .type img').addClass('hvr-bob hover')
		 	$('.active .typed2').addClass('hvr-bob hover')
		 	$('.active .next img').click(function(){
		 		mySwipe.next()
		 	})
	    }else if(index==3){
	  		$('.typed3').text(' ')
	  		$('.item').removeClass('active')
	  		$('.item').eq(index).addClass('active')
			$('.active .type').addClass('animated flipInX')
			 setTimeout(function(){
			 	var typed1 = new Typed('.typed3', {
			    strings: ['你现在的月薪是多少钱？'],
			    typeSpeed: 50,
			    backSpeed: 50,
			    fadeOut: true,
			    loop: false
			  });	
			 },500)
		 	$('.active .type img').addClass('hvr-bob hover')
		 	$('.active .typed3').addClass('hvr-bob hover')
		 	$('.active .checkedbox .checktop').addClass('animated flipInX')
		 	$('.active .checkedbox .checktop').addClass('ac')
		 	setTimeout(function(){
		 		$('.active .checkedbox .checkcen').addClass('animated flipInX')
		 	},500)
		 	setTimeout(function(){

		 		$('.active .checkedbox .checkbot').addClass('animated flipInX')
		 	},1000)
		 	$('.active .checkedbox img.check').click(function(event) {
		 		/* Act on the event */
		 		$('.active .checkedbox img.selectBtn').removeClass('checkedactive')
		 		$(this).siblings('.selectBtn').addClass('checkedactive')
		 	});
		 	$('.active .next img').click(function(){
		 		mySwipe.next()
		 	})
	    }else if(index==4){
	  		$('.typed4').text(' ')
	  		$('.sharetips').removeClass('ac')
		 	$('*').removeClass('opac')
	  		$('.item').removeClass('active')
	  		$('.item').eq(index).addClass('active')
			$('.active .type').addClass('animated flipInX')
			 setTimeout(function(){
			 	var age=$('.age').text()
			 	var salary=$('.item[data-index=3] .selectBtn.checkedactive').attr('data-value')?$('.item[data-index=3] .selectBtn.checkedactive').attr('data-value'):0
			 	var money=(80-age)*(salary*12)
			 	$('.typed4').attr('data-value',money)
			 	var formoney=formatNum(money)
			 	console.log('挣的钱：'+formoney)
			 	var typed1 = new Typed('.typed4', {
			    strings: ['这辈子你可以</br>挣<span>'+formoney+'</span>元'],
			    typeSpeed: 50,
			    backSpeed: 50,
			    fadeOut: true,
			    loop: false
			  });	
			 },500)
		 	$('.active .type img').addClass('hvr-bob hover')
		 	$('.active .typed4').addClass('hvr-bob hover')
		 	$('.sharebtn').unbind('click')
		 	$('.sharebtn').bind('click',function(event) {
		 		event.stopPropagation()
		 		$('.active .sharetips').toggleClass('ac')
		 		$('.active .popup').children('*').toggleClass('opac')
		 		$('.active .top').toggleClass('opac')
		 		$('.active .music').toggleClass('opac')	
		 		
		 	});
	 		$('.item.active').bind('click', function(event) {
		 		if($('.active .sharetips').hasClass('ac')){
		 			$('.active .sharetips').removeClass('ac')
		 			$('.active .popup').children('*').removeClass('opac')
		 			$('.active .top').removeClass('opac')
		 			$('.active .music').removeClass('opac')
			 	}
		 	});
		 	
		 	$('.active .next img.combtn').click(function(){
		 		mySwipe.next()
		 	})
	    }else if(index==5){
	  		$('.typed5').text(' ')
	  		$('.item').removeClass('active')
	  		$('.item').eq(index).addClass('active')
			$('.active .type').addClass('animated flipInX')
			 setTimeout(function(){
			 	var typed1 = new Typed('.typed5', {
			    strings: ['你一般买多少价位的衣服？'],
			    typeSpeed: 50,
			    backSpeed: 50,
			    fadeOut: true,
			    loop: false
			  });	
			 },500)
		 	$('.active .type img').addClass('hvr-bob hover')
		 	$('.active .typed5').addClass('hvr-bob hover')
		 	$('.active .checkedbox .checktop').addClass('animated flipInX')
		 	$('.active .checkedbox .checktop').addClass('ac')
		 	setTimeout(function(){
		 		$('.active .checkedbox .checkcen').addClass('animated flipInX')
		 	},500)
		 	setTimeout(function(){

		 		$('.active .checkedbox .checkbot').addClass('animated flipInX')
		 	},1000)
		 	$('.active .checkedbox img.check').click(function(event) {
		 		/* Act on the event */
		 		$('.active .checkedbox img.selectBtn').removeClass('checkedactive')
		 		$(this).siblings('.selectBtn').addClass('checkedactive')
		 	});
		 	$('.active .next img').click(function(){
		 		mySwipe.next()
		 	})
	    }else if(index==6){
	  		$('.typed6').text(' ')
	  		$('.item').removeClass('active')
	  		$('.item').eq(index).addClass('active')
			$('.active .type').addClass('animated flipInX')
			 setTimeout(function(){
			 	var typed1 = new Typed('.typed6', {
			    strings: ['你平均每天吃饭花多少钱？'],
			    typeSpeed: 50,
			    backSpeed: 50,
			    fadeOut: true,
			    loop: false
			  });	
			 },500)
		 	$('.active .type img').addClass('hvr-bob hover')
		 	$('.active .typed6').addClass('hvr-bob hover')
		 	$('.active .checkedbox .checktop').addClass('animated flipInX')
		 	$('.active .checkedbox .checktop').addClass('ac')
		 	setTimeout(function(){
		 		$('.active .checkedbox .checkcen').addClass('animated flipInX')
		 	},500)
		 	setTimeout(function(){

		 		$('.active .checkedbox .checkbot').addClass('animated flipInX')
		 	},1000)
		 	$('.active .checkedbox img.check').click(function(event) {
		 		/* Act on the event */
		 		$('.active .checkedbox img.selectBtn').removeClass('checkedactive')
		 		$(this).siblings('.selectBtn').addClass('checkedactive')
		 	});
		 	$('.active .next img').click(function(){
		 		mySwipe.next()
		 	})
	    }else if(index==7){
	  	    $('.typed7').text(' ')
	  		$('.item').removeClass('active')
	  		$('.item').eq(index).addClass('active')
			$('.active .type').addClass('animated flipInX')
			 setTimeout(function(){
			 	var typed1 = new Typed('.typed7', {
			    strings: ['你平时上班的交通工具是？'],
			    typeSpeed: 50,
			    backSpeed: 50,
			    fadeOut: true,
			    loop: false
			  });	
			 },500)
		 	$('.active .type img').addClass('hvr-bob hover')
		 	$('.active .typed7').addClass('hvr-bob hover')
		 	$('.active .checkedbox .checktop').addClass('animated flipInX')
		 	$('.active .checkedbox .checktop').addClass('ac')
		 	setTimeout(function(){
		 		$('.active .checkedbox .checkcen').addClass('animated flipInX')
		 	},500)
		 	setTimeout(function(){

		 		$('.active .checkedbox .checkbot').addClass('animated flipInX')
		 	},1000)
		 	$('.active .checkedbox img.check').click(function(event) {
		 		/* Act on the event */
		 		$('.active .checkedbox img.selectBtn').removeClass('checkedactive')
		 		$(this).siblings('.selectBtn').addClass('checkedactive')
		 	});
		 	$('.active .next img').click(function(){
		 		var transConsumption=$('.active .checkedactive').attr('data-value')? $('.active .checkedactive').attr('data-value'):0
		 		mySwipe.next()
		 	})
	    }else if(index==8){
	  		$('.typed8').text(' ')
	  		$('.item').removeClass('active')
	  		$('.item').eq(index).addClass('active')
			$('.active .type').addClass('animated flipInX')
			 setTimeout(function(){
			 	var typed1 = new Typed('.typed8', {
			    strings: ['你每月需要为房子负担多少钱？'],
			    typeSpeed: 50,
			    backSpeed: 50,
			    fadeOut: true,
			    loop: false
			  });	
			 },500)
		 	$('.active .type img').addClass('hvr-bob hover')
		 	$('.active .typed8').addClass('hvr-bob hover')
		 	$('.active .checkedbox .checktop').addClass('animated flipInX')
		 	$('.active .checkedbox .checktop').addClass('ac')
		 	setTimeout(function(){
		 		$('.active .checkedbox .checkcen').addClass('animated flipInX')
		 	},500)
		 	setTimeout(function(){

		 		$('.active .checkedbox .checkbot').addClass('animated flipInX')
		 	},1000)
		 	$('.active .checkedbox img.check').click(function(event) {
		 		/* Act on the event */
		 		$('.active .checkedbox img.selectBtn').removeClass('checkedactive')
		 		$(this).siblings('.selectBtn').addClass('checkedactive')
		 	});
		 	$('.active .next img').click(function(){
		 		mySwipe.next()
		 	})
	    }else if(index==9){
	  		$('.typed9').text(' ')
	  		$('.typed11').text(' ')
	  		/*$('.p19').removeClass('ac')*/
	  		$('.item').removeClass('active')
	  		$('.item').eq(index).addClass('active')

			$('.active .type').addClass('animated flipInX')
			 setTimeout(function(){
			 	var age=$('.age').text()
			 	var clothConsumption=$('.item[data-index=5] .selectBtn.checkedactive').attr('data-value') ? $('.item[data-index=5] .selectBtn.checkedactive').attr('data-value') : 0
			 	var mealConsumption=$('.item[data-index=6] .selectBtn.checkedactive').attr('data-value') ? $('.item[data-index=6] .selectBtn.checkedactive').attr('data-value') : 0
			 	var transConsumption=$('.item[data-index=7] .selectBtn.checkedactive').attr('data-value') ? $('.item[data-index=7] .selectBtn.checkedactive').attr('data-value') : 0
			 	var homeConsumptio=$('.item[data-index=8] .selectBtn.checkedactive').attr('data-value') ? $('.item[data-index=8] .selectBtn.checkedactive').attr('data-value') : 0
			 	console.log('age:'+age)
			 	console.log('clothConsumption:'+clothConsumption)
			 	console.log('mealConsumption:'+mealConsumption)
			 	console.log('transConsumption:'+transConsumption)
			 	console.log('homeConsumptio:'+homeConsumptio)
			 	var totalMoney=(clothConsumption*12+transConsumption*12+homeConsumptio*12)+mealConsumption*30*12
			 	var money=totalMoney*(80-age);
			 	$('.typed9').attr('data-value',money)
			 	var formoney=formatNum(money)
			 	console.log('花的钱：'+formoney)
			 	var typed1 = new Typed('.typed9', {
			    strings: ['<b>你这辈子的生活必须花费</b></br>是：<span>'+formoney+'</span>元'],
			    typeSpeed: 50,
			    backSpeed: 50,
			    fadeOut: true,
			    loop: false
			  });
			 	$('.active .typed9').addClass('hvr-bob hover')
			 	var smoney=$('.typed4').attr('data-value')-$('.typed9').attr('data-value')
			  	var typed2 = new Typed('.typed11', {
			    strings: ['<b>你这辈子总共有</b></br><span>'+smoney+'</span>元存款'],
			    typeSpeed: 50,
			    backSpeed: 50,
			    fadeOut: true,
			    loop: false
			  });	
			 },500)
		 	$('.active .type img').addClass('hvr-bob hover')
		 	$('.active .typed11').addClass('hvr-bob hover')
		 	$('.sharebtn').unbind('click')
		 	$('.active .sharebtn').click(function(event) {
		 		event.stopPropagation()
		 		$('.active .sharetips').toggleClass('ac')
	 			$('.active .popup').children('*').toggleClass('opac')
	 			$('.active .top').toggleClass('opac')
	 			$('.active .music').toggleClass('opac')
		 		
		 	});
		 	$('.item.active').bind('click', function(event) {
		 		if($('.active .sharetips').hasClass('ac')){
		 			$('.active .sharetips').removeClass('ac')
		 			$('.active .popup').children('*').removeClass('opac')
		 			$('.active .top').removeClass('opac')
		 			$('.active .music').removeClass('opac')
			 	}
		 	});
		 	$('.active .next img.combtn').click(function(){
		 		mySwipe.next()
		 	})
	    }else{

	  		var money=$('.typed4').attr('data-value')-$('.typed9').attr('data-value')
		 	console.log('剩余的钱：'+money)
		 	if(money>0){
			 	var typed10 = new Typed('.typed10', {
			    strings: [' ',
			    `<p class='p1'>你有<b>${money}</b>元钱,</p>
			    <p class='p2'> 终于可以梦寐以求了</p>
			    <p class='p3'>但！你已经80岁了。</p>
				<p class='p4'>买了那款相机，</p>
				<p class='p5'>视线却有些模糊了</p>`,
				`<p class='p6'>孩子学费让你踌躇，</p>
				<p class='p7'>你曾发誓说要给他最好的...</p>
				<p class='p8'>你想到小时候买不起的糖，</p>
				<p class='p9'>现在买得起了，却再也咬不动了...</p>
				<p class='p10'>其实你还有另一种活法</p>`,
				`<p class='p11'>你可以在你最喜欢的</p>
				<p class='p12'>时候拥有这一切</p>
				<p class='p13'>不必将就，也不必遗憾</p>
				<p class='p14'><img src="./img/11/logo.png" alt="" /></p>`,
				`<p class='p15'><img src="./img/11/qr.png" alt="" /></p>
				<p class='p16'><img src="./img/11/Triangle.png" alt="" /></p>
				<p class='p17'>关注就趣微信公众号</p>
				<p class='p18'>给你不将就的未来</p>`],
			    typeSpeed: 30,
			    backSpeed: 50,
			    fadeOut: true,
			    loop: false
			  	});	
		  	}else{
		  		var typed12 = new Typed('.typed10', {
			    strings: [
			    `<p class='p1'>你这个“负”翁,</p>
			    <p class='p2'> 你是喝露水长大的吗？</p>
			    <p class='p3'><b>就问你，没钱你怕了吗？</b></p>
				<p class='p4'>不过还好有我</p>
				<p class='p5'><b>最高额度20万</b></p>
				<p class='p5'>给你你敢拿吗？</p>
				<p class='p19'>
				<img class='btn1' src="./img/11/Button-01.png" alt="" />
				<img class='btn2' src="./img/11/Button-02.png" alt="" />
				</p>
				`
				],
			    typeSpeed: 30,
			    backSpeed: 50,
			    fadeOut: true,
			    loop: false
			  	});
			  	/*setTimeout(function(){
			  		$('.lay').addClass('ac')
			  	},5000)*/
			  	$('.lay').click(function(event) {
			  		$('.p19').removeClass('ac')
			  		console.log('a')
			  		$('.typed10 p').hide()
			  		var typed2 = new Typed('.typed10', {
				    strings: [
				    `<p class='p15'><img src="./img/11/qr.png" alt="" /></p>
					<p class='p16'><img src="./img/11/Triangle.png" alt="" /></p>
					<p class='p17'>关注就趣微信公众号</p>
					<p class='p18'>给你不将就的未来</p>`
					],
				    typeSpeed: 50,
				    backSpeed: 50,
				    fadeOut: true,
				    loop: false
				  	});
				  	});	

		  	}			
	    }
	  },
	  transitionEnd: function(index, elem) {

	  }
	});
	$('.enter img').click(function(event) {
		 		mySwipe.next()
	});
});
function formatNum(strNum) {
	if (strNum.length <= 3) {
	return strNum;
	}
	if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
	return strNum;
	}
	var a = RegExp.$1, b = RegExp.$2, c = RegExp.$3;
	var re = new RegExp();
	re.compile("(\\d)(\\d{3})(,|$)");
	while (re.test(b)) {
	b = b.replace(re, "$1,$2$3");
	}
	return a + "" + b + "" + c;
}
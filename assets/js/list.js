$(function(){

	$(window).scroll(function(){
		var w1=$(window).height();
		var s1=$(document).scrollTop();
		if(s1>w1){
			$('.fix').fadeIn(300);
		}else{
			$('.fix').fadeOut(300);
		}
	})
	$('.fix .gotop').click(function(){
		$(document).scrollTop(0);
	})
	

	

	

	$('.container-banner').children('ul').children('li').mouseover(function(){
		$(this).css('color','#00c3f5');
	}).mouseout(function(){
		$(this).css('color','#333');
	})

	$('.list2').find('li').mouseover(function(){
		$(this).css('color','#00c3f5');
	}).mouseout(function(){
		$(this).css('color','#333');
	})


	// 导航栏一上去出现的框
	
	$('.header li.select').mouseenter(function(){
		
		var index=$(this).index();
		$(this).parent().siblings('.run-detail').stop(true,true).slideDown();
		$(this).parent().siblings('.run-detail').children('div').eq(index-1).show().siblings().hide();
		
	})
	$('.run-detail').mouseenter(function(){
		$(this).show();
	}).mouseleave(function(){
		$(this).slideUp(300);
	})
	$('.header li.noselect').mouseenter(function(){
		$(this).parent().siblings('.run-detail').slideUp(300);
	})

	$('.container').children('.list4').children('.list4-content').find('li').find('img').mouseenter(function(){
		$(this).animate({width:180,height:180},300);
		$(this).stop(true).animate({width:200,height:200},300);
	}).mouseleave(function(){
		$(this).stop(true).animate({width:180,height:180},300);
	})
	$('.list3-check li').click(function(){
		var index=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parent().parent().siblings('.list3-content').children('.content').children('ul').eq(index).addClass('active').siblings().removeClass('active');
		
	})
	
     // 结尾部分
	$('.left-con a').mouseenter(function(){
		$(this).find('.after').show();
	}).mouseleave(function(){
		$(this).find('.after').hide();
	})
	$('.footer2-right a').mouseenter(function(){
		$(this).find('.after').show();
	}).mouseleave(function(){
		$(this).find('.after').hide();
	})
	$('.right-wx').mouseenter(function(){
		$('.footer2-right p').show();
	}).mouseleave(function(){
		$('.footer2-right p').hide();
	})


	$.get('http://localhost/h5-32/6-program/p02/h532-app/assets/js/list1.php',function(data){
		console.log(data);
		var content='';
		data.forEach(function(value,key){
				content+='<li class='+value.id+'><a href="javascript:;">';
					content+='<div class="item-wrap"><a href="detail.html">';
					content+='<div class="big-img">'+value.img1+'</div></a>';
					content+='<div class="small-img"><dl>'+value.img2+'</dl></div>';
	                content+='<h2>'+value.type+'</h2>';
	                content+='<h3>'+value.use+'</h3>';
	                content+='<dd>'+value.price+'</dd></div>';
	               content+='</a></li>';

					
		});
		document.querySelector('.list3-content .tuijian').innerHTML+=content;

		var index=0;
		$('.small-img').find('dl').children('dd').click(function(){
			var index=$(this).index();
			$(this).parent('dl').parent('.small-img').siblings('a').find('.big-img').children('img').eq(index).addClass('active').siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
		})

		$('.list3-content').find('ul').children('li').mouseenter(function(){
			$(this).css('box-shadow','0 0 30px #ddd');
		}).mouseleave(function(){
			$(this).css('box-shadow','0 0 0 #ddd');
		})
	},'json')


	$.get('http://localhost/h5-32/6-program/p02/h532-app/assets/js/list2.php',function(data){
		console.log(data);
		var content='';
		data.forEach(function(value,key){
				content+='<li class='+value.id+'><a href="javascript:;">';
					content+='<div class="item-wrap"><a href="detail.html"><div class="big-img">';
					content+=value.img1;
					content+='</div></a><div class="small-img"><dl>'+value.img2+'</dl></div>';
	                content+='<h2>'+value.type+'</h2>';
	                content+='<h3>'+value.use+'</h3>';
	                content+='<dd>'+value.price+'</dd></div>';
	               content+='</a></li>';
					
		});
		document.querySelector('.list3-content .newshop').innerHTML+=content;
		var index=0;
		$('.small-img dd').click(function(){
			var index=$(this).index();
			$(this).parent().parent().siblings('a').find('.big-img').children('img').eq(index).addClass('active').siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
		})
		$('.list3-content').find('ul').children('li').mouseenter(function(){
			$(this).css('box-shadow','0 0 30px #ddd');
		}).mouseleave(function(){
			$(this).css('box-shadow','0 0 0 #ddd');
		})
	},'json')

	$.get('http://localhost/h5-32/6-program/p02/h532-app/assets/js/list3.php',function(data){
		console.log(data);
		var content='';
		data.forEach(function(value,key){
				content+='<li class='+value.id+'><a href="javascript:;">';
					content+='<div class="item-wrap"><a href="detail.html"><div class="big-img">';
					content+=value.img1;
					content+='</div></a><div class="small-img"><dl>'+value.img2+'</dl></div>';
	                content+='<h2>'+value.type+'</h2>';
	                content+='<h3>'+value.use+'</h3>';
	                content+='<dd>'+value.price+'</dd></div>';
	               content+='</a></li>';
					
		});
		document.querySelector('.list3-content .prices').innerHTML+=content;
		var index=0;
		$('.small-img dd').click(function(){
			var index=$(this).index();
			$(this).parent().parent().siblings('a').find('.big-img').children('img').eq(index).addClass('active').siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
		})
		$('.list3-content').find('ul').children('li').mouseenter(function(){
			$(this).css('box-shadow','0 0 30px #ddd');
		}).mouseleave(function(){
			$(this).css('box-shadow','0 0 0 #ddd');
		})
	},'json')

	
})

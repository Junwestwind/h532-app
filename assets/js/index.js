// 轮播图
$(function(){
	var index=0;
	var timer=0;
	var len=$('.carousel li').length;
	var cloneFirst=$('.car1').clone();
	$('.carousel').append(cloneFirst);
	function run(){
		timer=setInterval(function(){
			$('.carousel-index li:eq('+index%len+')').removeClass('active');
			index++;
			if(index>len){
				index=1;
				$('.carousel').css('left',0);
			}
			$('.carousel-index li:eq('+index%len+')').addClass('active');
			$('.carousel').animate({left:-1345*index},300);
		},2000)
	}
	run();
	$('.container-carousel').mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
		run();
	})
	$('.carousel-index li').click(function(){
		$('.carousel-index li:eq('+index+')').removeClass('active');
		index=$(this).index();
		$('.carousel-index li:eq('+index+')').addClass('active');
		$('.carousel').animate({left:-1345*index},300);
	})

	$('.header li.select').mouseenter(function(){
		
		var index=$(this).index();
		$(this).parent().siblings('.run-detail').stop(true).slideDown();
		$(this).parent().siblings('.run-detail').children('div').eq(index-1).show().siblings().hide();
		$(this).find('a').css('color','#00c3f5')
		$(this).siblings('li').find('a').css('color','#333');
		$(this).parent().parent().css('background-color','#fff');
		$(this).parent().siblings('.img').children('img:eq(1)').addClass('active').siblings().removeClass('active');
		$(this).parent().siblings('.banner-cart').children('i').css('color','#333');
		
	})
	$('.run-detail').mouseenter(function(){
		$(this).show();
		$(this).siblings('ul').css('color','#333');
	}).mouseleave(function(){
		$(this).slideUp(300);
		$(this).parent().css('background-color','transparent');
		$(this).siblings('ul').find('a').css('color','#fff');
		$(this).siblings('.banner-cart').children('i').css('color','#fff');
		$(this).siblings('.img').children('img:eq(0)').addClass('active').siblings().removeClass('active');
	})
	$('.header li.noselect').mouseenter(function(){
		$(this).parent().siblings('.run-detail').slideUp(300);
		$(this).parent().parent().css('background-color','transparent');
		$(this).parent().siblings('.img').children('img:eq(0)').addClass('active').siblings().removeClass('active');
		$(this).find('a').css('color','#00c3f5');
		$(this).siblings('li').find('a').css('color','#fff');
		$(this).parent().siblings('.banner-cart').children('i').css('color','#fff');
	}).mouseleave(function(){
		$(this).find('a').css('color','#fff');
	})

    

	$(window).scroll(function(){
		var s=$(document).scrollTop();
		var w=$(window).height()/2;
		if(s>w){

			$('.nav-header').slideDown();
			// $('.fixed').animate({right:-90},500);
			$('.fixed').show();
		}else{
			$('.nav-header').slideUp();
			$('.fixed').hide();
		}
	})
	$('.nav-header a').mouseover(function(){
		$(this).css('color','#00c3f5');
		
	}).mouseout(function(){
		$(this).css('color','#333');
		
	})
	$('.nav-header li').mouseover(function(){
		$(this).find('i').show();
	}).mouseout(function(){
		$(this).find('i').hide();
	})
	
	// $('.nav-header').slideDown(500);




	$('.fixed').find('.app').mouseenter(function(){
		
		$('.app').find('.app-ma').slideUp();
		$('.app').find('.app-ma').stop(true).slideDown();
		// $('.app').find('.app-ma').slideDown();
	}).mouseleave(function(){
		$('.app').find('.app-ma').stop().slideUp();
	})
	$('.fixed .cart').mouseenter(function(){

		$('.cart').animate({right:0},300);
		$('.cart').find('span').animate({left:23,top:10},100);
		
		$('.cart').stop(true).animate({right:60},300);
		$('.cart').find('span').stop(true).animate({left:95,top:25},100);
	}).mouseleave(function(){
		$('.cart').stop().animate({right:0},300);
		$('.cart').find('span').stop().animate({left:23,top:10},100);
		
	})

	$('.fixed .up').mouseenter(function(){
		
		$('.up').animate({right:0},300);
		$('.up').stop(true).animate({right:60},300);
	}).mouseleave(function(){
		$('.up').stop().animate({right:0},300);
	})

	$('.fixed li').mouseenter(function(){
		$(this).css('background-color','#a39a9a');

	}).mouseleave(function(){
		$(this).css('background-color','#d8d8d8');
	})
	$('.fixed .up').click(function(){
		$(document).scrollTop(0);
	})

	




	// 第三商品区
	$('.container3 li').mouseenter(function(){
		$(this).find('.before').stop(true);
		$(this).find('.after').stop(true);
		$(this).find('.before').animate({left:0},0);
		$(this).find('.after').animate({left:0},0);
		var liLeft=$(this).find('img').width()/4;
		$(this).find('.before').animate({left:liLeft},500);
		$(this).find('.after').animate({left:-liLeft},500);
	}).mouseleave(function(){
		$(this).find('.before').stop().animate({left:0},500);
		$(this).find('.after').stop().animate({left:0},500);
	})



	// 第四商品区
	// 
	var len2=$('.index-pointer li').length;
	var index1=0;

	$('.carousel-content ul').mouseenter(function(){
		$(this).parent().siblings('.carousel-left,.carousel-right').css('display','block');
	}).mouseleave(function(){
		$(this).parent().siblings('.carousel-left,.carousel-right').css('display','none');
	})


	$('.carousel-left,.carousel-right').mouseenter(function(){
		$(this).show();
		$('.carousel-left,.carousel-right').css('background-color','#333');
	}).mouseleave(function(){
		$('.carousel-left,.carousel-right').css('background-color','rgba(0,0,0,.2)');

	})


	$('.index-pointer li').click(function(){
		$('.index-pointer li:eq('+index1+')').removeClass('active1');
		index1=$(this).index();
		$('.carousel-content').animate({left:-1345*index1},300);
		$('.index-pointer li:eq('+index1+')').addClass('active1');
	})


	$('.carousel-left').click(function(){
		$('.index-pointer li:eq('+index1+')').removeClass('active1');
		index1--;
		if(index1<0){
			index1=0;
		}
		$('.carousel-content').animate({left:-1345*index1},300);
		$('.index-pointer li:eq('+index1+')').addClass('active1');
	})

	
	
	$('.carousel-right').click(function(){
		$('.index-pointer li:eq('+index1+')').removeClass('active1');
		index1++;
		if(index1>len2-1){
			index1=len2-1;
		}
		$('.carousel-content').animate({left:-1345*index1},300);
		$('.index-pointer li:eq('+index1+')').addClass('active1');
	})



	// 第五商品区
	$('.container5 li').mouseenter(function(){
		$(this).find('.before').show();
		$(this).find('.after').stop(true).fadeIn(400);
	}).mouseleave(function(){
		$(this).find('.after').stop().fadeOut(400);
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





	$.get('http://localhost/h5-32/6-program/p02/h532-app/assets/js/index.php',function(data){
		console.log(data);
		var content='1';
		data.forEach(function(value,key){
				content+='<li><a href="">';
					content+='<div>';
						content+='<img src="'+value.img+'" alt="">';
					content+='</div>';
					content+='<span class="phone-info">';
						content+='<span>'+value.pname+'</span>';
						content+='<span>'+value.use+'</span>';
						content+='<em>'+value.price+'</em>';
					content+='</span>';
				content+='</a></li>';
		});
		document.querySelector('.carousel-content ul').innerHTML+=content;
	},'json')

	
})


$(function(){
	$(window).scroll(function(){
		var w1=$(window).height();
		var s1=$(document).scrollTop();
		// if(s1>w1){
		// 	$('.fix1').fadeIn(300);
		// }else{
		// 	$('.fix1').fadeOut(300);
		// }

		if(s1>w1/3){
			$('.scroll').slideDown(500);
			// var sbool=false;
			if(s1>646){
				// sbool=true;
				$('.scroll .it-right .content').stop().animate();
				$('.scroll .it-right .content').animate({right:0},200);
			}else{

				$('.scroll .it-right .content').animate({right:-124},200);
			}
			if(s1>818){
				$('.scroll ul').slideDown(300);
			}else{
				$('.scroll ul').hide();
			}
		}else{
			$('.scroll').slideUp(500);
		}
		
	})
	$('.fix1 .gotop').click(function(){
		$(document).scrollTop(0);
	})
	// 导航栏一上去出现的框
	
	$('.header li.select').mouseenter(function(){
		
		var index=$(this).index();
		$(this).parent().siblings('.run-detail').stop(true).slideDown();
		// $(this).parent().siblings('.run-detail').stop(true).slideUp();
		$(this).parent().siblings('.run-detail').children('div').eq(index-1).show().siblings().hide();
		// $(this).addClass('active1').siblings().removeClass('active1');
		
	})
	$('.run-detail').mouseenter(function(){
		$(this).show();
	}).mouseleave(function(){
		$(this).slideUp(300);
	})
	$('.header li.noselect').mouseenter(function(){
		$(this).parent().siblings('.run-detail').slideUp(300);
	})


	$('.container-banner').children('ul').children('li').mouseover(function(){
		$(this).css('color','#00c3f5');
	}).mouseout(function(){
		$(this).css('color','#333');
	})
	
	// 左边图片切换
	$('.container .row-left .img-small li').click(function(){
		var index=$(this).index();
		$(this).parent().siblings('.img-big').children('img').eq(index).addClass('check').siblings().removeClass('check');
		$(this).addClass('current').siblings().removeClass('current');
	})
	// 花呗分期点击事件
	$('.huabei-detail a').click(function(){
		$(this).addClass('prop').siblings().removeClass('prop');
	})
	// 颜色分类点击事件
	$('.colors a').click(function(){
		var index=$(this).index();
		$(this).addClass('selected').siblings().removeClass('selected');
		$(this).parent().parent().parent().parent().siblings('.left').children('div').eq(index).addClass('active').siblings().removeClass('active');
	})
	// 级联
	$('.all-area').mouseenter(function(){
		$(this).find('.all').css('display','block');
	}).mouseleave(function(){
		$(this).find('.all').css('display','none');
	})
	var content=$('.dis1 li').html();
	var content1=$('.dis2 li').html();
	var content2=$('.dis3 li').html();
	var content3=$('.dis4 li').html();
	$('.dis1 li').click(function(){
		
		// var index=$(this).parent().parent().siblings('.all-header').find('li').index();
		$(this).parent().parent().siblings('.all-header').find('li:eq(0)').html(content);
		$(this).parent().parent().siblings('.all-header').find('li:eq(1)').addClass('active');
		$(this).parent().siblings('.dis2').addClass('active').siblings().removeClass('active');
	})
	$('.dis2 li').click(function(){
		
		// $(this).parent().parent().siblings('.all-header').find('li').css('border','1px solid #dcdcdc')
		// $(this).parent().parent().siblings('.all-header').find('li').css('color','#dcdcdc');

		$(this).parent().parent().siblings('.all-header').find('li:eq(1)').html(content1);
		$(this).parent().parent().siblings('.all-header').find('li:eq(2)').addClass('active');
		$(this).parent().siblings('.dis3').addClass('active').siblings().removeClass('active');
	})
	$('.dis3 li').click(function(){
		
		// $(this).parent().parent().siblings('.all-header').find('li').css('border','1px solid #dcdcdc')
		// $(this).parent().parent().siblings('.all-header').find('li').css('color','#dcdcdc');
		$(this).parent().parent().siblings('.all-header').find('li:eq(2)').html(content2);
		$(this).parent().parent().siblings('.all-header').find('li:eq(3)').addClass('active');
		$(this).parent().siblings('.dis4').addClass('active').siblings().removeClass('active');
	})
	$('.dis4 li').click(function(){
		$(this).parent().parent().siblings('.all-header').find('li:eq(3)').html(content3);
		$(this).parent().parent().parent().siblings('.select-area').html(content+content1+content2+content3);
		$(this).parent().parent().parent().hide();
	})

	// 数量的选择
	$('.vm-plus').click(function(){
		var num=new Number($(this).siblings('input').val());
		do{
			$(this).siblings('input').val(String(1))
			num=num+1;
			$(this).siblings('input').val(String(num));
		}while(num>99)
		
	})
	$('.vm-minus').click(function(){
		var num=new Number($(this).siblings('input').val());
		if(num>1){
			$(this).siblings('input').val(String(1))
			num=num-1;
			$(this).siblings('input').val(String(num));
		}else{
			return false;
		}
		
	})


	$('.main-hd a').click(function(){
		var index=$(this).parent().index();
		$(this).addClass('active').parent().siblings().children().removeClass('active');
		$(this).parent().parent().parent().siblings('.goods-info').children('div').eq(index).addClass('active').siblings().removeClass('active');
	})



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
})
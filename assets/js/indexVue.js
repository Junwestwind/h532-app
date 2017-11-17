new Vue({
		el:'#app',
		data:{
			detail1:[
				{img:'assets/images/header1-1.jpg',type:'PRO 7',price:'￥288起'},
				{img:'assets/images/header1-2.png',type:'PRO 7 plus',price:'￥3580起'},
				{img:'assets/images/header1-3.jpg',type:'PRO 6 plus',price:'￥2699'},
				{img:'assets/images/header1-4.png',type:'PRO 6s',price:'￥2299'},
				{img:'assets/images/header1-5.jpg',type:'MX6',price:'￥599'}
			],
			detail2:[
				{img:'assets/images/header2-1.png',type:'PRO 7',price:'￥288起'},
				{img:'assets/images/header2-2.jpg',type:'PRO 7 plus',price:'￥3580起'},
				{img:'assets/images/header2-3.jpg',type:'PRO 6 plus',price:'￥2699'},
				{img:'assets/images/header2-4.jpg',type:'PRO 6s',price:'￥2299'},
				{img:'assets/images/header2-5.jpg',type:'MX6',price:'￥599'},
				{img:'assets/images/header2-6.jpg',type:'PRO 6 plus',price:'￥2699'},
				{img:'assets/images/header2-7.jpg',type:'PRO 6s',price:'￥2299'},
				{img:'assets/images/header2-8.png',type:'MX6',price:'￥599'}
			],
			detail3:[
				{img:'assets/images/header3-1.png',type:'PRO 7',price:'￥288起'},
				{img:'assets/images/header3-2.png',type:'PRO 7 plus',price:'￥3580起'},
				{img:'assets/images/header3-3.png',type:'PRO 6 plus',price:'￥2699'},
				{img:'assets/images/header3-4.png',type:'PRO 6s',price:'￥2299'},
				{img:'assets/images/header3-5.png',type:'MX6',price:'￥599'},
				{img:'assets/images/header3-6.png',type:'PRO 6 plus',price:'￥2699'},
				{img:'assets/images/header3-7.png',type:'PRO 6s',price:'￥2299'}
			],
			detail4:[
				{img:'assets/images/header4-1.png',type:'PRO 7',price:'￥288起'},
				{img:'assets/images/header4-2.png',type:'PRO 7 plus',price:'￥3580起'},
				{img:'assets/images/header4-3.png',type:'PRO 6 plus',price:'￥2699'},
				{img:'assets/images/header4-4.png',type:'PRO 6s',price:'￥2299'},
				{img:'assets/images/header4-5.png',type:'MX6',price:'￥599'},
				{img:'assets/images/header4-6.jpg',type:'PRO 6 plus',price:'￥2699'},
				{img:'assets/images/header4-7.png',type:'PRO 6s',price:'￥2299'},
				{img:'assets/images/header4-8.png',type:'MX6',price:'￥599'}
			],
			container1:[
				{img:'assets/images/container1-2.jpg',type:'推荐有奖',you:'瓜分百万奖金'},
				{img:'assets/images/container1-1.jpg',type:'魅蓝Note6',you:'高通八核CPU疾速双摄'},
				{img:'assets/images/container1-3.jpg',type:'魅蓝E2',you:'限时特惠100元'},
			],
			container2:[
				{img:'assets/images/icon-accessory-1.png',name:'手机'},
				{img:'assets/images/icon-accessory-2.png',name:'壳膜套'},
				{img:'assets/images/icon-accessory-3.png',name:'数据线'},
				{img:'assets/images/icon-accessory-4.png',name:'电源适配器'},
				{img:'assets/images/icon-accessory-5.png',name:'数码影音'},
				{img:'assets/images/icon-accessory-6.png',name:'智能硬件'},
				{img:'assets/images/icon-accessory-7.png',name:'生活周边'},
				{img:'assets/images/icon-accessory-8.png',name:'所有分类'},
			],
			container3:[
				{img1:'assets/images/after1.png',img2:'assets/images/before1.png',type:'魅族PRO7',you:'新品现货12期免息',price:'￥2880起'},
				{img1:'assets/images/after2.png',img2:'assets/images/before2.png',type:'魅族PRO 7 Plus',you:'购机享12期免息',price:'￥3580起'},
				{img1:'assets/images/after3.png',img2:'assets/images/before3.png',type:'魅族PRO 6s',you:'直降200 购机仅需2299元',price:'￥2299'}
			],
			container5:[
				{img1:'assets/images/container4-1.png',img2:'assets/images/container4-1.jpg',type:'魅蓝旅行包',you:'青春正好，即刻出发',price:'￥269'},
				{img1:'assets/images/container4-2.png',img2:'assets/images/container4-2.jpg',type:'魅族手环',you:'腕间流动的心率专家',price:'￥229'},
				{img1:'assets/images/container4-3.png',img2:'assets/images/container4-3.jpg',type:'魅族EP51蓝牙运动耳机',you:'丛林绿/云雾蓝新品开售',price:'￥229'},
				{img1:'assets/images/container4-4.png',img2:'assets/images/container4-4.jpg',type:'魅篮 休闲旅行双肩包',you:'曲面一体式 多功能隔层',price:'￥199'},
				{img1:'assets/images/container4-5.png',img2:'assets/images/container4-5.jpg',type:'魅族EP2X耳机',you:'契合声音的流动之美',price:'￥129'},
				{img1:'assets/images/container4-6.png',img2:'assets/images/container4-6.jpg',type:'魅族智能体脂秤',you:'精准的数字 才是真实的你',price:'￥168'},
				{img1:'assets/images/container4-7.png',img2:'assets/images/container4-7.jpg',type:'魅族盒子一键找回遥控器',you:'一键找回遥控器',price:'￥399'},
				{img1:'assets/images/container4-8.png',img2:'assets/images/container4-8.jpg',type:'魅族HD50 头戴式耳机',you:'清新简洁，有音质更有颜值',price:'￥399'},
				{img1:'assets/images/container4-9.png',img2:'assets/images/container4-9.jpg',type:'魅族蓝牙小音箱',you:'好音感 直达心灵',price:'￥169'},
				{img1:'assets/images/container4-10.png',img2:'assets/images/container4-10.jpg',type:'魅族路由器 极速版',you:'天生不凡 快狠稳',price:'￥199'},
				{img1:'assets/images/container4-11.png',img2:'assets/images/container4-11.jpg',type:'Hi Case趣闪保护壳',you:'专为魅蓝E2量身打造',price:'￥79'},
				{img1:'assets/images/container4-12.png',img2:'assets/images/container4-12.jpg',type:'魅族 蓝牙通话耳机',you:'经典小圆点一键集大成',price:'￥89'},
			],
			container6:[
				{img:'assets/images/icon-server1.png',typename:'真伪查询'},
				{img:'assets/images/icon-server2.png',typename:'以旧换新'},
				{img:'assets/images/icon-server3.png',typename:'系统下载'},
				{img:'assets/images/icon-server4.png',typename:'注册产品'},
				{img:'assets/images/icon-server5.png',typename:'查找手机'},
				{img:'assets/images/icon-server6.png',typename:'云服务'},
				{img:'assets/images/icon-server7.png',typename:'M码通道'},
			],
			footer:[
				{img:'assets/images/untitled1.png',use:'全场包邮'},
				{img:'assets/images/untitled2.png',use:'百城速达'},
				{img:'assets/images/untitled3.png',use:'7天无理由退货'},
				{img:'assets/images/untitled4.png',use:'15天换货保障'},
				{img:'assets/images/untitled5.png',use:'1年免费保修'},
				{img:'assets/images/untitled6.png',use:'2300+线下体验店'},
				{img:'assets/images/untitled7.png',use:'远程支持服务'},
				{img:'assets/images/untitled8.png',use:'上门快降'},
			]
			
		},


})
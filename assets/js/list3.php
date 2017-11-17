<?php
header("Access-Control-Allow-Origin: *");

$arr =[ 
		['id'=>"goods10",'img1'=>'<img class="active" src="assets/images/li10-big1.jpg"><img src="assets/images/li10-big2.jpg"><img src="assets/images/li10-big3.jpg"><img src="assets/images/li10-big4.jpg">','img2'=>'<dd class="active"><img src="assets/images/li10-small1.jpg"></dd><dd><img src="assets/images/li10-small2.jpg"></dd><dd><img src="assets/images/li10-small3.jpg"></dd><dd><img src="assets/images/li10-small4.jpg"></dd>','type'=>'乐基因 经典广口运动太空水杯 1000ml','use'=>'美国进口 耐高温 密封防漏','price'=>'<span>￥</span><span class="price">129</span>'],
		['id'=>"goods11",'img1'=>'<img class="active" src="assets/images/li11-big.jpg">','img2'=>'<dd class="active"><img src="assets/images/li11-small.jpg"></dd>','type'=>'飞科剃须刀FS339','use'=>'全身水洗 智能操作系统 三头浮动剃须','price'=>'<span>￥</span><span class="price">139</span>'],
		
		['id'=>"goods4",'img1'=>'<img class="active" src="assets/images/li4-big1.jpg"><img src="assets/images/li4-big2.jpg">','img2'=>'<dd class="active"><img src="assets/images/li4-small1.jpg"></dd><dd><img src="assets/images/li4-small2.jpg"></dd>','type'=>'魅族蓝牙自拍杆','use'=>'还给你自由的双手','price'=>'<span>限时特惠</span><span>￥</span><span class="price">69</span>'],
		['id'=>"goods1",'img1'=>'<img class="active" src="assets/images/li1-big1.jpg">','img2'=>'<dd class="active"><img src="assets/images/li1-small1.jpg"></dd>','type'=>'FUNIPICA 0.36x广角15x微距鱼眼镜头套装','use'=>'手机外置镜头 单反手机镜头 手机自拍镜头 通用型','price'=>'<span>￥</span><span class="price">119</span>'],
		['id'=>"goods3",'img1'=>'<img class="active" src="assets/images/li3-big.jpg">','img2'=>' <dd class="active"><img src="assets/images/li3-small.jpg"></dd>','type'=>'魅族熊猫磁吸出风口支架','use'=>'高度兼容 安稳放置','price'=>'<span>￥</span><span class="price">49</span>'],

		['id'=>"goods2",'img1'=>'<img class="active" src="assets/images/li2-big1.jpg"><img src="assets/images/li2-big2.jpg"><img src="assets/images/li2-big3.jpg">','img2'=>'<dd class="active"><img src="assets/images/li2-small1.jpg"></dd> <dd><img src="assets/images/li2-small2.jpg"></dd><dd><img src="assets/images/li2-small3.jpg"></dd>','type'=>'魅族缤纷 MINi自拍杆','use'=>'轻巧Mini 自在随心','price'=>'<span>限时特惠</span><span>￥</span><span class="price">39</span>'],
		
		['id'=>"goods5",'img1'=>'<img class="active" src="assets/images/li5-big1.jpg"><img src="assets/images/li5-big2.jpg">','img2'=>' <dd class="active"><img src="assets/images/li5-small1.jpg"></dd><dd><img src="assets/images/li5-small2.jpg"></dd>','type'=>'力博得MZ声波电动牙刷','use'=>'机身12度弯曲 深入口腔清洁 3档频率2支刷头','price'=>'<span>￥</span><span class="price">359</span>'],
		['id'=>"goods6",'img1'=>'<img class="active" src="assets/images/li6-big.jpg">','img2'=>'<dd class="active"><img src="assets/images/li6-small.jpg"></dd>','type'=>'力博得I2时光声波电动牙刷礼盒','use'=>'3档频率3支刷头 极简风格配旅行盒','price'=>'<span>￥</span><span class="price">399</span>'],
		['id'=>"goods7",'img1'=>'<img class="active" src="assets/images/li7-big1.jpg"><img src="assets/images/li7-big2.jpg">','img2'=>'<dd class="active"><img src="assets/images/li7-small1.jpg"></dd><dd><img src="assets/images/li7-small2.jpg"></dd>','type'=>'力博得I2极光声波电动牙刷','use'=>'3档频率 缓解牙敏感','price'=>'<span>￥</span><span class="price">299</span>'],
		['id'=>"goods8",'img1'=>'<img class="active" src="assets/images/li8-big1.jpg"><img src="assets/images/li8-big2.jpg">','img2'=>'<dd class="active"><img src="assets/images/li8-small1.jpg"></dd><dd><img src="assets/images/li8-small2.jpg"></dd>','type'=>'猎奇0.65X广角+鱼眼+微距手机镜头套装','use'=>'手机变单反 自拍秒变大长腿','price'=>'<span>￥</span><span class="price">69</span>'],
		['id'=>"goods9",'img1'=>'<img class="active" src="assets/images/li9-big1.jpg"><img src="assets/images/li9-big2.jpg"><img src="assets/images/li9-big3.jpg"><img src="assets/images/li9-big4.jpg">','img2'=>'<dd class="active"><img src="assets/images/li9-small1.jpg"></dd><dd><img src="assets/images/li9-small2.jpg"></dd><dd><img src="assets/images/li9-small3.jpg"></dd> <dd><img src="assets/images/li9-small4.jpg"></dd>','type'=>'多功能颈枕','use'=>'亲肤面料 携带方便','price'=>'<span>限时特惠</span><span>￥</span><span class="price">59</span>'],
		
		
		['id'=>"goods12",'img1'=>'<img class="active" src="assets/images/li12-big.jpg">','img2'=>'<dd class="active"><img src="assets/images/li12-small.jpg"></dd>','type'=>'Lena轻松打造9种发型护发卷发棒','use'=>'Lena轻松打造9种发型防烫卷直两用卷发棒','price'=>'<span>￥</span><span class="price">139</span>']
		
	];

 echo json_encode($arr);
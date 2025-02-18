
$(function(){
	
	let gallery_1 = new Swiper('.gallery_1',{
		slidesPerView: 1, //顯示張數
		spaceBetween: 0, //間距
		slidesPerGroup: 1, //一次翻幾張
		loop: true,
		navigation: { //上下頁
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {//分頁
			el: ".swiper-pagination", 
			clickable: true, //click可換圖
		}
	});
});



//置底選單  暫時不需用
// $(function(){

// 	let $fixedMenu = $("ul.fixed_menu");
// 	let iScrollPointGo = 300;

// 	$("ul.fixed_menu").hide();

// 	$(window).on("scroll",function(){
// 		if( $(window).scrollTop() > iScrollPointGo) {
// 			$fixedMenu.show();
// 		} else {
// 			$fixedMenu.hide();
// 		}
// 	});

// });

//btnBox goToTop
$(function(){
	var $btnBox = $(".btn_box");
	var $goToTop = $(".goToTop");
	var iScrollPointA = 0;  //滾回0位置
	var iScrollPointB = 750; //滾到位置 出現


	//滾動事件
	var oScrollTimer = null;
	$(window).on("scroll", function(){
		if(oScrollTimer){
			clearTimeout(oScrollTimer);
		}
		oScrollTimer = setTimeout(function(){
			if( $(window).scrollTop() > iScrollPointB) {
				$btnBox.show();
			} else {
				$btnBox.hide();
			}
		}, 50);
	});

	// 讓捲軸用動畫的方式移動到到指定id位罝
	$goToTop.on("click", function(){
		var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({scrollTop: iScrollPointA}, 50);
		return false;
	});

});


//copy優惠碼
$(function () {
    $(".copy-link").on("click", function () {
        let $temp = $("<input>");

        $("body").append($temp);
        $temp.val($(".copy-link span em ").text()).select();
        document.execCommand("copy");
        $temp.remove();

        alert(" 已複製你的專屬折價券前碼 ");
    });
});
	

//QA手風琴
$(function(){

	$(".qa_box > li").on("click", function(){

		$ans = $(this).children(".ans");//當下內文
		$otherAns = $(this).siblings().children(".ans");//其他內文
	
		//檢查當前點選是否已有顏色
		if( $(this).hasClass("active") ){
			$(this).removeClass("active");
			$(this).find("i").removeClass("open");
			$ans.slideUp(200);
		}else{
			//當前點選有顏色
			$(".qa_box > li").removeClass("active").filter(this).addClass("active");
			$("i").removeClass("open");
			$(this).find("i").addClass("open");
	
			//讓當下內文(第二層)打開
			$ans.slideDown(200);

			//讓所有非當前的內文收起來
			$otherAns.slideUp(200);
		}
	});
	
	$(".qa_box .ans").slideUp(0);
});


//GA4 trackevent 
$(function(){
	//點擊登入會員按鈕
    $("ul.login_box li a.login").click(function(){
        gtag('event', '登入會員按鈕', {
          '點擊內容': $(this).text(),
          'send_to': 'G-DXSWN93CJQ'	
        });      
    });	
	
    //點擊優惠折扣碼按鈕
    $("ul.login_box li .copy-link").click(function(){
        gtag('event', '領取折扣碼按鈕', {
          '點擊內容': $(this).text(),
          'send_to': 'G-DXSWN93CJQ'	
        });      
    });	
	
	//我要下單
    $("ul.login_box li:nth-of-type(2) a").click(function(){
        gtag('event', '我要下單按鈕', {
          '點擊內容': $(this).text(),
          'send_to': 'G-DXSWN93CJQ'	
        });      
    });	
	
	//立即點擊完成購買
    $("a.btn_buy").click(function(){
        gtag('event', '立即點擊完成購買按鈕', {
          '點擊內容': $(this).text(),
          'send_to': 'G-DXSWN93CJQ'	
        });      
    });	
	
	//側欄吸住領取專屬折扣碼
    $("a.menu_anchor").click(function(){
        gtag('event', '側欄吸住領取專屬折扣碼', {
          '點擊內容': $(this).text(),
          'send_to': 'G-DXSWN93CJQ'	
        });      
    });	
	
	//連結追蹤
    $(".section .list_1 .piece .pic a img").click(function(){
		var sImgText = $(this).attr('alt');
        gtag('event', '連結追蹤', {
          '點擊內容': `${sImgText}`,
          'send_to': 'G-DXSWN93CJQ'	
        });      
    });	
});




$(document).ready(function(){
	// $("#header").load("/common/header.html");
	// $("#footer").load("/common/footer.html");
	$(window).load(function(){$("body").addClass("on");})

	// $("img.lazyload").lazyload({effect: "fadeIn"});

	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
		new WOW().init();
	};

	//选项卡
	$('.tabs .tabsTitle li').click(function(){
		var linum = $(this).index()
		var pars = $(this).parents('.tabsTitle').siblings('.tabsCon')
		$(this).addClass('cur').siblings().removeClass('cur')
		pars.find('.tabsItem').eq(linum).fadeIn(100).siblings().hide()
	})

	//首页轮播大图
	var swiperA = new Swiper('.indexBanner-swiper', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		effect: 'fade',
		speed: 600,
		autoplay: {
			delay: 5000,
		},
		loop:true,
	});


	$(".serviceWd-box a").click(function(){
		console.log($(this))
		console.log($(this).find(".text").text())
		console.log($(this).find(".answer").text())

		layer.open({
			title: $(this).find(".text").text()
			,content: $(this).find(".answer").text()
		});
	})

	$(".rm-headBtns.rm-headBtns-language").hover(function(){
		$(this).find(".second").slideDown("fast")
	},function(){
		$(this).find(".second").slideUp("fast")
	})

})

function popupShow(obj,rel){
	var x = $(obj).data("video")
    var name = $(obj).data("name")
	$(rel).find("video").attr("src",x)
	$(".video-name").text(name)
	var par = $(rel).parents('.popup')
	$(rel).fadeIn(100)
	par.fadeIn(100)
}

function popupHide(obj){
	var parPage = $(obj).parents('.popupPage')
	parPage.fadeOut(100)
	$('.popup').fadeOut(100)
}


// 移动导航
$('.menu').click(function() {
  console.log('dianjile')
  let spans = $(this).children('span')
  if (spans.eq(1).css('display') === 'none') {
    spans.eq(1).show()
    spans.eq(0).css('transform', 'rotateZ(0)').css('top', '0')
    spans.eq(2).css('transform', 'rotateZ(0)').css('top', '0')
    $('.menu_info').css('transform', 'translateX(-100%)')
    $('.menu_info_bg').hide()
  } else {
    spans.eq(1).hide()
    spans.eq(0).css('transform', 'rotateZ(45deg)').css('top', '7px')
    spans.eq(2).css('transform', 'rotateZ(-45deg)').css('top', '4px')
    $('.menu_info').css('transform', 'translateX(0)')
    $('.menu_info_bg').show()
  }
})
$('.menu_info_bg').on('click', function() {
  let spans = $('.menu').children('span')
  spans.eq(1).show()
  spans.eq(0).css('transform', 'rotateZ(0)').css('top', '0')
  spans.eq(2).css('transform', 'rotateZ(0)').css('top', '0')
  $('.menu_info').css('transform', 'translateX(-100%)')
  $('.menu_info_bg').hide()
})

window.sr = ScrollReveal()

sr.reveal('.public_tit p', {
  distance: '200px',
  origin: 'right',
  duration: 500,
  delay: 500,
  easing: 'cubic-bezier(0.24, 1.02, 0.57, 1.26)',
})
sr.reveal('.public_tit span', {
  distance: '200px',
  origin: 'right',
  duration: 600,
  delay: 600,
  easing: 'cubic-bezier(0.24, 1.02, 0.57, 1.26)',
})

// 导航移动变色
$(document).scroll(function() {
  // 获取到元素的位置 
  var h1 = $(window).scrollTop() - $('.banner').offset().top
  if (($('.banner').height() - h1) <  90) {
    $('.pc_nav').addClass('sliding')
    
  } else {
    $('.pc_nav').removeClass('sliding')
  }
})

// 判断网址的协议 如果是http就跳转到https
if (document.location.protocol === 'http:') {
  var tempUrl = document.location.href.replace('http:', 'https:')
  document.location.href = tempUrl
}

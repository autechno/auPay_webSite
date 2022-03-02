// 当前选中 币种      // 当前选中 币种文字
var coinCur = null, coinTxt = null, realityMoney = null;
$('#depositMoney').html(depositMoney)
// 获取充值渠道
$(function() {
  $.mobile.loading('show', {
    html: "<div class='loading_w'><div class='loading'><span></span><span></span><span></span><span></span><span></span><p class='loading_p'>拼命加载中<br/>请勿关闭当前页面...</p></div></div>"
  })
  $.when(getPayChannel()).done(function(data) {
    $.mobile.loading('hide')
  })
})

function getPayChannel() {
}

// 点击某一个币种
$(document).on('click', '.coin_i', function() {
  $(this).addClass('cur').siblings().removeClass('cur')
  coinCur = $(this).attr('data-rate')
  coinTxt = $(this).text()
  realityMoney = (Number(depositMoney) / Number(coinCur)).toFixed(4)
  $('#payNum').html(realityMoney)
  $('.form_i').eq(1).children('.error_prompt').css('display', 'none')
})
// 下一步
$('.nextStep').click(function() {
  if (!$('#depositMoney').html()) return $('.form_i').eq(0).children('.error_prompt').css('display', 'block')
  if (!coinCur) return $('.form_i').eq(1).children('.error_prompt').css('display', 'block')
  if (!$('#payNum').html()) return $('.form_i').eq(3).children('.error_prompt').css('display', 'block')
  let storageData = {
    coinTxt: coinTxt,
    coinCur: coinCur,
    realityMoney: realityMoney,
  }
  delCookie('experienceAupay')
  setCookie('experienceAupay', JSON.stringify(storageData))
  location.href = "/experience/two.html"  
})

// 删除cookie
function delCookie(name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval !== null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()
}
// 读取cookie
function getCookie(name) {
  var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
  if (arr = document.cookie.match(reg)) return unescape(arr[2])
  else return null
}
// 设置cookie
function setCookie(name, value) {
  var min = 30
  var exp = new Date();
  exp.setTime(exp.getTime() + min * 60 * 1000)
  // exp.setTime(exp.getTime() + 10000)
  document.cookie = name + "=" + escape (value) + ";expires=" + exp.toGMTString()
}
// 判断是否为JSON
function isJSON(str) {
  if (typeof str == 'string') {
    try {
      JSON.parse(str);
      return true;
    } catch(e) {
      console.log(e);
      return false;
    }
  }
}
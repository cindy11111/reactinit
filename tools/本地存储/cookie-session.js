 // 添加本地存储 cookie


var exp = new Date();
//延迟30天失效
exp.setTime(exp.getTime() + 30*24*60*60*1000*1);
exp.toUTCString()
document.cookie = 'name=abc;domain=happymmall.com;path=/index.html;expires='+exp;

// 修改cookie
document.cookie = 'name=abc;domain=happymmall.com;path=/index.html;expires='+exp;

// 删除cookie
document.cookie = 'name=abc;domain=happymmall.com;path=/index.html;expires='+0;


// 正式代码




//写cookies
function setCookie(name,value)
{
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
 setCookie('name', 'aab')

// 读取cookies
function getCookie(name)
{
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
	return unescape(arr[2]);
	else
	return null;
}
// 调用
getCookie('name')


// 删除cookies
function delCookie(name)
{
var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null)
	document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

delCookie('name')


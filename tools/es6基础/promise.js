//Promise结构

new Promise((resolve, reject) => {
	$.ajax({
		url: 'http://happymmall.com/user/get_user_info.do',
		type: 'post',
		success(res) {
			resolve(res)
		},
		error(err) {
			reject(err)
		}
	})

}).then((res) => {
	console.log('success', res)
}, (err) => {
	console.log('error', err)
});

//链式Promise

var promisefn1 = new Promise((resolve, reject) => {
	$.ajax({
		url: "http://happymmall.com/user/get_user_info.do",
		type: "post",
		success(res) {
			resolve(res);
		},
		error(err) {
			reject(err);
		}
	})
});

var promisefn2 = new Promise((resolve, reject) => {
	$.ajax({
		url: "http://happymmall.com/cart/get_cart_product_count.do",
		type: "post",
		success(res) {
			resolve(res);
		},
		error(err) {
			reject(err);
		}
	})
});

promisefn1.then((res) => {
	console.log('promisefn1:success' ,res)
	return promisefn2;
},(err) => {
	console.log('promisefn1:error' ,err)
}).then((res) => {
	console.log('promisefn2:success', res)
},(err) => {
	console.log('promisefn2:error' ,err)
})


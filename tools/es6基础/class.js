// class  constructor

class Animal{
	constructor() {
		this.name = 'animal'
	}
	getName() {
		return this.name
	}
}

let animal = new Animal();
console.log(animal.getName())

//类的继承
class Cat extends Animal {
	constructor() {
		super()
		this.name = 'cat'
	}
}
let cat = new Cat();
console.log(cat.getName())


//对象的用法

var name = 'name',
		age = 18;
var obj = {
	name: name,
	age: age,
	getname: function() {
		return this.name
	},
	getage: function() {
		return this.age
	}
}
console.log('getname',obj.getname())
console.log('getage',obj.getage())

//对象新写法
let name = 'name',
		age = 18;

let obj = {
	//变量名可以直接用作对象的属性名称
	name,
	age,
	//对象里的方法可以简写
	getname() {
		return this.name;
	},
	//表达式作为属性名或方法
	['get' + 'age']() {
		return this.age
	}
}
console.log('getname',obj.getname())
console.log('getage',obj.getage())

//object 对象的拓展
Object.keys(obj)

Object.assign({a:1},{b:2, a:2},{c:3})


function typeOf(obj) {
    const type = Object.prototype.toString.call(obj);
    console.log(obj._proto_);
}

//原型链的继承
function Aniaml() {
    this.colors = ['black', 'white']
}

Aniaml.prototype.getColor = () => {
    return this.colors;
}

function Dog() { }
Dog.prototype = new Aniaml();

let dog = new Dog();
//原型中包含的引用类型将被所有实例共享
//子类在实例化时不能给父类构造函数传参

dog.colors.push('brown') 

let dog1 = new Dog();
console.log(dog1);


//console.log([] instanceof Array); //判断左边的对象是不是右边的实例
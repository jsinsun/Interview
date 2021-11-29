
/*定义一个人类*/
function Person(name, age) {
    this.name = name;
    this.age = age;
}
/*定义一个学生类*/
function Student(name, age, grade) {
    Person.apply(this, arguments);
    this.grade = grade;
}
//创建一个学生类  
var student = new Student("zhangsan", 21, "一年级");
//测试  
//alert("name:" + student.name + "\n" + "age:" + student.age + "\n" + "grade:" + student.grade);


var arr = [1, 2, 3, 4];
var arr1 = [5, 6, 7, 8];

//var newarrr = arr.concat(arr1);

Array.prototype.push.apply(arr, arr1);

console.log(arr);

alert(Math.max.apply(null, arr));
//https://www.cnblogs.com/chenhuichao/p/8493095.html


var promise = new Promise((resolve, reject) => {
    resolve('fulfilled');
})


const promise1 = new Promise((resolve, reject) => {
    resolve('fulfilled');
})

const promise2 = new Promise((resolve, reject) => {
    resolve('fulfilled');
})

const promise3 = new Promise((resolve, reject) => {
    reject('rejected3');
})

Promise.all([promise, promise1, promise2, promise3]).then(res => {
    console.log(res)
}).catch(error => {
    console.log(error)
})


promise.then(res => promise1.then(res1 => {
    console.log(res1)
}));

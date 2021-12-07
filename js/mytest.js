
//Promise
// var promise = new Promise((resolve, reject) => {
//     resolve('fulfilled');
// })


// const promise1 = new Promise((resolve, reject) => {
//     resolve('fulfilled');
// })

// const promise2 = new Promise((resolve, reject) => {
//     resolve('fulfilled');
// })

// const promise3 = new Promise((resolve, reject) => {
//     reject('rejected3');
// })

// Promise.all([apromise, promise1, promise2, promise3]).then(res => {
//     console.log(res)
// }).catch(error => {
//     console.log(error)
// })


// promise.then(res => promise1.then(res1 => {
//     console.log(res1)
// }));

//call
function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

//call()方法改变了this的指向，使得sub可以调用add的方法
console.log(add.call(sub, 2, 1));//3


function person(name, age) {
    this.name = name;
    this.age = age;
}

function student(name, age, grade) {
    person.call(this, name, age);
    this.grade = grade;
}



const stu = new student('jsin', 27, '男');
console.log(stu);

//apply
var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }

 var res=person.fullName.apply(person1, ["Oslo", "Norway"]);
 console.log(res);
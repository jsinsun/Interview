//Promise
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

Promise.all([apromise, promise1, promise2, promise3]).then(res => {
    console.log(res)
}).catch(error => {
    console.log(error)
})


promise.then(res => promise1.then(res1 => {
    console.log(res1)
}));
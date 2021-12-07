//Promise
const promise = new Promise((resolve, reject) => {
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



new Promise((resolve, reject) => {
    resolve(1)
}).then(value => {
    console.log('onResolved1', value)
    return new Promise((resolve, reject) => {
        reject('新的promise');
    })
}, reason => {
    console.log('onRejected1', reason)

}).then(value => { //状态由上一次的回调结果决定
    console.log('onResolved2', value)
}, reason => {
    // return undefined
    console.log('onRejected2', reason)
})

// Lesson1: Promise executes synchronously, promise.then executes asynchronously
const prom = new Promise((res, rej) => {
    console.log('1');
    res();
    console.log('2');
});
prom.then(() =>{
    console.log('4');
})
console.log('3');

//Output:
//1
//2
//3
//4
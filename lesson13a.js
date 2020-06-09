//Lesson13: Difference between Promises and Async-await

const tick = Date.now();
const logWithTime = (v) => console.log(`${v} - Elapsed: ${Date.now() - tick}ms`);

console.log('1');
const getFruit = (name) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    }
    return Promise.resolve(fruits[name]);
}
getFruit('peach').then(result => console.log('3', result));
console.log('2');


//chaining multiple promises one after the other
//We see that the things are starting to get messier
const makeSmothie = () => {
    let first;
    //first get the pipeapple and then get the strawberry
    return getFruit('pineapple')
            .then (pa => {
                first = pa;
                return getFruit('strawberry')
            })
            .then(sb => [first, sb]);

}
makeSmothie().then(result => console.log('Smothie contains: ', result));



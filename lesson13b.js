const tick = Date.now();
const logWithTime = (v) => console.log(`${v} - Elapsed: ${Date.now() - tick}ms`);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//async keyword wraps the return object into a Promise
const getFruitAsync = async (name) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    }
    await sleep(1000);
    return fruits[name];
}
const makeSmoothieAsync = async() => {
    const pa = await getFruitAsync('pineapple'); //first pineapple is fetched
    const sb = await getFruitAsync('strawberry'); //secondly, strawberry is fetched
    return [pa, sb]; //total delay = 2000ms
}

makeSmoothieAsync().then(result => logWithTime(["MakeSmothieAsync", result]));

//-----------------------
//Running multiple async function in parallel using Promise.all
const makeSmoothieAsyncFast =  async() => {
    const pa = getFruitAsync('pineapple'); //pineapple and strawberry fetch in parallel
    const sb = getFruitAsync('strawberry'); 
    return Promise.all([pa, sb]); //total delay = 1000ms
}
makeSmoothieAsyncFast().then(result => logWithTime(["MakeSmothieAsyncFast", result]));

//------------------------
//Error handling in Async-Await
const badSmothie = async() => {
    try {
        const pa = getFruitAsync('pineapple'); //first pineapple is fetched
        const sb = getFruitAsync('strawberry'); //secondly, strawberry is fetched
        const smoothie = await Promise.all([pa, sb]);
        
        throw 'broken!'
        return smoothie;
    } catch(err) {
        console.log("Error caught inside smoothie function", err);
        throw 'One of the async function resulted in error';
    }
}
badSmothie()
    .then(result => console.log(result))
    .catch(err => console.error("Error from BadSmoothie: ", err));
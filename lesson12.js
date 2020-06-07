const tick = Date.now();
const log = (v) => console.log(`${v} - Elapsed: ${Date.now() - tick}ms`);

const codeBlocker = () => {
    console.log("executing codeblocker...");
   
    // Blocking
    // let i = 0;
    // while(i < 1000000000) { i++;}

    // return 'billion loops done';


    // Async blocking, because new Promise creation and while-loop is still happening in the main thread.

    // return new Promise((resolve, reject) => {

    //     let i = 0;
    //     while(i < 1000000000) { i++;}
 
    //     resolve('billion loops done');
    // })


    // Non-blocking

    return Promise.resolve().then(v =>  {
        let i = 0;
        while(i < 1000000000) { i++; }
        return 'billion loops done';
    })

}

log('Synchronous 1');


//log(codeBlocker());
codeBlocker().then(log)


log('Synchronous 2');
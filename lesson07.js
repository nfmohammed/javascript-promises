//Lesson7: Returning an error object in .then or .catch does not throw an error, so it will not be caught by subsequent .catch, you need to change to one of them:

Promise.resolve()
  .then(() => {
    //return new Error('error');  //this is incorrect
    throw new Error('error'); //this is correct 
    //return Promise.reject(new Error('error')) //this is also correct
  })
  .then(res => {
    console.log('then: ', res);
  })
  .catch(err => {
    console.log('catch: ', err);
  });

// then: Error: error!
// at Promise.resolve.then (...)
// at ...
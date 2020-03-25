//Lesson3: The resolve or reject only execute once even there is a resolve call after the reject. 

const prom = new Promise((res, rej) => {
    res('1');
    rej('error');
    res('2');
  });
  
  prom
    .then(res => {
      console.log('then: ', res);
    })
    .catch(err => {
      console.log('catch: ', err);
    });
  
//output:   
// then: 1
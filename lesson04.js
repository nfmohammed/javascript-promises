//Lesson4: Promises can be chained.
//When referring to chained calls, we usually think of returning this, but Promises do not.
//Each time a promise calls .then or .catch, a new promise will be returned, thus implementing chained calls.

Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });

//Output:
// 1
// 2
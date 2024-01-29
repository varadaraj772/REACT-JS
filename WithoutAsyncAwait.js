function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "varada", age: 21 }), reject("Error has been occured");
    }, 5000);
  });
}

function main() {
  console.log("data is loading");
  let data = getData(); //this will return a promise that the data will be availabe in 5 seconds and continues execution of next lines
  console.log(" your data is " + JSON.stringify(data));
  console.log("data is ready to process");
}
main();
/* The getData function returns a Promise that resolves after a delay of 5000 milliseconds (5 seconds). When you call getData() and try to log the result immediately, you are not waiting for the promise to be resolved. 
console.log(" your data is " + JSON.stringify(data)); line is executed before the promise has resolved, and at that point, the data variable is still a pending promise, not the actual data*/

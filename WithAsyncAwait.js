function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "varada", age: 21 }), reject("Error has been occured");
    }, 5000);
  });
}

async function main() {
  try {
    console.log("data is loading");
    let data = await getData(); //next lines will not execute untill the data is fetched after the data is fetched the below lines will be executed (after 5 seconds)
    console.log(" your data is " + JSON.stringify(data));
    console.log("data is ready to process");
  } catch (error) {
    console.log(error);
  }
}
main();

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
}

let storeIsOpen = true;

function time(ms) {

  return new Promise((resolve, reject) => {
    if(storeIsOpen)
    {
      setTimeout(resolve,ms);
    }
    else
    {
      reject(console.log("We are Closed"))
    }
  })
}

async function kitchen() {
 try {
  await time(2000);
  console.log(`You Selected ${stocks.Fruits[0]}`);

  await time(0);
  console.log(`Production has Started`);

  await time(2000);
  console.log(`Cutting the Fruit`);

  await time(1000);
  console.log(`Added the ${stocks.liquid[0]} and ${stocks.liquid[1]}`);

  await time(1000);
  console.log(`Started the machine`);

  await time(2000);
  console.log(`Put Ice Cream in ${stocks.holder[0]}`);

  await time(3000);
  console.log(`Added ${stocks.toppings[0]}s to it`);

  await time(2000);
  console.log(`Here's your Ice Cream`)
 }
 catch(error) {
  console.log(`No Customers in Store`);
 }

 finally {
  console.log(`Have a Great Day`);
 }
}

kitchen();

// order = (time,work) => {

//   return new Promise((resolve, reject) => {

//     if(storeIsOpen)
//   {
//     setTimeout(() => {
//       resolve(work());
//     },time)
//   }

//   else {
//     reject(console.log("We are Closed"));
//   }


//   })
// }

// order(2000, () => console.log(`You Selected ${stocks.Fruits[0]}`))

// .then(() => {
//   return order(0, () => console.log(`Production has Started`));
// })
// .then(() => {
//   return order(2000, () => console.log(`Cutting the Fruit`));
// })
// .then(() => {
//   return order(1000, () => console.log(`Added the ${stocks.liquid[0]} and ${stocks.liquid[1]}`));
// })
// .then(() => {
//   return order(1000, () => console.log(`Started the machine`));
// })
// .then(() => {
//   return order(2000, () => console.log(`Put Ice Cream in ${stocks.holder[0]}`));
// })
// .then(() => {
//   return order(3000, () => console.log(`Added ${stocks.toppings[0]}s to it`));
// })
// .then(() => {
//   return order(2000, () => console.log(`Here's your Ice Cream`));
// })
// .catch(() => {
//   console.log(`No Customers in Store`);
// })
// .finally(() => {
//   console.log(`Have a Great Day`);
// })
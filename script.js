// prompt the user for favorite froyo flavors
const userInputString = prompt(
  "Enter a list of comma-separated froyo flavors.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
// split user input into an array of strings
const stringArray = userInputString.split(",");
console.log(stringArray);
// object outside of loop
// loop through array and check if key exists using 'in' operator
// if key does not exist, create key and set value to 1
// if key does exist, increase value by 1
function getOrder() {
  const flavorsObj = {};
  for (let i = 0; i < stringArray.length; i++) {
    let flavName = stringArray[i];
    if (flavorsObj[flavName]) {
      flavorsObj[flavName]++; // value of key increased
    } else {
      flavorsObj[flavName] = 1; //key created
    }
  }
  return flavorsObj;
}
console.table(getOrder());

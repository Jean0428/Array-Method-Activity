// Implementing .concat()
let arr1 = ["cecile","Lone"];
let arr2 = ["Emil","Tobias","Linus"];
arr3join = arr1.concat(arr2);
console.log(arr3join);

//Implementing .push()
let fruits = ["Banana","Orange","Apple","Mango"];
fruits.push("Kiwi");
console.log(fruits);

// Implementing .unshift()
let array1 = [1,2,3];
array1.unshift(4,5);
console.log(array1);

// Implementing .pop()
fruits.pop();
console.log(fruits);

//Implementing .shift()
array1.shift();
console.log(array1);

//Implementing .sort()
fruits.sort();
console.log(fruits);

//Implementing .slice()
sliceFruits = fruits.slice(1,3);
console.log(sliceFruits);

//Implementing .splice() to insert and remove
let month = ["January","September","October","November"];
month.splice(2,1,"December","May");
console.log(month);
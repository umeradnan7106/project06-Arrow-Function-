"use strict";
// ARROW FUNCTION 
// First method
let halfFryEgg = () => 1 + 1.5 + 3;
let response = halfFryEgg();
console.log(response);
// second method
let halfFryegg = (egg, buttur, salt) => (egg + buttur + salt);
let response1 = halfFryegg(1, 5, 6);
console.log(response1);
// Third method
let halffryEgg = () => {
    return 1.5 + 2 + 3.5;
};
let response2 = halffryEgg();
console.log(response2);
// Forth method
let HalfFryEgg = () => {
    let cocked = 1 + 2 + 3;
    return cocked;
};
let response3 = HalfFryEgg();
console.log(response3);
// Fifth method
let FullFryEgg = (egg, buttur, salt) => {
    let cock = egg + buttur + salt;
    return cock;
};
let response5 = halfFryegg(1, 5, 6);
console.log(response5);

"use strict";
//primitive data type ---> number, string, boolean, undefined, null
Object.defineProperty(exports, "__esModule", { value: true });
let a;
// console.log(a)
a = 10;
console.log(a);
function isAllowedToVote(age) {
    if (age < 18) {
        return false;
    }
    return true;
}
let result = isAllowedToVote(10);
console.log(result);
//# sourceMappingURL=script.js.map
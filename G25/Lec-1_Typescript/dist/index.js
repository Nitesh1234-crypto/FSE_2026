"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAllowedToVote(age) {
    if (age < 18) {
        return false;
    }
    return true;
}
let result = isAllowedToVote(18);
console.log(result);
//# sourceMappingURL=index.js.map
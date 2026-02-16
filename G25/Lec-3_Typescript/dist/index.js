"use strict";
//type anyvar = (number | string | boolean)[];
//number[] | string[] | boolean[]
Object.defineProperty(exports, "__esModule", { value: true });
function firstValue(arg) {
    return arg[0];
}
let res1 = firstValue([]);
let res2 = firstValue(["a", "cd", "b"]);
let res3 = firstValue([true, false, false]);
// let res4 = firstValue([1,"b",true]);
//res2=="a";
// res1?.toString();
// res2.toUpperCase();
// res2?.toString();
//union and intersaction , information about type lost--> union does not preserved type
function firstValueGeneric(arg) {
    return arg[0];
}
let out1 = firstValueGeneric(["a", "bd", "c"]);
out1?.toUpperCase();
//# sourceMappingURL=index.js.map
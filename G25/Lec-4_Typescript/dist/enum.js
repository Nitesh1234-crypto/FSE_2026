"use strict";
//enum ---> set of constant value;
Object.defineProperty(exports, "__esModule", { value: true });
function addProduct(role) {
    if (role === "user") {
        return "not authorize";
    }
    //logic to add product
    return "product added";
}
addProduct("admin");
addProduct("user");
// addProduct("asdfgh");
//enum
var UserRole;
(function (UserRole) {
    UserRole[UserRole["user"] = 1] = "user";
    UserRole[UserRole["admin"] = 2] = "admin";
})(UserRole || (UserRole = {}));
console.log(UserRole.user);
console.log(UserRole.admin);
//# sourceMappingURL=enum.js.map
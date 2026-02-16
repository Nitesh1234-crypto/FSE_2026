"use strict";
//what is enum --> set of constant values
Object.defineProperty(exports, "__esModule", { value: true });
function addBlog(role, blog) {
    if (role === "user") {
        return "not authorized";
    }
    //code to add blog
    return "blog is added";
}
addBlog("user", { title: "first blog", body: "asdfgdsa", imageURL: "sdfgds" });
addBlog("admin", { title: "first blog", body: "asdfgdsa", imageURL: "sdfgds" });
// addBlog("sadfgdsa",{title:"first blog",body:"asdfgdsa",imageURL:"sdfgds"})
var Role2;
(function (Role2) {
    Role2[Role2["user"] = 0] = "user";
    Role2[Role2["admin"] = 1] = "admin";
})(Role2 || (Role2 = {}));
console.log(Role2.user);
console.log(Role2.admin);
//# sourceMappingURL=enum.js.map
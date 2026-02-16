//what is enum --> set of constant values

//personal blogging website;
type Role="user" | "admin"
interface Blog{
    title:string,
    body:string,
    imageURL:string
}
function addBlog(role:Role,blog:Blog):string{
    if(role==="user"){
        return "not authorized"
    }
    //code to add blog
    return "blog is added"

}
addBlog("user",{title:"first blog",body:"asdfgdsa",imageURL:"sdfgds"})
addBlog("admin",{title:"first blog",body:"asdfgdsa",imageURL:"sdfgds"})
// addBlog("sadfgdsa",{title:"first blog",body:"asdfgdsa",imageURL:"sdfgds"})

enum Role2{
    user="user",
    admin="admin"
}
console.log(Role2.user);  // -->10
console.log(Role2.admin)//1 --->11 --->20
//default enum value start with 0 and increase by one afterwards
function addBlog2(role:Role2,blog:Blog):string{
    if(role==="user"){
        return "not authorized"
    }
    //code to add blog
    return "blog is added"

}
addBlog2(Role2.admin,{title:"first blog",body:"asdfgdsa",imageURL:"sdfgds"})
addBlog2(Role2.user,{title:"first blog",body:"asdfgdsa",imageURL:"sdfgds"})
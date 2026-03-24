import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"
let books=[
{title:"Fse by Nitesh"},
{title:"adi by ritik"},
{title:"physics by Nitesh"}
]
let authors=[
{name:"Nitesh"},
{name:"Ritik kumar"},
{name:"Pratiyush"}
]
const typeDefs = `
type Book{
 title:String
}
 type Author{
 name:String
 }
 union searchResult :Book | Author

 type query{
    search(input:String):[searchResult]
 }
`
const resolvers={
    Query:{
        search:(parent,args)=>{
            let {input} = args;
            //input == "Ritik kumar"
            //map or filter map==[let books=[
// {title:"Fse by Nitesh"},
// {title:"adi by ritik"},
// {title:"physics by Nitesh"}
// ]]===> [undefinde, _,undefinde, undefine]
            let searchBooks = books.filter((book)=>book.title.includes(input));
            let searchAuthor = authors.filter((author)=>author.name.includes(input));

            return [...searchAuthor,...searchBooks] //[[{},{}],[{},{}]]==>[{},{},{},{}]

        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers
})
 await startStandaloneServer(server,{
    listen:{port:5555}
 })
 console.log("server started")
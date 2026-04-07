import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from "@apollo/server/standalone";
const books=[
    {title:"chemistry by Nitesh"},
    {title:"Maths by Ritik kumar"},
    {title:"Physics by Pratiyush"},

]
const authors=[
    {
        name:"Nitesh"
    },
     {
        name:"Ritik kumar"
    },
     {
        name:"Pratiyush"
    },
     {
        name:"Abhishek"
    },

]
const typeDefs=`
   union searchResult = Book | Author
    type Book {
        title: String!
    }
    type Author {
        name: String!
    }
  type Query{
   search(contains: String): [searchResult]
  }
`
const resolvers={
    searchResult:{
        __resolveType(obj, contextValue, info){
      // Only Author has a name field
      if(obj.name){
        return 'Author';
      }
      // Only Book has a title field
      if(obj.title){
        return 'Book';
      }
      return null; // GraphQLError is thrown
    },

    },
    Query:{
        search:(parent,args,context,info)=>{
            let {contains} = args;
            let searchBooks = books.filter((book)=>book.title.includes(contains));
            //[  {title:"Maths by Ritik kumar"},]
            let searchAuthor= authors.filter((author)=>author.name.includes(contains));
            //[{ name:"Ritik kumar"}]
            return [...searchAuthor,...searchBooks] 
            //[[  {title:"Maths by Ritik kumar"}],[{ name:"Ritik kumar"}]]
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers
})
await startStandaloneServer(server,{
    listen:{port:3333}
})
console.log("server started");
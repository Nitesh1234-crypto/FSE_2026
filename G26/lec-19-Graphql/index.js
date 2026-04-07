import {ApolloServer} from "@apollo/server"
import {startStandaloneServer} from "@apollo/server/standalone"

const books=[
   {title:"physics by Nitesh"},
   {title:"Maths by veer"},
   {title:"chemistry by seerat"},
   {
    title:"biology by pratham"
   }
]
const authors=[
    {name:"veer pratap singh"},
    {
        name:"Nitesh"
    },
    {name:"seerat"},
    {name :"pratham jindal"}

]


const typeDefs=`
union SearchResult = Book | Author

type Book {
  title: String!
}

type Author {
  name: String!
}

type Query {
  search(contains: String): [SearchResult]
}
`
const resolvers = {
   
    SearchResult: {
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
        search:(parent,args,context)=>{
            //write logic to return book or author which includes contains
            let {contains} = args;
            let searchBooks = books.filter((book)=>book.title.includes(contains));
            let searchAuthor = authors.filter((author)=>author.name.includes(contains));
            return [...searchBooks,...searchAuthor]  //[[{},{}],[{},{}]]==>[{},{},{},{}];


        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})
await startStandaloneServer(server,{
    listen:{port:4444}
})
console.log("server started")
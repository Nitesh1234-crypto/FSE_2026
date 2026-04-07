import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
let users = [
    {
        name:"Nitesh",
        email:"nitesh@gmail.com",
        password:"1234",
        phone: 889888
    },
    {
         name:"ritik",
        email:"ritik@gmail.com",
        password:"1234",
        phone: 889888
    },
    {
         name:"pratiyush",
        email:"pratiyush@gmail.com",
        password:"1234",
        phone: 889888
    }
]
const typeDefs = `
    type User{
        name:String,
        email:String,
        password:String,
        phone : Int
    }
    
    type Query{
        getUsers: [User],
        getUser :User
    }

`

const resolvers ={
    Query:{
        getUsers:()=>{
            //db caLL
            return users;
        },
        getUser:()=>{
            return users[0];
        }
    }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
await startStandaloneServer(server, {
  listen: { port: 4001 },
});

console.log("server started")
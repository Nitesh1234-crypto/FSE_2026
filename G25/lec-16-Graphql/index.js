import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
let users=[
    {
        name:"Nitesh",
        email:"nitesh@gmail.com",
        phone:999
    },
      {
        name:"Ritik",
        email:"ritik@gmail.com",
        phone:99999
    },
      {
        name:"shubham",
        email:"jskjdsfks@gmail.com",
        phone:8888
    },
      {
        name:"sarabjot",
        email:"sarabjot@gmail.com",
        phone:777777
    }
]
const typeDef=`
    type User{
        name:String,
        email:String,
        phone:Int
    }
    type Query{
        Users:[User],
        User:User
    }

`
const resolver={
    Query:{
        Users:()=> {
            //db call <====users[]
            return users;
        },
        User:()=>{
            return users[0]
        }
    }
}
const server = new ApolloServer({
  typeDefs:typeDef,
  resolvers:resolver,
});
await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log("server started")
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
let users=[
    {
        id:"1",
        name:"Nitesh",
        email:"nitesh@gmail.com",
        phone:999
    },
      {
        id:"2",
        name:"Ritik",
        email:"ritik@gmail.com",
        phone:99999
    },
      {
         id:"3",
        name:"shubham",
        email:"jskjdsfks@gmail.com",
        phone:8888
    },
      {
         id:"4",
        name:"sarabjot",
        email:"sarabjot@gmail.com",
        phone:777777
    }
]
const typeDef=`
    type User{
        id:ID!,
        name:String,
        email:String,
        phone:Int
    }
    type Query{
        Users:[User],
        User(id:ID!):User
    }
    type Mutation{
        addUser(id:ID!,name:String,email:String,phone:Int):User
    }

`
const resolver={
    Query:{
        Users:()=> {
            //db call <====users[]
            return users;
        },
        //resolve function has 4 arguments(optional)
        //parent,args,context,info
        //args-->props-->{name:"Nitesh",id:"1"}
        User:(_,args)=>{
            return users.find((u)=>u.id==args.id)
        }
    },
    Mutation:{
        addUser:(_,args)=>{
            let {id,name,email,phone} = args;
            users.push({id,name,email,phone});
            return users[users.length-1];

        }
    }
}
const server = new ApolloServer({
  typeDefs:typeDef,
  resolvers:resolver,
});
await startStandaloneServer(server, {
  listen: { port: 4003 },
});
console.log("server started")
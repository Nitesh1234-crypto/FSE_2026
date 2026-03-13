import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
let users =[
    {
        id:"1",
        name:"Nitesh",
        email:"nitesh@gmail.com",
        phone:99999
    },
     {
        id:"2",
        name:"Ritik",
        email:"ritik@gmail.com",
        phone:99999
    },
     {
        id:"3",
        name:"pratiyush",
        email:"pratiyush@gmail.com",
        phone:99999
    }
]
const typeDefs=`
    #User  ==> comment

    type User{
        id:ID!,  #ID serialized into string
        name:String,
        email:String,
        phone : Int
    }
    
    type Query{
        getUsers:[User],
        getOneUser(id:ID!):User
    }

    #Mutation
   
`

const resolvers={
    Query:{
        getUsers:()=>{
            //db call
            return users
        },
        //in resolver we have 4 arguments -->parent,args,context,info -->optional // args are object which contains all the input ==> getOneUser(name,email,id)
        getOneUser:(_,args)=>{
            return users.find((u)=>u.id==args.id)
        }
    }

    //Mutation:{}
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { url } = await startStandaloneServer(server, {
  listen: { port: 4002 },
});
console.log(`  Server ready at: ${url}`);
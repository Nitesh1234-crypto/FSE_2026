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
    type Mutation{
        addUser(id:ID!,name:String,email:String,phone:Int):User,
        deleteUserById(id:ID!):[User],
        updateUser(id:ID!,name:String,email:String,phone:Int):User
    }
   
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
    },
    Mutation:{
        addUser:(_,args)=>{
            //args -->id,name,email,phone 
            let {id,name,email,phone} = args;
            //logic to add this new user to database;
            let newUser = {
                id:id,
                name:name,
                email:email,
                phone:phone
            }
            users.push(newUser);
            return newUser;
        },
        deleteUserById:(_,args)=>{
            let {id} = args;
            users=users.filter((u)=>u.id!=id);
            return users;

        },
        updateUser:(_,args)=>{
            let {id,name,email,phone} =args;
            let updateUser = users.find((u)=>u.id==id);
            updateUser.name=name;
            updateUser.email=email;
            updateUser.phone=phone;
            return updateUser;
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
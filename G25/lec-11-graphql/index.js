import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
let users = [
    {
        id:"1",
        name:"Nitesh",
        email:"nitesh@gmail.com",
        password:"1234",
        phone: 889888,
       
    },
    {
          id:"2",
         name:"ritik",
        email:"ritik@gmail.com",
        password:"1234",
        phone: 889888
    },
    {
          id:"3",
         name:"pratiyush",
        email:"pratiyush@gmail.com",
        password:"1234",
        phone: 889888
    }
]
let posts=[
    {
        postId:"1",
        likes:56,
        content:"random post",
        userId:"1"
    },
     {
        postId:"12",
        likes:56,
        content:"random post2",
        userId:"2"
    },
     {
        postId:"2",
        likes:56,
        content:"random post3",
        userId:"3"
    },

]
const typeDefs = `
    type User{
        id:ID!  #ID is a special type which serialize to string,
        #! is not null
        name:String,
        email:String,
        password:String,
        phone : Int,
        post:[Post]
    }
        type Post{
        postId:ID!,
        likes:Int,
        content:String,
        userId:ID!
        user:User
        }
    
    type Query{
        getUsers: [User],
        getUser(id:ID!) :User,
           getAllPosts:[Post],
            getPost(id:ID!):Post,
    }
    type Mutation{
        addUser(name:String,email:String,password:String,phone:Int):User,
        deleteUserById(id:ID!):User,
           addPost(postId:ID!, likes:Int, content:String):Post,
            deletePost(postId:ID!):Post,
            updatePost(postId:ID!, likes:Int, content:String):Post
    }

`

const resolvers ={
    Query:{
        getUsers:()=>{
            //db caLL
            return users;
        },
        //resolver function has 4 parameter (optional)
        //param-- parent,args,context,info -->args =input argument {}
        getUser:(_,args)=>{
            let id = args.id;
            let user=users.find((u)=>u.id==id)
            return user;
            // return users[0];
        },
            getAllPosts:()=>{
            return posts; 
        },

        getPost:(_,args)=>{
            let{postId}=args;
            return posts.find((p)=>p.id===postId);
        }
    },
    Mutation:{
        addUser:(_,args)=>{
            //name,email,password,phone 
            let {name,email,password,phone} = args;
            let newUser ={
                id:String(Math.floor(Math.random()*1000000)),
                name:name,
                email:email,password:password,
                phone:phone
            }
            users.push(newUser);
            return newUser;


        },
        deleteUserById:(_,args)=>{
            let {id} = args;
            let deleteUser = users.find((u)=>u.id==id);
            users= users.filter((u)=>u.id!=id);
            return deleteUser;

        },
          addPost:(_, args)=>{
            let{postId, likes, content}=args;
            posts.push({postId:postId, likes:likes, content:content});
            return posts[posts.length-1];
        },
        deletePost:(_, args)=>{
            let{postId}=args;
            let index=posts.findIndex(p=>p.postId=postId);
            const deletedPost=posts[index];
            posts.splice(index,1);
            return deletedPost;
        },
        updatePost:(_,args)=>{
            let{postId, likes, content}=args;
            const post=posts.find((p)=>p.postId=postId);
            if(likes) posts.likes=likes;
            if(content) posts.content=content;
            return post;
        }
    }



    /**
     * {
     * query:{
     *  key:()=>{},
     * key2:()=>{}
     * },
     * mutation:{
     *  key:()=>{},
     * key2:()=>{}
     * }
     * }
     */
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
await startStandaloneServer(server, {
  listen: { port: 4001 },
});

console.log("server started")
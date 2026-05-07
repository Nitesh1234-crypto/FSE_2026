import { addDoc, collection, doc, getDocs } from 'firebase/firestore'
import React from 'react'
import { db } from './firebase'

const App = () => {
 async function addBlog(title,desc){
  try {
      let response=await addDoc(collection(db,"Blogs"),{
      title:title,
      desc:desc
    })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
  }
  async function readBlog(){
    try {
      let blogs = await getDocs(collection(db,"Blogs"));
      // console.log(blogs);
    //  blogs._snapshot.docChanges.forEach(element => {
    //     console.log(element.doc.data.value.mapValue.fields.title)
    //   })
    blogs.forEach((doc)=>{
      console.log(doc.id);
      let data = doc.data();
      console.log("title==>",data.title)
    });

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>firestore</h1>
      <button onClick={()=>addBlog("first title","blog description")}>addBlog</button>
      <button onClick={()=>readBlog()}>getBlog</button>
    </div>
  )
}

export default App

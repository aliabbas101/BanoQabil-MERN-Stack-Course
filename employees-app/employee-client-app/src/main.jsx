import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import Login from './Login';
import Register from './register';
import Posts from './Posts';
import Admin from './Admin';
import CreatePostPage from './AddPost';


const loader = () => {
  let token = localStorage.getItem("token");
    if(!token){
      return redirect("/login");
    }

    return null
  };


  const loginLoader=() =>{
    let token = localStorage.getItem("token");

    if(token){
      return redirect("/home");
    }
    return null;
  }


let browserRouter=createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'login',
    element:<Login/>,
    loader: loginLoader
  },
  {
    path:'register',
    element: <Register/>
  },
  {
    path:'home',
    element:  <Admin/>,
    loader: loader,
    children: [
      {
        path: '',
        element: <Posts/>
      },
      {
        path: 'posts',
        element: <Posts/>
      },
      {
       path:'add-post',
       element:<CreatePostPage/> 
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter}></RouterProvider>
  </React.StrictMode>,
)

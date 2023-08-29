import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "./services/posts.service.js";


export default function Posts() {

  let [posts, setPosts] = useState([]);
  let [filteredPosts, setFilteredPosts] = useState([]);
  let [searchKeyword, setSearchKeyword] = useState('');

  useEffect(()=>{
    getPosts().
    then((posts)=>{
      setPosts(posts);
    }).
    catch(err=>{

    });
  }, []);


  function searchByKeyword(event) {

    /** First set value of input to new value */
    setSearchKeyword(event.target.value);
    
    /** Get posts against the searched keyword */
    let postsFound = posts.filter((post)=> {
      return post.title === searchKeyword});


    /** If there are any posts found, then set them to filtered posts */
    /** This is make sure that the original posts are not modified
     * and we don't have to fetch data again from the server
     */
  
    setFilteredPosts(postsFound);
    
  }


  return (
    <>
      <div className="container mt-5">
        <div className="card my-2">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h1>Manage Posts</h1>
              <div className="d-flex">
              <Link to="add-post" className="btn btn-success float-end me-2">Manage Users</Link>
              <Link to="add-post" className="btn btn-success float-end">+ Add Post</Link>
              
              </div>
            </div>

            <input type="text" className="mt-2 form-control" value={searchKeyword} placeholder="Search Keyword" onChange={searchByKeyword} />
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cover</th>
              <th scope="col">Post title</th>
              <th scope="col">Post Author</th>
              <th scope="col">Published At</th>
              <th scope="col">Updated At</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            { (filteredPosts.length > 0) ? (filteredPosts.map((post)=>{
              return <tr key={post._id}>
              <th scope="row">{post._id}</th>
              <td><img src={post.cover} height="100" /></td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>{post.createdAt}</td>
              <td>{post.updatedAt}</td>
              <td>
                <button  className="btn btn-primary me-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            })):
            (posts.map((post)=>{
              return <tr key={post._id}>
              <th scope="row">{post._id}</th>
              <td><img src={post.cover} height="100" /></td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>{post.createdAt}</td>
              <td>{post.updatedAt}</td>
              <td>
                <button  className="btn btn-primary me-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            }))
             
              
            }
            
          </tbody>
        </table>
      </div>
    </>
  );
}

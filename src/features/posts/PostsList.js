import {  useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";

const PostsList = () => {
  const allPosts = useSelector((state) => state.posts.entities)
  const dispatch = useDispatch()

  const doFetchPosts = () => {
    dispatch(fetchPosts())
  }

  return (
    <div className="container">

      <h1>Posts Data</h1>
      <p>from: https://jsonplaceholder.typicode.com/posts</p>
      <button className="btn btn-primary" onClick={doFetchPosts}>Get Posts</button>
      <table className="table table-striped table-boredered">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {
            allPosts.map((post => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
              </tr>
            )))
          }
        </tbody>
      </table>
    </div>
  );
}

export default PostsList;
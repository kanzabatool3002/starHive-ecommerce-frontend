
// import style from "./style.css";

// import React, { useEffect, useState } from 'react';


// function Home() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => response.json())
//             .then(data => setPosts(data))
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     return (
//         <div className="App">

//             <table>
//                 <thead>
//                     <tr>
//                         <th>id</th>
//                         <th>title</th>
//                         <th>body</th>

//                     </tr>
//                 </thead>
//                 <tbody>
//                     {posts.map(post => (
//                         <tr key={post.id}>
//                             <td>{post.id}</td>
//                             <td>{post.title}</td>
//                             <td>{post.body}</td>

//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Home;


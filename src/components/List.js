import React from 'react';

const List = ({posts}) => {
 
  return (
    <div>
       
   <table className='table'>
    <thead>
      <tr>
        <th scope="col">name </th>
        <th scope="col">Email </th>
        <th scope="col">Gender </th>
        <th scope="col">Phone </th>
      </tr>
    </thead>
    
    <tbody>
      { posts.map((post)=>{
       
        return(
         <tr key={ post.login.uuid}>
          <td>{post?.name.first}</td>
          <td>{post?.email}</td>
          <td>{post?.gender}</td>
          <td>{post?.phone}</td>
         </tr>
        )
      })}
    </tbody>


   </table>
    </div>
  );
};

export default List;
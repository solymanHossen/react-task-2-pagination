import React from 'react';

const Pagination = ({totalPosts,postPerPage,setCurrentPage,currentPage}) => {
  let pages=[]

  for(let i=1; i<=Math.ceil(totalPosts/postPerPage);i++){

    pages.push(i)
  }
  return (
    <div className='d-flex justify-content-center gap-4'>
      {
        
        pages.map((page,index)=>{
         
        return <button
        
        key={index}
        onClick={()=>setCurrentPage(page)}
        className={page===currentPage? 'btn btn-primary':"btn btn-danger" }
        

        >{page}</button>
        })
      }
    </div>
  );
};

export default Pagination;
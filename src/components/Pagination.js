import React from 'react';

const Pagination = ({ totalPosts, postPerPage, setCurrentPage, currentPage }) => {
  let pages = []

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {

    pages.push(i)
  }


const prevChange=()=>{

if(currentPage!==1){
  setCurrentPage(currentPage-1)
}
}
const nextChange=()=>{

if(currentPage!==pages.length)
setCurrentPage(currentPage+1)
}

  return (
    <div className='d-flex justify-content-center gap-4'>
      <button className='btn btn-info' 
      onClick={prevChange}
        
    
      >Prev</button>


      {

        pages.map((page, index) => {

          return <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? 'btn btn-primary' : "btn btn-danger"}
          >{page}</button>

        }
        )  }

      <button className='btn btn-dark'
        onClick={nextChange}

      >Next</button>
    </div>
  );
};

export default Pagination;
import { useEffect, useState } from 'react';
import List from './components/List';
import axios from 'axios';
import Pagination from './components/Pagination';
import TopNav from './components/TopNav';




let API = "https://randomuser.me/api/?results=20"

const App = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(4)



  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(API);
        setPosts(data.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const lastPostIndex = currentPage * postPerPage;

  const firstPostIndex = lastPostIndex - postPerPage


  const currentPosts = posts.slice(firstPostIndex, lastPostIndex)

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>There was an error trying to load the posts.</p>;
  }

  return (
    <div>
      <TopNav/>
      <h1>Bio Data</h1>
      {
        <List posts={currentPosts} />
      }

      <Pagination
        totalPosts={posts.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
export default App
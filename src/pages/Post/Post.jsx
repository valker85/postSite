import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Components
import PostList from "../../components/PostList/PostList";
import PostForm from "../../components/PostForm";
// UI
import MySelect from "../../components/UI/select/MySelect";
import MyModal from "../../components/UI/modal/MyModal";
import MyButton from "../../components/UI/button/MyButton";
import Loader from "../../components/UI/loader/Loader";
import Pagination from "../../components/UI/pagination/Pagination";
// API
import PostService from "../../API/PostService";
// Hooks
import useFetching from "../../hooks/useFetching";
// Utils
import { getPageCount } from "../../utils/pages";
// Styles
import classes from './Post.module.css'


function Post() {
  const [posts, setPosts] = useState([])
  const [selectedSort, setSelectedSort] = useState('')
  const [modal, setModal] = useState(false)

  // Pages
  const [totalPages, setTotalPages] = useState(0)
  const [limit] = useState(10)
  const [page, setPage] = useState(1) // active page
  
  const [postsFetching, isPostLoader, postError] = useFetching( async ()=>{
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)

    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  // // // // // // // // // // Functions

  function createPost(newPost) {
    setPosts([newPost, ...posts])
    setModal(!modal)
  }

  function removePost(post){
    setPosts( posts.filter( p => p.id !== post.id ) )
  }

  function sortPosts(sort) {
    setSelectedSort(sort)
    setPosts( [...posts].sort((a, b) => a[sort].localeCompare(b[sort])) )
  }

  useEffect(() => {
    postsFetching()
  }, [page])


  return (
    <div className={classes.posts}>

      <div className={classes.createPost}>
        <h1>Hello!</h1>
        <h2>This is a site about various posts.</h2>
        <h3>You can read more <Link to='/about'>here</Link>.</h3>
        <h2>Would you like to create a post? Let's!</h2>
        <MyButton onClick={()=>setModal(!modal)}>Create Post</MyButton>
      </div>

      <MyModal flag={modal} setModal={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

      <div className={classes.line} />
    
      {/* Sort */}
      <div className={classes.sortSelect}>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={'Sorted by'}
          options={[
            {value: 'title', name:'Title'},
            {value: 'body', name:'Description'}
          ]}
        />
      </div>


      {/* If the request returned an error */}
      { 
        postError && 
        <h1 style={{color: 'red', textAlign:'center'}}>{postError}</h1>
      }

      {/* Waiting for data from the server */}
      {
        isPostLoader 
        ? <Loader/> 
        : <PostList remove={removePost} posts={posts}/>
      }

      <Pagination setPage={setPage} totalPages={totalPages}></Pagination>
      
    </div>
  )
}

export default Post;
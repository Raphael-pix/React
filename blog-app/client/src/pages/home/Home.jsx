import styles from './styles.module.css'
import { useContext, useEffect } from "react"
import {GlobalContext} from '../../context/context'
import axios from 'axios'
import {FaTrash,FaEdit} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function Home(){
    const {blogList,setBlogList,loading,setLoading} = useContext(GlobalContext)
    const navigate =  useNavigate()

    async function fetchListOfBlogs(){
        const response = await axios.get('http://localhost:5000/api/blogs')
        const result = await response.data
        setLoading(true)
        if(result && result.blogList && result.blogList.length){
            setBlogList(result.blogList)
            setLoading(false)
        }else{
            setLoading(false)
            setBlogList('')
        }
    }

    async function handleDelteBlog(getCurrentId){
        const response = await axios.delete(`http://localhost:5000/api/blogs/delete/${getCurrentId}`)
        const result = await response.data
        if(result?.message){
            fetchListOfBlogs()
        }
    }

    function handleEditBlog(getCurrentBlogItem){
        navigate('/add-blog',{state:{getCurrentBlogItem}})
    }

    useEffect(()=>{
        fetchListOfBlogs()
    },[])

    return <div className={styles.wrapper}>
        <h1>Blog List</h1>
        {
            loading ? <h2>Loading,please wait</h2> : <div className={styles.blogList}>
                { blogList && blogList.length ? 
                    blogList.map(blogItem=><div key={blogItem._id}>
                        <p>{blogItem.title}</p>
                        <p>{blogItem.description}</p>
                        <FaEdit size={24} className={styles.icons} onClick={()=>handleEditBlog(blogItem)}/>
                        <FaTrash size={24} className={styles.icons} onClick={()=>handleDelteBlog(blogItem._id)}/>
                    </div>):
                    <h2>no blogs added</h2> 
                }
            </div>
        }
    </div>
}
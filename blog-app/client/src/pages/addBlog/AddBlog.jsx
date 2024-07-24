import { useContext, useEffect } from "react";
import styles from "./styles.module.css";
import { GlobalContext } from "../../context/context";
import axios from 'axios'
import {useNavigate,useLocation} from 'react-router-dom'


export default function AddBlog() {
  const {formData, setFormData,isEdit,setIsEdit} = useContext(GlobalContext);
  const location = useLocation()
  const navigate = useNavigate()

  async function handleSaveBlog(){


    const response = isEdit ? await axios.put(`http://localhost:5000/api/blogs/update/${location.state.getCurrentBlogItem._id}`,{     
      title : formData.title,
      description : formData.description
    })
    :await axios.post('http://localhost:5000/api/blogs/add',{
        title : formData.title,
        description : formData.description
    })

    const result=  await response.data
    console.log(result)
    if(result){
      setIsEdit(false)
        setFormData({
            title:'',
            description:''
        })
        navigate('/')
    }
  }

  useEffect(()=>{
    console.log(location)
    if(location.state){
      const {getCurrentBlogItem} = location.state 
      setIsEdit(true)
      setFormData({
        title:getCurrentBlogItem.title,
        description:getCurrentBlogItem.description
      })
    }
  },[location])
  
  return (
    <div className={styles.wrapper}>
      <h1> {isEdit?'Edit blog': 'Add Blog'}</h1>
      <div className={styles.formWrapper}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter Blog Title"
          value={formData.title}
          onChange={(e)=>setFormData({
            ...formData,
            title: e.target.value
          })}
        />
        <textarea
          name="description"
          id="description"
          placeholder="Enter Blog Description"
          value={formData.description}
          onChange={(e)=>setFormData({
            ...formData,
            description: e.target.value
          })}
        />
        <button onClick={handleSaveBlog}> {isEdit?'Edit blog': 'Add new Blog'}</button>
      </div>
    </div>
  );
}

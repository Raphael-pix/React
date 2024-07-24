import { useRef } from "react"
import useFetch from "../use-fetch"



export default function ScrollTopAndBottom(){
  
    const {data,error,loading} = useFetch("https://dummyjson.com/products?limit=100",{})
    const bottomRef =useRef(null)

    function handleScrollToBottom(){
        bottomRef.current.scrollIntoView({behavior:"smooth"})
    }
    function handleScrollToTop(){
        window.scrollTo({
            top:0,left:0,behavior:"smooth"
        })
    }


    return <div>
        <h1>Scroll Top and Bottom</h1>
        <button onClick={()=>handleScrollToBottom()}>Scroll Bottom</button>
        {
            error ? <h3>Error occurred,{error}</h3> : null
        }
        {
         loading ? <h3>Loading please wait</h3> : null
        }
        {
         data && data.products && data.products.length ? data.products.map(productItem=>(
             <p key={productItem.key}>{productItem.title}</p>
         )):null
        }

        <button onClick={()=>handleScrollToTop()}>Scroll Top</button>
        <div ref={bottomRef}></div>
    </div>
}
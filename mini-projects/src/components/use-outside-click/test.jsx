import {useState,useRef} from "react"
import useOutsideClick from "."


export default function UseOnclickOutsideTest(){

    const [showContent,setShowContent]= useState(false)
    const ref = useRef()
    useOutsideClick(ref,()=>setShowContent(false))

    return <div>
        {
            showContent ? (
                <div ref={ref}>
                    <h1>This is a random Contnet</h1>
                    <p>Please click outside to close content</p>
                </div>
            ):(
                <button onClick={()=>setShowContent(true)}>
                    Show content
                </button>
            )
        }
    </div>
}
import { useRef } from "react"



export default function ScrollToSection(){

    const ref = useRef()
    const data = [
        {
            label:"first card",
            style:{
                width:"100%",
                height:"600px",
                background:"red",
                color:"white",
                padding:"20px 0"
            }
        },{
            label:"second card",
            style:{
                width:"100%",
                height:"600px",
                background:"blue",
                color:"white",
                padding:"20px 0"
            }
        },{
            label:"third card",
            style:{
                width:"100%",
                height:"600px",
                background:"green",
                color:"white",
                padding:"20px 0"
            }
        },{
            label:"Fourth card",
            style:{
                width:"100%",
                height:"600px",
                background:"black",
                color:"white",
                padding:"20px 0"
            }
        },{
            label:"fifth card",
            style:{
                width:"100%",
                height:"600px",
                background:"yellow",
                color:"white",
                padding:"20px 0"
            }
        },{
            label:"sixth card",
            style:{
                width:"100%",
                height:"600px",
                background:"purple",
                color:"white",
                padding:"20px 0"
            }
        },
    ]
    function handleScrollToSection(){
        let pos = ref.current.getBoundingClientRect().top

        window.scrollTo({
            top:pos,
            behavior:"smooth"
        })
    }

    return <div>
        <h1>Scroll to particular section</h1>

        <button onClick={()=>handleScrollToSection()}>click to scroll</button>

        {
            data.map((dataItem,index)=>(
                <div ref={index === 4 ? ref : null} style={dataItem.style}>{dataItem.label}</div>
            ))
        }

    </div>
}
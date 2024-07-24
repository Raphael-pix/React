import { useEffect, useState } from "react"
import ItemContainer from "./item-container"


export default function Tabs({tabsContent,onChange}){
    
    const [currentTabIndex,setCurrentTabIndex]=useState(0)
    const [productCategories,setProductCategories]=useState([])
    const [currentCategory,setCurrentCategory] = useState('')

    function handleOnclick(getCurrentIndex,getCurrentCategory){
        setCurrentTabIndex(getCurrentIndex)
        setCurrentCategory(getCurrentCategory)
        onChange(getCurrentIndex)
    }

    function getCategories(){
        const cpyCategories = []

        // eslint-disable-next-line array-callback-return
        tabsContent.map((tabItem)=>{
            if(!cpyCategories.includes(tabItem.category)){
                cpyCategories.push(tabItem.category)
            }
        })

        setProductCategories(cpyCategories)
    }

    useEffect(()=>{
        getCategories()
    },[])

    return <div className="wrapper">
        <div className="heading">
            {
                productCategories.map((categoryItem,index)=>(
                    <div className={`tab-item ${currentTabIndex === index ? "active" : ""}`} onClick={()=>handleOnclick(index,categoryItem)} key={categoryItem}>
                        <span className="label">{categoryItem}</span>
                    </div>
                ))
            }
        </div>
        <div className="content">
            {
                // tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                // eslint-disable-next-line array-callback-return
                tabsContent.map((tabItem)=>{
                    if(tabItem.category === currentCategory){
                        return <ItemContainer item={tabItem}/>
                    }
                })
            }
        </div>
    </div>
}
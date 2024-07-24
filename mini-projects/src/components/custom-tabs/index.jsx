import Tabs from "./tabs";
import "./style.css" 
import { useEffect, useState } from "react";

/*function RandomComponent(){
    return <div>This is some random content</div>
}*/

export default function TabTest(){
    // const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const [products,setProducts] = useState([])

    /*const tabs = [
        {
            label:"Tab 1",
            content:"This is content for Tab 1"
        },
        {
            label:"Tab 2",
            content:"This is content for Tab 2"
        },
        {
            label:"Tab 3",
            content: <RandomComponent/>
        },
    ]*/
    async function fetchProducts(){
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            const result = await response.json()
            setProducts(result)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchProducts()
    },[products])

    function handleChange(currentTabIndex){
        // setSelectedTabIndex(currentTabIndex)
        console.log(currentTabIndex)
    }

    return  <div>
        <Tabs tabsContent={products} onChange={handleChange}/>
        {
            // tabs[selectedTabIndex]&&tabs[selectedTabIndex].content
            //shows how the onchange prop allows you to define custom behavior in the parent component when the selected tab changes.
        }
    </div>
    
}
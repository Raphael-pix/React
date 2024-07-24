import { useEffect, useState } from "react"
import {Circles} from "react-loader-spinner"
import ProductTile from "../components/product-tile/tile"


export default function Home(){
    
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false)
    
    async function fetchListOfProducts(){
        setLoading(true)
        try{
        const response = await fetch('https://fakestoreapi.com/products')
        const data =await response.json()
        if(data){
            setLoading(false)
            setProducts(data)
        }
        }catch(error){
            setLoading(false)
            console.log(error)
        }
    }
    
    useEffect(()=>{
        fetchListOfProducts()
    },[])

    return <div>
        {
            loading ? 
            <div className="min-h-screen w-full flex justify-center items-center">
                <Circles
                height={'120'}
                width={'120'}
                color="rgb(120,29,29)"
                visible={true}
                />
            </div>:
            <div className="grid min-h-[80vh] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
                {
                    products && products.length ? 
                    products.map((productItem)=>(
                        <ProductTile product={productItem} key={productItem.id}/>
                    ))
                    :null
                }
            </div>
        }
    </div>
}
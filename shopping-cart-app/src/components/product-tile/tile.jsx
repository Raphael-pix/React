import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../../store/slices/cart-slice"

export default function ProductTile({product}){
    
   const dispatch = useDispatch()
   const {cart} =useSelector(state=>state)
    
    function handleAddToCart(){
        dispatch(addToCart(product))
    }
    function handleRemoveFromCart(){
        dispatch(removeFromCart(product.id))
    }
    
    return <div>
        <div className="group flex flex-col items-centetr border-2 border-red-900 gap-3 p-4 mt-10 ml-5 rounded-xl">
            <div className="h-[180px]">
                <img src={product?.image} alt={product?.title} className="h-full object-contain mx-auto"/>
            </div>
            <div>
                <h1 className="w-full min-h-[56px] truncate mt-4 text-gray-700 font-bold text-lg">{product?.title}</h1>
            </div>
            <div className="flex items-center justify-between w-full mt-5">
                <button onClick={cart.some(item=> item.id === product.id) ? handleRemoveFromCart:handleAddToCart} className="bg-red-950 text-white border-2 rounded-lg font-bold text-center p-4 w-full">
                    {
                        cart.some(item=> item.id === product.id) ? 'Remove from cart':'Add to cart'
                    }
                    </button>
            </div>
        </div>
    </div>
}
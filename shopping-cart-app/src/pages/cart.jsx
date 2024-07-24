import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {Link} from "react-router-dom"
import CartTile from "../components/cart-tile/tile"


export default function Cart(){
    
    const [totalCart,setTotalCart]=useState(0)

    const {cart} = useSelector(state => state)

    useEffect(()=>{
        setTotalCart(cart.reduce((acc,curr)=>acc + curr.price,0))
    },[cart])
    console.log(cart,totalCart)
    return <div className="flex">
        {
            cart && cart.length ? (
            <>
                <div className="min-h-[70vh] grid md:grid-cols-2 max-w-6xl mx-auto">
                    <div className="flex flex-col justify-center items-center p-3">
                        {
                            cart.map(cartItem=> <CartTile cartItem={cartItem}/>)
                        }
                    </div>
                </div>
                <div>
                    <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                        <h1 className="capitalize font-bold text-2xl text-red-800">
                            your cart summary
                        </h1>
                        <p>
                            <span className="text-gray-800 font-bold text-xl">
                                Total Items: {cart.length}
                            </span>
                        </p>
                        <p>
                        <span className="text-gray-800 font-bold text-xl">
                                Total Amount: {totalCart}
                            </span>
                        </p>
                    </div>
                </div>
            </>
            ): <div className="min-h-[80vh] flex flex-col items-center justify-center w-full">
                <h1 className="text-gray-800 font-bold text-xl mb-2">Your cart is empty</h1>
                <Link to="/">
                    <button  className="bg-red-950 text-white border-2 rounded-lg font-bold text-center p-4 w-full uppercase">shop now</button>
                </Link>
            </div>
        }
    </div>
}
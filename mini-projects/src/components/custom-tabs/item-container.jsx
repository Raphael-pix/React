import './style.css'

export default function ItemContainer({item}){
    return <div className="item-container">
        <div className="product-image-container">
            <img src={item.image} alt={item.name} className='product-image'/>
        </div>
        <div className="product-details">
            <p className='product-name'>{item.title}</p>
            <p className="product-price">${item.price}</p>
        </div>

    </div>
}
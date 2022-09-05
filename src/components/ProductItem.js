import React from 'react'; 
import './ProductItem.css'; 
 
const ProductItems = ({ id, title, image, price, rating, specification, detail }) => { 
 
    // const [{ basket}, dispatch] = useStateValue(); 
 
    // const addToCart = () => { 
    //     //dispatch the item into the data layer  
 
    //     dispatch({ 
    //         type: "ADD_TO_BASKET", 
    //         item: { 
    //             id: id, 
    //             title: title, 
    //             image: image, 
    //             price: price, 
    //             rating: rating, 
 
    //         }, 
    //     }); 
    // }; 
 
    return ( 
 
        <div className='product'> 
            <div className="info"> 
 
                <p>{title}</p> 
                {/* Price */} 
                <p className='price'> 
                    <strong>Rs. </strong> 
                    <strong>{price}</strong> 
                </p> 
                {/* Rating */} 
                <div className='rating'> 
                    {Array(rating).fill().map((_, index) => (<p key={index}>⭐️</p>))} 
                </div> 
            </div> 
            <img src={image} alt="" /> 
            <button> 
                Add to Cart 
            </button> 
 
 
        </div> 
    ) 
} 
 
export default ProductItems;
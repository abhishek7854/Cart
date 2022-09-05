import React from 'react';
import "./Home.css";
import Slider from './components/Slider';
import Footer from './components/Footer'
import ProductItems from './components/ProductItem';
import {products } from './components/ProductsData'; 
import Banner1 from "./BannerImages/Banner1.jpg";
import Banner2 from "./BannerImages/Banner2.jpg";
import Banner3 from "./BannerImages/Banner3.jpg";
import Banner4 from "./BannerImages/Banner4.jpg";
import Banner5 from "./BannerImages/Banner5.jpg";
import Banner6 from "./BannerImages/Banner6.jpg";

const headerItems = [
  "All",
  "BestSeller",
  "Mobiles",
  "Prime",
  "Electronic",
  "Fashion",
  "New Releases",
  "Customer Service",
  "Amazon Pay",
  "Computers",
  "Home & Kitchen",
  "Today's Deals",
];

const Home = () => {
  const bannerImages = [Banner1,Banner2,Banner3,Banner4,Banner5,Banner6];
  return (
    <div>
        <div className='item-container'>
            {headerItems && headerItems.map((item,index)=><p>{item}</p>)}
        </div>
        <div className='home'>
        
          <div className='home-container'>
          <Slider images={bannerImages} />
              <div className='home-raw'>
              {products.slice(0, 4).map((item) => ( 
                            <ProductItems key={item.id} 
                                item={item.id} 
                                title={item.title} 
                                price={item.price} 
                                rating={item.rating} 
                                image={item.image} 
                                specification={item.specification} 
                                detail={item.detail} 
                            /> 
                        ))} 
                    </div> 
                    <div className='home-raw'> 
                        {products.slice(3, 6).map((item) => ( 
                            <ProductItems key={item.id} 
                                item={item.id} 
                                title={item.title} 
                                price={item.price} 
                                rating={item.rating} 
                                image={item.image} 
                                specification={item.specification} 
                                detail={item.detail} 
                            /> 
                        ))} 
                    </div> 
                    <div className='home-raw'> 
                        {products.slice(5, 6).map((item) => ( 
                            <ProductItems key={item.id} 
                                item={item.id} 
                                title={item.title} 
                                price={item.price} 
                                rating={item.rating} 
                                image={item.image} 
                                specification={item.specification} 
                                detail={item.detail} 
                            /> 
                        ))} 
                    </div> 
                  
                <div style={{marginTop:"40px"}}>{/*Back to Top*/}</div>
                </div>
          
          
        </div>
        <Footer />
    </div>
  )
}

export default Home;
import React from 'react'
import './Nav.css'
import { useState,useRef,useMemo} from 'react';
import Hover from './hover';

export default function Nav() {
  const images=["https://images.meesho.com/images/marketing/1744634654837.webp","https://images.meesho.com/images/marketing/1744634725496.webp","https://images.meesho.com/images/marketing/1744634780426.webp","https://images.meesho.com/images/marketing/1744634814643.webp","https://images.meesho.com/images/marketing/1744634835018.webp","https://images.meesho.com/images/marketing/1744634871107.webp","https://images.meesho.com/images/marketing/1744634909968.webp","https://images.meesho.com/images/marketing/1744634937295.webp"] ;
  const options=["Popolar","Kurti,Sarees and Lehangas","Women Western","lingerie","Men","Kids and Toys","Home & Kitchen","Beauty & health","Bags and Footwares","Electronics","Watches","Sports and Fitness"];
  const mapoptions=options.map((option,index)=>
        
          <li key={index}>{option}</li>
      )

      const original=["https://images.meesho.com/images/marketing/1744635542873.webp","https://images.meesho.com/images/marketing/1744635521751.webp","https://images.meesho.com/images/marketing/1744635497001.webp","https://images.meesho.com/images/marketing/1744635464683.webp","https://images.meesho.com/images/marketing/1744635432891.webp","https://images.meesho.com/images/marketing/1744635402151.webp","https://images.meesho.com/images/marketing/1744635614888.webp","https://images.meesho.com/images/marketing/1744635646070.webp"];


const anime=["https://images.meesho.com/images/marketing/1743159302944.webp","https://images.meesho.com/images/marketing/1743159393231.webp","https://images.meesho.com/images/marketing/1744636599446.webp","https://images.meesho.com/images/marketing/1743159377598.webp","https://images.meesho.com/images/marketing/1743159322237.webp","https://images.meesho.com/images/marketing/1743159302944.webp","https://images.meesho.com/images/marketing/1743159302944.webp","https://images.meesho.com/images/marketing/1743159302944.webp"]
  const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: "Poco C71 Cases & Covers",
    price: 134,
    mrp: 199,
    img: "https://images.meesho.com/images/products/584578661/0lybn_512.avif?width=360",
    category: "Phone Accessories",
    rating: 3.9,
    reviews: 116,
  },
  {
    id: 2,
    title: "Trendy Retro Men Shirts",
    price: 194,
    mrp: 222,
    img: "https://images.meesho.com/images/products/375061729/0lurd_512.avif?width=360",
    category: "Men",
    rating: 4.0,
    reviews: 73902,
  },
  {
    id: 3,
    title: "Bluetooth Headphones & Earphones",
    price: 269,
    mrp: 289,
    img: "https://images.meesho.com/images/products/417056622/gshhe_512.avif?width=360",
    category: "Electronics",
    rating: 3.9,
    reviews: 25832,
  },
  {
    id: 4,
    title: "Ikat Net Embroidered Saree",
    price: 335,
    mrp: 335,
    img: "https://images.meesho.com/images/products/68464151/f1nit_512.avif?width=360",
    category: "Women",
    rating: 3.8,
    reviews: 60384,
  },
  {
    id: 5,
    title: "Phone Wallet - Blue",
    price: 249,
    mrp: 299,
    img: "https://images.meesho.com/images/products/495626488/dwbsp_512.avif?width=360",
    category: "Phone Accessories",
    rating: 4.1,
    reviews: 2200,
  },
  {
    id: 6,
    title: "Kids Hoodie Set",
    price: 299,
    mrp: 349,
    img: "hthttps://images.meesho.com/images/products/434114444/tvbku_512.avif?width=360",
    category: "Kids",
    rating: 4.2,
    reviews: 4200,
  },

];

const ALL_CATEGORIES = [
  "Women",
  "Men",
  "Kids",
  "Electronics",
  "Phone Accessories",
  "Home & Kitchen",
]; 
 const [sortBy, setSortBy] = useState("relevance");
  const [selectedCats, setSelectedCats] = useState([]);

  const toggleCategory = (cat) => {
    setSelectedCats((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filtered = useMemo(() => {
    let list = SAMPLE_PRODUCTS.slice();

   
    if (selectedCats.length > 0) {
      list = list.filter((p) => selectedCats.includes(p.category));
    }

    
  

    return list;
  }, [sortBy, selectedCats]);


return (
    <div>
      <div className='navbar'>
        <img src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg" alt="meesho" />
        <input type="text" placeholder='🔍 Try Sarees,Kurti or Search by Product Code'/>

        <ul>
          <li>Become a Supplier</li><hr />
          <li className='breaker'></li>
          <li>Investor Relation</li><hr />
          <li className='breaker'></li>
          <li className="profile">
    <i className="fa-regular fa-user"></i>
    <span>Profile</span>
  </li>
  <li className="cart">
    <i className="fa-solid fa-cart-shopping"></i>
    <span>Cart</span>
 
  </li>

        </ul>
        
      </div>
      <hr />
     <div className="options">
  <Hover options={options} />
  <hr />
</div>


      <div className='imagebarq'>
         <img className='image' src="https://images.meesho.com/images/marketing/1760553615790.webp" alt="messho" />
         
      </div>
      
      <div className='specials'>
       
          <div className='lightpink'>
            <ul>
              <li>7 Days Easy Return</li>
              <li className='divider'></li>
              <li>Cash on Delivery</li>
              <li className='divider'></li>
              <li>Lowest Price</li>
            </ul>
          </div>
      </div>
      <div className='mage'>
          {images.map((mage,index)=> <img key={index} src={mage} alt="meshoo" /> )}
      </div>
      <div className='diwali'>
        <img src="https://images.meesho.com/images/marketing/1744698265981.webp" alt="diwali" />
      </div>
      <div className='original-brands'>
         <h1>Original Brands</h1>
        
         <div className='original-cards'>
          
  
          {original.map((org,index)=>
          <div key={index} className='cardsorg'>
            <img src={org} alt="meshoo" />
          </div>
          )}
   
         </div>
         <div className='purple'>
          <div className='anime'>
            {anime.map((nim,index)=>
            <div className='scroll'>
              <img key={index} className='nim' src={nim} alt="meshoo" />
              
            </div>
            )}
        
          </div>

         </div>
     
      </div>

       <div className="products-page">
      <div className="page-header">
        <h2>Products For You</h2>
        <div className="sort-box">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="relevance">Relevance</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="page-body">
        <aside className="sidebar">
          <div className="filter-card">
            <h3>FILTERS</h3>
            <p className="muted">1000+ Products</p>

            <div className="filter-section">
              <div className="filter-title">Category</div>
              <input
                className="search-input"
                placeholder="Search"
                onChange={() => {}}
              />
              <ul className="category-list">
                {ALL_CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedCats.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                      />
                      <span>{cat}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <main className="product-grid">
          {filtered.map((p) => (
            <article className="product-card" key={p.id}>
              <div className="card-image">
                <img src={p.img} alt={p.title} />
                <div className="more-badge">+{Math.max(0, 1)}</div>
              </div>

              <div className="card-body">
                <h4 className="title">{p.title}</h4>

                <div className="price-row">
                  <div className="price">₹{p.price}</div>
                  {p.mrp > p.price && (
                    <>
                      <div className="mrp">₹{p.mrp}</div>
                      <div className="discount">
               
                      </div>
                    </>
                  )}
                </div>


                <div className="rating">
                  <span className="rate-pill">{p.rating.toFixed(1)} </span>
                  <span className="reviews">{p.reviews} Reviews</span>
                </div>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
    
  



      
    </div>
    
  )
}

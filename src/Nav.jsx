import React from 'react'
import './Nav.css'

export default function Nav() {
  const image=[] ;
  const options=["Popolar","Kurti,Sarees and Lehangas","Women Western","lingerie","Men","Kids and Toys","Home & Kitchen","Beauty & health","Bags and Footwares","Electronics","Watches","Sports and Fitness"];
  const mapoptions=options.map((option,index)=>
        
          <li key={index}>{option}</li>
        
      )
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
          <li class="profile">
    <i class="fa-regular fa-user"></i>
    <span>Profile</span>
  </li>
  <li class="cart">
    <i class="fa-solid fa-cart-shopping"></i>
    <span>Cart</span>
 
  </li>

        </ul>
        
      </div>
      <hr />
     <div  className='options'>
        <ul>
        {mapoptions}
        </ul>
        <hr />
      
      </div>

      <div className='imagebarq'>
         <img src="https://images.meesho.com/images/marketing/1760553615790.webp" alt="messho" />
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
      <div className='dressimage'>
          <img src="https://images.meesho.com/images/marketing/1744634654837.webp" alt="meesho" />
      </div>
    </div>
  )
}

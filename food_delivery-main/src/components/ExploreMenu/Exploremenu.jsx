import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'
const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita minus dolorum dolor recusandae aliquid maxime ea suscipit minima quod!</p>
        <div className='explore-menu-list'> 
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}   className='explore-menu-list-item' key={index} >
                        <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu

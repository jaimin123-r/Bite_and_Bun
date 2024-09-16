import React, { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';

const menuItems = [
  { id: 1, img:'b-1.jpeg',name: 'Classic Burger', price: 69, category: 'Burger' },
  { id: 2, img:'b-2.jpeg',name: 'Cheese Burger', price: 99, category: 'Burger' },
  { id: 3, img:'b-3.jpeg',name: 'Veggie Burger', price: 79, category: 'Burger' },
  { id: 4, img:'b-4.jpeg',name: 'French Fries', price: 79, category: 'Sides' },
  { id: 5, img:'b-5.jpeg',name: 'Onion Rings', price: 69, category: 'Sides' },
  { id: 6, img:'b-6.jpeg',name: 'Cola', price: 49, category: 'Drinks' },
  { id: 7, img:'b-7.jpeg',name: 'Lemonade', price: 59, category: 'Drinks' },
  { id: 8, img:'b-8.jpeg',name: 'Bahubali Cheese Burger', price: 89, category: 'Burger' },
  { id: 9, img:'b-9.jpeg',name: 'Salted Fries', price: 60, category: 'Sides' },
  { id: 10, img:'b-10.jpeg',name: 'Masala Fries', price: 99, category: 'Sides' },
  { id: 11, img:'b-11.jpeg',name: 'Peri Peri Fries', price: 79, category: 'Sides' },
  { id: 12, img:'b-12.jpeg',name: 'Veg Nuggets', price: 69, category: 'Sides' },
  { id: 13, img:'b-13.jpeg',name: 'Pizza Puff', price: 50, category: 'Sides' },
  { id: 14, img:'b-14.jpeg',name: 'Chick Balls', price: 59, category: 'Sides' },
  { id: 15, img:'b-15.jpeg',name: 'Fanta', price: 49, category: 'Drinks' },
  { id: 16, img:'b-16.jpeg',name: 'Sprite', price: 49, category: 'Drinks' },
  { id: 17, img:'b-17.jpeg',name: 'Pepsi', price: 49, category: 'Drinks' },
  { id: 18, img:'b-18.jpeg',name: 'Diet Coke', price: 49, category: 'Drinks' },
  { id: 19, img:'b-19.jpeg',name: 'Thick Shake', price: 69, category: 'Drinks' },
  { id: 20, img:'b-20.jpeg',name: 'Maharaja Cheese Burger', price: 199, category: 'Burger' },
  { id: 21, img:'b-21.jpeg',name: 'Aloo Tikki Burger', price: 49, category: 'Burger' },
  { id: 22, img:'b-22.jpeg',name: 'Panner Cheese Burger', price: 149, category: 'Burger' },
  { id: 23, img:'b-23.jpeg',name: 'The Big Bite Cheese Burger', price: 199, category: 'Burger' },
  { id: 24, img:'b-24.jpeg',name: 'Double Tikki Crispy Burger', price: 119, category: 'Burger' },
  { id: 25, img:'b-25.jpeg',name: 'The Boom Cheese Burger', price: 149, category: 'Burger' },

];

const Menu = () => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === filter);

    

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Menu</h1>
      <div className="mb-6">
        <button
          onClick={() => setFilter('All')}
          className={`mr-2 px-4 py-2 rounded ${filter === 'All' ? 'bg-yellow-400' : 'bg-gray-200'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('Burger')}
          className={`mr-2 px-4 py-2 rounded ${filter === 'Burger' ? 'bg-yellow-400' : 'bg-gray-200'}`}
        >
          Burgers
        </button>
        <button
          onClick={() => setFilter('Sides')}
          className={`mr-2 px-4 py-2 rounded ${filter === 'Sides' ? 'bg-yellow-400' : 'bg-gray-200'}`}
        >
          Sides
        </button>
        <button
          onClick={() => setFilter('Drinks')}
          className={`mr-2 px-4 py-2 rounded ${filter === 'Drinks' ? 'bg-yellow-400' : 'bg-gray-200'}`}
        >
          Drinks
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:scale-110 duration-300">
            <img src={item.img} alt={item.name} className="w-[100px] h-[100px] md:w-[178px] md:h-[178px] object-cover mb-4" />
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-4">Rs.{item.price.toFixed(2)}</p>
          
            <button
              onClick={() => addToCart(item)}
              className="bg-yellow-400 text-black font-bold md:py-2 md:px-4 p-2 rounded hover:bg-yellow-500 transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;



// import React from 'react';
// import { motion } from 'framer-motion';


// export default function Menu () {
//   return (
//     <motion.div 
//       className="container mx-auto px-4 py-8"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-bold mb-4">Our Menu</h2> <br />

//       <Filter/> <br />

//       <div className='md:flex gap-2'>
//       <Itemcard name=' Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       </div>
//       <div className='md:flex gap-2'>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       </div>
//       <div className='md:flex gap-2'>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       </div>
//       <div className='md:flex gap-2'>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       <Itemcard name='Crispy Burger' price='300' para='crispy petty with souces' img='https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20240304073207570010_482x264jpg'/>
//       </div>
     
//     </motion.div>
//   );
// };

// function Itemcard(props){
//   function Addcart(){
//     alert("Item added into youe cart")
//   }
//   return(
//     <>
//       <div className='bg-white w-[100%] md:w-[30%] p-2 border-4 border-slate-200 mt-3'>
//         <div className='w-full '><img src={props.img} alt="" /></div>
//         <div>
//           <h1 className='text-4xl font-extrabold'>{props.name}</h1>
//           <p>{props.para}</p>
//         </div>
//         <div className='flex justify-between'>
//           <h1 className='text-2xl mt-3'>{props.price}.Rs</h1>
//           <button className='border-2 border-yellow-600 rounded-2xl w-20 hover:bg-yellow-600 p-2' onClick={Addcart}>Add</button>
//         </div>
//       </div>
//     </>
//   );
// }

// function Filter(){
//   return(
//     <>
//       <div>
//         <h1 className='text-3xl font-extrabold'>Filter</h1>
//         <div className='gap-3 md:flex'>
//           <button className='border-2 border-yellow-600 rounded-2xl  hover:bg-yellow-600 p-1'>Best Sellers</button>
//           <button className='border-2 border-yellow-600 rounded-2xl  hover:bg-yellow-600 p-1'>Double tikky</button>
//           <button className='border-2 border-yellow-600 rounded-2xl  hover:bg-yellow-600 p-1'>Cheesy</button>
//           <button className='border-2 border-yellow-600 rounded-2xl  hover:bg-yellow-600 p-1'>Fries</button>
//           <button className='border-2 border-yellow-600 rounded-2xl  hover:bg-yellow-600 p-1'>Drinks</button>
//         </div>
//       </div>
//     </>
//   );
// }


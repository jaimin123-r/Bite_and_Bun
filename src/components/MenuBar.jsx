import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoIosArrowBack } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineContactMail } from "react-icons/md";

function MenuBar() {
  return (
    <> 
    <br /><br />          
    <div className=' grid grid-cols-2 gap-8 md:hidden w-[80%] m-auto border rounded-lg'>
        <div className='border-yellow-400 text-[18px] font-semibold items-center flex h-[9rem] hover:scale-105 duration-200 border rounded-lg'><Link to="/about" className='m-auto'><AiOutlineExclamationCircle size={24} className='mb-3 ml-6'/>About</Link></div>
        <div className='border-yellow-400 text-[18px] font-semibold items-center flex h-[9rem] hover:scale-105 duration-200 border rounded-lg'><Link to="/contact" className='m-auto'><MdOutlineContactMail size={24} className='mb-3 ml-6'/> Contact</Link></div>
        <div className='border-yellow-400 text-[18px] font-semibold items-center flex h-[9rem] hover:scale-105 duration-200 border rounded-lg'><Link to="/profile" className='m-auto'><ImProfile size={24} className='mb-3 ml-6'/>Profile</Link></div>
        <div className='border-yellow-400 text-[18px] font-semibold items-center flex h-[9rem] hover:scale-105 duration-200 border rounded-lg'><Link to="/cart" className='m-auto'><LiaShoppingBagSolid size={24} className='mb-3 ml-6'/>My orders</Link></div>
        <div className='border-yellow-400 text-[18px] font-semibold items-center flex h-[9rem] hover:scale-105 duration-200 border rounded-lg'><Link to="/stores" className='m-auto'><IoLocationOutline size={24} className='mb-3 ml-6'/>Our Stores </Link></div>
        <div className='border-yellow-400 text-[18px] font-semibold items-center flex h-[9rem] hover:scale-105 duration-200 border rounded-lg'><Link to="/setting" className='m-auto'><IoSettingsOutline size={24} className='mb-3 ml-6'/>Settings</Link></div>
    </div>
    <br />
    <br /><br />
    </>
  )
}


function BackBtn(){
    return (
        <>
            <span className='md:hidden'>
            <Link to="/menubar" className='flex'><IoIosArrowBack size={24} className='block'/>Back</Link>           
            </span>
        </>
    );
}

function Settings(){
    return(
        <>
             <motion.div 
            className="container mx-auto px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            >
            <div>
                <BackBtn/>
            </div>
            <h1>Settings</h1>
            </motion.div>
        </>
    );
}
function Myorder(){
    return(
        <>
             <motion.div 
            className="container mx-auto px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            >
             <div>
                <BackBtn/>
            </div>
            <h1>Your orders</h1>

            <table border={1}>
                <tr>
                    <th>Items</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>Item 1</td>
                    <td><input type="number" className='w-11'/></td>
                </tr>
                <tr>
                    <td>Item 2</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Item 3</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Item 4</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>discount</td>
                    <td>5%</td>
                </tr>
                <td>
                    <td>Taxes and charges</td>
                    <td>4%</td>
                </td>
                <tr>
                    <td>total payable</td>
                    <td>4</td>
                </tr>
            </table>
            </motion.div>
        </>
    );
}


// function Stores(){
//     return(
//         <>  
//              <motion.div 
//             className="container mx-auto px-4 py-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             >
//              <div>
//                 <BackBtn/>
//             </div>
//             <h1>Stores</h1>
//             </motion.div>
//         </>
//     );
// }

const storesByState = {
    Gujarat: {
        Ahmedabad: [
            {
                name: "Sabarmati Snacks",
                description: "Traditional Gujarati snacks and more.",
                image: "/images/ahmedabad1.jpg",
                address: "Sabarmati, Ahmedabad, Gujarat 380005",
                contact: "+91 9876543210",
                mapLink: "https://goo.gl/maps/1"
            },
            {
                name: "Manek Chowk Delight",
                description: "Famous for night street food in Ahmedabad.",
                image: "/images/ahmedabad2.jpg",
                address: "Manek Chowk, Ahmedabad, Gujarat 380001",
                contact: "+91 9876543211",
                mapLink: "https://goo.gl/maps/2"
            },
            {
                name: "Vastrapur Vibes",
                description: "Modern fusion food in the heart of Ahmedabad.",
                image: "/images/ahmedabad3.jpg",
                address: "Vastrapur, Ahmedabad, Gujarat 380015",
                contact: "+91 9876543212",
                mapLink: "https://goo.gl/maps/3"
            }
        ]
    },
    Maharashtra: {
        Mumbai: [
            {
                name: "Marine Drive Bites",
                description: "Enjoy snacks with a sea view.",
                image: "/images/mumbai1.jpg",
                address: "Marine Drive, Mumbai, Maharashtra 400020",
                contact: "+91 9876543213",
                mapLink: "https://goo.gl/maps/4"
            },
            {
                name: "Bandra Binge",
                description: "The go-to spot for food lovers in Bandra.",
                image: "/images/mumbai2.jpg",
                address: "Bandra, Mumbai, Maharashtra 400050",
                contact: "+91 9876543214",
                mapLink: "https://goo.gl/maps/5"
            },
            {
                name: "Colaba Classics",
                description: "Iconic dishes in a historic setting.",
                image: "/images/mumbai3.jpg",
                address: "Colaba, Mumbai, Maharashtra 400005",
                contact: "+91 9876543215",
                mapLink: "https://goo.gl/maps/6"
            },
            {
                name: "Juhu Junction",
                description: "Taste the best of Mumbai's street food.",
                image: "/images/mumbai4.jpg",
                address: "Juhu, Mumbai, Maharashtra 400049",
                contact: "+91 9876543216",
                mapLink: "https://goo.gl/maps/7"
            },
            {
                name: "Thane Treats",
                description: "A suburban foodie's paradise.",
                image: "/images/mumbai5.jpg",
                address: "Thane, Mumbai, Maharashtra 400601",
                contact: "+91 9876543217",
                mapLink: "https://goo.gl/maps/8"
            }
        ]
    },
    Karnataka: {
        Bangalore: [
            {
                name: "Indiranagar Eats",
                description: "Trendy and tasty, right in the heart of Bangalore.",
                image: "/images/bangalore1.jpg",
                address: "Indiranagar, Bangalore, Karnataka 560038",
                contact: "+91 9876543218",
                mapLink: "https://goo.gl/maps/9"
            },
            {
                name: "Koramangala Kitchen",
                description: "Fusion foods and more in the IT hub.",
                image: "/images/bangalore2.jpg",
                address: "Koramangala, Bangalore, Karnataka 560095",
                contact: "+91 9876543219",
                mapLink: "https://goo.gl/maps/10"
            }
        ]
    },
    Delhi: {
        Delhi: [
            {
                name: "Chandni Chowk Chaat",
                description: "Iconic chaat and street food.",
                image: "/images/delhi1.jpg",
                address: "Chandni Chowk, Delhi 110006",
                contact: "+91 9876543220",
                mapLink: "https://goo.gl/maps/11"
            },
            {
                name: "Connaught Place Cuisine",
                description: "A blend of modern and traditional flavors.",
                image: "/images/delhi2.jpg",
                address: "Connaught Place, Delhi 110001",
                contact: "+91 9876543221",
                mapLink: "https://goo.gl/maps/12"
            }
        ]
    },
    'Tamil Nadu': {
        Chennai: [
            {
                name: "Marina Mall Meals",
                description: "A variety of food options with a view of Marina Beach.",
                image: "/images/chennai1.jpg",
                address: "Marina Beach, Chennai, Tamil Nadu 600004",
                contact: "+91 9876543222",
                mapLink: "https://goo.gl/maps/13"
            }
        ]
    }
};

const Stores = () => {
    const [selectedState, setSelectedState] = useState('all');
    const [selectedCity, setSelectedCity] = useState('all');

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity('all');
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    const renderStores = () => {
        let storesToRender = [];

        if (selectedState === 'all') {
            Object.keys(storesByState).forEach(state => {
                Object.keys(storesByState[state]).forEach(city => {
                    storesToRender = [...storesToRender, ...storesByState[state][city]];
                });
            });
        } else {
            if (selectedCity === 'all') {
                storesToRender = Object.values(storesByState[selectedState]).flat();
            } else {
                storesToRender = storesByState[selectedState][selectedCity] || [];
            }
        }

        return storesToRender.map((store, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6 border border-yellow-400">black text-white
                <h3 className="text-xl font-semibold text-purple-900">{store.name}</h3>
                <p className="text-gray-600">{store.description}</p>
                <p className="text-gray-600"><strong>Address:</strong> {store.address}</p>
                <p className="text-gray-600"><strong>Contact:</strong> {store.contact}</p>
                <a
                    href={store.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 bg-yellow-500 text-white font-medium text-sm leading-tight rounded shadow-md hover:bg-purple-800 focus:bg-purple-800 focus:outline-none focus:ring-0 active:bg-purple-900 transition duration-150 ease-in-out"
                >
                    Get Directions
                </a>
            </div>
        ));
    };

    const renderCityOptions = () => {
        if (selectedState === 'all') {
            return <option value="all">All</option>;
        }

        return (
            <>
                <option value="all">All</option>
                {Object.keys(storesByState[selectedState]).map(city => (
                    <option key={city} value={city}>{city}</option>
                ))}
            </>
        );
    };

    return (
        <div className="container mx-auto p-4">
            <BackBtn/>
            <div className="flex justify-center mb-6">
                <div className="mr-4">
                    <label htmlFor="state-select" className="block mb-1 font-medium">Select State:</label>
                    <select
                        id="state-select"
                        value={selectedState}
                        onChange={handleStateChange}
                        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    >
                        <option value="all">All</option>
                        {Object.keys(storesByState).map(state => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="city-select" className="block mb-1 font-medium">Select City:</label>
                    <select
                        id="city-select"
                        value={selectedCity}
                        onChange={handleCityChange}
                        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    >
                        {renderCityOptions()}
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {renderStores()}
            </div>
        </div>
    );
};

export default MenuBar
export {BackBtn,Stores,Myorder,Settings};

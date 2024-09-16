import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BackBtn } from './MenuBar';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Profile = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement profile update logic here
    // console.log('Profile updated:', { name, phone, email, addresses, selectedAddress });
  };

  const addAddress = () => {
    const newAddress = prompt('Enter new address:');
    if (newAddress) {
      setAddresses([...addresses, newAddress]);
    }
  };

  const deleteAddress = (index) => {
    setAddresses(addresses.filter((_, i) => i !== index));
  };

  return (

    <motion.div 
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackBtn /> <br />
       <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
      {/* <div>
        <BackBtn />
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <h3 className="font-bold mb-2">Addresses</h3>
        {addresses.map((address, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="radio"
              name="selected-address"
              value={address}
              checked={selectedAddress === address}
              onChange={() => setSelectedAddress(address)}
              className="mr-2"
            />
            <span>{address}</span>
            <button
              type="button"
              onClick={() => deleteAddress(index)}
              className="ml-auto text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={addAddress}
          className="w-full bg-gray-200 text-gray-800 py-2 rounded mb-4"
        >
          Add Address
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-primary text-white py-2 rounded"
        >
          Save Profile
        </motion.button>
      </form> */}
    </motion.div>
  );
};

export default Profile;
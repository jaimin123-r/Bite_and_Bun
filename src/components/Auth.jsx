import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BackBtn } from './MenuBar';
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement authentication logic here
    console.log('Login attempt:', username, password);
  };

  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <BackBtn />
      </div>
      <h2 className="text-2xl font-bold mb-4">Sign Up / Login</h2>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-primary text-white py-2 rounded"
          type="submit"
        >
          Sign Up / Login
        </motion.button>
      </form>


      {/* <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header> */}
    </motion.div>
  );
};

export default Auth;
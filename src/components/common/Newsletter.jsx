import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <div>
      <div className="bg-[#191919] py-13 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-secondary mb-1 text-gray-400 ">Sign Up For Our Newsletter</h2>
          
          <div className="mb-8">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-gray-600 text-gray-400 text-3xl py-4 focus:outline-none focus:border-gray-400 placeholder-gray-500 font-primary"
            />
          </div>
          
          <button className="border border-[#678E07] text-white px-6 py-3 rounded-full font-secondary flex text-sm items-center gap-2 hover:bg-gray-800 transition-colors mb-6">
            Subscribe To Newsletter
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <h2 className="text-gray-400 text-sm font-secondary" style={{fontSize:"10px !important"}}>
            By Subscribing You Agree To Our TOS And Privacy Policy
          </h2>
        </div>
      </div>
    </div>
  );
}
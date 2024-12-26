import React from 'react'
import { Phone } from "lucide-react"


  interface PhoneNumberProps{
    phoneNumber: string;
    setPhoneNumber: (value:string) => void;
    onSubmit: () => void;
    isLoading: boolean;
  }

  export function PhoneInput ({phoneNumber,setPhoneNumber,onSubmit,isLoading}:PhoneNumberProps){
    const handleSubmit = (e : React.FormEvent) => {
      e.preventDefault();
      onSubmit()
    };
  


  return (
      <form onSubmit={handleSubmit} className='w-full space-y-4'>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input 
          type="tel"
          value={phoneNumber}
          onChange={(e)=>setPhoneNumber(e.target.value)}
          placeholder='Enter your mobile number'
          className='block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          pattern="[0-9]*"
          required
          />
        </div>
        <button
        type='submit'
        disabled={isLoading || phoneNumber.length < 10}
        className='w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"'>
          {isLoading ? "Sending Code..." : "send Verification Code"}  
        </button>
      </form>
  )
}


export default PhoneInput
import './App.css'
import { useState } from "react"
import {VerificationCode} from './components/verificationCode'
import {PhoneInput} from './components/phoneInput'
import { ShieldCheck } from 'lucide-react';

function App() {
  
  const[phoneNumber,setPhoneNumber] = useState("")
  const[step,setStep] = useState<"phone"|"verification">("phone")
  const[isLoading,setIsLoading] = useState(false);
  const[verificationCode,setVerificationCode] = useState("")

  const handleSendCode = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve,1500));
    setIsLoading(false);
    setStep("verification")
  }

  const handleVerifyCode = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve,1500));
    setIsLoading(false);
    alert("Verification successful!")
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-100 p-3 rounded-full mb-4">
            <ShieldCheck className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            {step === 'phone' ? 'Login with Mobile' : 'Verify Code'}
          </h1>
          <p className="text-gray-500 text-center mt-2">
            {step === 'phone'
              ? 'Enter your mobile number to receive a verification code'
              : 'Enter the 6-digit code sent to your mobile'}
          </p>
        </div>

        {step === 'phone' ? (
          <PhoneInput
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            onSubmit={handleSendCode}
            isLoading={isLoading}
          />
        ) : (
          <>
            <VerificationCode
              code={verificationCode}
              setCode={setVerificationCode}
              onVerify={handleVerifyCode}
              isLoading={isLoading}
            />
            <button
              onClick={() => setStep('phone')}
              className="mt-4 w-full text-gray-600 text-sm hover:text-gray-900 focus:outline-none"
            >
              Change phone number
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
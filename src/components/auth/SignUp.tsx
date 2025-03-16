"use client";

import React, { useActionState } from 'react'
import Form from 'next/form';
import { Loader2 } from 'lucide-react';

const initialState = {
  message : '',
}

type signuUpProps = {
  action: (prevState: any, formData: FormData) => Promise<{message: string} | undefined>
}

function SignUp({ action }: signuUpProps) {
  
  const [state, formAction, isPending] = useActionState(action, initialState)

  return (
    <Form action={formAction} className='p-8 max-w-md mx-auto my-16 bg-white rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold text-center mb-2'>Join the DEAL revolution !</h1>
      <p className="text-center text-sm text-red-600 font-semi-bold mb-2">
        🔥 LIMITED TIME OFFER 🔥
      </p>
      <p className="text-center text-sm font-semibold text-gray-400 mb-2">
        Signup now and get 90% off on your first purchase
      </p>
      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className='block text-sm font-medium text-gray-800'>Email Address</label>
          <input type="email" id='email' name='email' autoComplete='email' required
            className='w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-black-400 focus:border-transparent transision-color'
            placeholder='Enter your email'/>
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className='block text-sm font-medium text-gray-800'>Password</label>
          <input type="password" id='password' name='password' autoComplete='new-password' required
            className='w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-black-400 focus:border-transparent transision-color'
            placeholder='Enter your password'/>
        </div>
        <div className="text-center">
          <p className='text-xs text-gray-500 mb-2'>⚡ Only 250 welcome bounce remaiing⚡</p>
          <p className='text-xs text-gray-500 mb-2'>🕧 Offer expires in 23.30</p>
        </div>
        <button type='submit'
          disabled={isPending}
          className={`w-full bg-rose-600 text-white py-3 rounded-md hover:bg-rose-800 transition-colors font-medium flex items-center justify-center gap-2 ${isPending ? 'cursor-not-allowed': ""}`}>
          {isPending ? (
            <React.Fragment>
              <Loader2 className='animate-spin w-4.5 h-4.5' />
              CREATING ACCOUNT...
            </React.Fragment>) : (<>CREATE ACCOUNT</>)}
        </button>
      </div>
    </Form>
  )
}

export default SignUp

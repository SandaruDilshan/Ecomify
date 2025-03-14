import { getCurrentSession } from '@/actions/auth'
import React from 'react'
import { redirect } from 'next/navigation'
import SignUp from '@/components/auth/SignUp'
import zod, { object } from 'zod'

const signUpSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(5),
})

const SignupPage = async () => {

  const { user } = await getCurrentSession();

  if (user) {
    return redirect('/');
  }

  const action = async (prevStatee: any, formData: FormData) => {
    "use server";
    const parsed = signUpSchema.safeParse(Object.fromEntries(formData));
    if (!parsed.success) {
      return {
        message : "Invalid Form Data !",
      }
    }

    const { email, password } = parsed.data;
    const { user, error } = await 
  }

  return (<SignUp />)
  
}

export default SignupPage

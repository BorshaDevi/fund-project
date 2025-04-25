'use client'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import axios from "axios"
import { useRouter } from "next/navigation"


const formSchema = z.object({
    name: z.string().min(2 ,{
        message:"Name must be at least 2 characters long"
    }).max(50 ,{
        message:"Name must be at most 50 characters long"
    }),
    email:z.string().email(),
    password: z.string().min(8,{
        message:"Password must be at least 8 characters long"
    }).max(20),
  })
const RegisterForm=()=>{
  const router=useRouter()
    const form=useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name:"",
            email:"",
            password:""
        }
    })
    async function onSubmit (data){
        console.log(data)
        await axios.post('/api/user',data).then((res)=>{
            console.log(res.data, 'user created successfully')
            if(res.data.status===200){
                  router.push('/login')
            }

            
        }).catch((err)=>{
            console.log(err, 'Error in creating user')
        })
    }
    return(
        <div >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="name"
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <input type='text' {...field} placeholder="Enter Your Name" className='border-2 border-black p-1 rounded-md' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({field})=>(
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <input type='email' {...field} placeholder="example@.com" className='border-2 border-black p-1 rounded-md' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="password"
                render={({field})=>(
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <input type='password' {...field} placeholder="********" className='border-2 border-black p-1 rounded-md'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <Button type="submit" className='bg-slate-600 text-white'>Register</Button>
              </form>
              <p> Already have account ?Please <Link href='/login' className="hover:text-blue-600 hover:underline">Login</Link></p>
            </Form>
        </div>
    )
}
export default RegisterForm;
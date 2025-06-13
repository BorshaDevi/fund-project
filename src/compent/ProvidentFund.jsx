'use client'
import { useParams } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { useState } from "react";


const formSchema = z.object({
    month:z.string(),
    year: z.string(),
  })
const ProvidentFund= () => {
  const [loading , setLoading]=useState(false)
    const {id}=useParams();
  console.log("Provident Fund ID:", id);

  const form=useForm({
              resolver: zodResolver(formSchema),
              defaultValues:{
                  month:"",
                  year:"",
              }
          })
  return (
    <div>
      <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-8">
            <FormField
          control={form.control}
          name="month"
          render={({field})=>(
            <FormItem>
              <FormLabel>Month</FormLabel>
              <br></br>
              <FormControl>
                <input type='text' {...field} placeholder="May" className='border-2 border-black p-1 rounded-md' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
            <FormField
          control={form.control}
          name="year"
          render={({field})=>(
            <FormItem>
              <FormLabel>Year</FormLabel>
              <br></br>
              <FormControl>
                <input type='text' {...field} placeholder="example 2000" className='border-2 border-black p-1 rounded-md' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          <Button type="submit" className='bg-slate-600 text-white'>{loading? <span className="animate-spin h-5 w-5 mr-3"><AiOutlineLoading />Submiting... </span> : <span>Submit</span>}</Button>
          </form>
        </Form>
        
      </CardContent>
    </Card>
    </div>
  );
}
export default ProvidentFund;

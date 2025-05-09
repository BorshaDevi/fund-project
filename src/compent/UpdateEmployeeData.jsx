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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import DatePicker from "./Calander"
import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const formSchema = z.object({
    firstName: z.string().min(2 ,{
        message:"Name must be at least 2 characters long"
    }).max(50 ,{
        message:"Name must be at most 50 characters long"
    }),

    lastName: z.string().min(2 ,{
        message:"Name must be at least 2 characters long"
    }).max(50 ,{
        message:"Name must be at most 50 characters long"}),

    employeeEmail:z.string().email(),

    employeeId: z.string().min(2 ,{
        message:"Employee ID must be at least 2 characters long"
    }).max(50 ,{
        message:"Employee ID must be at most 50 characters long"
    }),
    gender:z.string(),

    dateOfBirth:z.date(),

    dateOfConfirmation:z.date(),

    designation:z.string().min(2 ,{
        message:"Designation must be at least 2 characters long"
    }).max(50 ,{
        message:"Designation must be at most 50 characters long"
    }),

    basicSalary:z.string()
    
  })
const UpdateEmployeeData=()=>{
   const{ id}=useParams()
   const [da , setDa]=useState(null)
   console.log(da , 'from update Employee ')
  
    const form=useForm({
                resolver: zodResolver(formSchema),
                defaultValues: {
                  firstName:  '',
                  lastName: '',
                  employeeEmail:  '',
                  employeeId:  '',
                  gender:  '',
                  dateOfBirth: '',
                  dateOfConfirmation:  '',
                  designation:  '',
                  basicSalary:  '',
                }
            })
            // get data id
            useEffect(()=>{
              const fetchData = async () => {
                  try {
                    const res = await axios.get(`/api/employeeId/${id}`);
                    setDa(res.data.data); 
                  } catch (error) {
                    console.error('Error fetching employee list:', error);
                  }
                };
            
                fetchData();
           },[id])
            
            async function onSubmit (data){
                const userData={
                    firstName:data.firstName,
                    lastName:data.lastName,
                    employeeEmail:data.employeeEmail,
                    employeeId:data.employeeId,
                    gender:data.gender,
                    dateOfBirth:data.dateOfBirth,
                    dateOfConfirmation:data.dateOfConfirmation,
                    designation: data.designation,
                    basicSalary:parseInt(data.basicSalary),
                }
                console.log(userData)
                await axios.post(`/api/updateemployeedata/${id}`,userData)
                .then(res => {
                    console.log(res.data)
                }).catch(err => console.log(err))
            }
            
    return(
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {/* name */}
                <div className="lg:grid lg:grid-cols-2 gap-5 w-auto">
                <FormField
                control={form.control}
                name="firstName"
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <input type='text' {...field} placeholder="First Name" className='border-2 border-black p-1 rounded-md' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="lastName"
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <input type='text' {...field}  placeholder="Last Name" className='border-2 border-black p-1 rounded-md' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                </div>

                {/* gender , designation  */}
                <div className="lg:grid lg:grid-cols-2 w-auto gap-5 mt-5">
                <FormField
                control={form.control}
                name="gender"
                
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <Select {...field} onValueChange={field.onChange} defaultValue={field.value} placeholder='Select' >
                        <SelectTrigger className="w-[180px] border-2 border-black">
                            <SelectValue placeholder ='Select'></SelectValue>
                        </SelectTrigger>
                          <SelectContent className='bg-white'>
                            <SelectItem value='female'>Female</SelectItem>
                            <SelectItem value='male'>male</SelectItem>
                          </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="designation"
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Designation </FormLabel>
                    <FormControl>
                      <input type='text' {...field} placeholder="designation" className='border-2 border-black p-1 rounded-md' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                </div>

                {/* employeeId , date of birth */}
                <div className="lg:grid lg:grid-cols-2 gap-5 mt-5 w-auto">
                <FormField
                control={form.control}
                name="employeeId"
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Employee Id</FormLabel>
                    <FormControl>
                      <input type='text' {...field} placeholder="employee Id" className='border-2 border-black p-1 rounded-md' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="dateOfBirth"
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <DatePicker value={field.value} onChange={field.value} {...field}></DatePicker>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                </div>

                {/* employeeEmail , date of confirmation */}
                <div className="lg:grid lg:grid-cols-2 gap-5 mt-5 w-auto">
                <FormField
                control={form.control}
                name="employeeEmail"
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Employee Email</FormLabel>
                    <FormControl>
                      <input type='text' {...field} placeholder="employee email" className='border-2 border-black p-1 rounded-md' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="dateOfConfirmation"
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Date of Confirmation</FormLabel>
                    <FormControl>
                      <DatePicker value={field.value} onChange={field.value} {...field}></DatePicker>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                </div>
                <div className="mt-5 w-auto">
                <FormField
                control={form.control}
                name="basicSalary"
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Salary</FormLabel>
                    <FormControl>
                      <input type='number' {...field} placeholder="Salary" className='border-2 border-black p-1 rounded-md' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                </div>
                   <Button type="submit" className='bg-slate-600 text-white mt-5'>Submit</Button>
                </form>
            </Form>
        </div>
    )
}
export default UpdateEmployeeData;
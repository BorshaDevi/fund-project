'use client'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdEditNote } from "react-icons/md";

const EmployeeList=()=>{
    const [data, setData]=useState([])
     useEffect(()=>{
        const fetchData = async () => {
            try {
              const res = await axios.get('/api/employeelist');
              console.log(res.data , 'component');
              setData(res.data.data); 
            } catch (err) {
              console.error('Error fetching employee list:', err);
            }
          };
      
          fetchData();
     },[])
     const handleEdit=(id)=>{
           console.log(id)
     }
    return(
        <div>
            <Table>
                <TableCaption> Employee List </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>list</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            data?.map(da => <TableRow key={da._id}>
                                <TableCell>{da.firstName} {da.lastName}</TableCell>
                                <TableCell>{da.employeeEmail}</TableCell>
                                <TableCell>{da.designation}</TableCell>
                                <TableCell onClick={()=> handleEdit(da._id)} ><MdEditNote className="text-2xl text-green-700"/></TableCell>
                            </TableRow>)
                        }
                        
                    </TableBody>
                
            </Table>
        </div>
    )
}
export default EmployeeList;
'use client'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";


const EmployeeList=()=>{
    const [data, setData]=useState(null)
     useEffect(()=>{
        const fetchData = async () => {
            try {
              const res = await axios.get('/api/employeelist');
              console.log(res.data);
              setData(res.data.data); 
            } catch (err) {
              console.error('Error fetching employee list:', err);
            }
          };
      
          fetchData();
     },[])
    return(
        <div>
            <Table>
                <TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>list</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>56890</TableCell>
                            <TableCell>56890</TableCell>
                            <TableCell>56890</TableCell>
                        </TableRow>
                    </TableBody>
                </TableCaption>
            </Table>
        </div>
    )
}
export default EmployeeList;
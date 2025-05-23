"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdEditNote } from "react-icons/md";

const EmployeeList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/employeelist");
        console.log(res.data, "component");
        setData(res.data.data);
      } catch (err) {
        console.error("Error fetching employee list:", err);
      }
    };

    fetchData();
  }, []);

  return (
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
          {data?.map((da) => (
            <TableRow key={da._id}>
              <TableCell>
                {da.firstName} {da.lastName}
              </TableCell>
              <TableCell>{da.employeeEmail}</TableCell>
              <TableCell>{da.designation}</TableCell>
              <TableCell>
                <Link href={`/updateemployeedata/${da._id}`}>
                  <MdEditNote className="text-2xl text-green-700" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default EmployeeList;

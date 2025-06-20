"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdEditNote } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";

const EmployeeList = () => {
  const queryClient = useQueryClient();
  const pathname = usePathname();

  //get employee data
  const { data } = useQuery({
    queryKey: ["employeeList"],
    queryFn: async () => {
      const res = await axios.get("/api/employeelist");
      console.log(res.data, "query data");
      return res.data.data;
    },
    onError: (error) => {
      console.error("Error fetching employee list:", error);
    },
  });

  // handle delete employee

  const { mutate: handledeleteEmployee } = useMutation({
    mutationFn: async (id) => {
      const res = await axios.delete(`/api/employeedatadelete/${id}`);
      console.log(res.data, "delete employee data");
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["employeeList"]);
    },
    onError: (error) => {
      console.error("Error deleting employee:", error);
    },
  });

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((da) => (
            <TableRow key={da._id}>
              <TableCell>
                <Link href={`/providentfund/${da._id}`} className={`link ${pathname===`/providentfund/${da._id}`? 'cursor-pointer':''}`}>
                  {da.firstName} {da.lastName}
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`/providentfund/${da._id}`} className={`link ${pathname===`/providentfund/${da._id}`? 'cursor-pointer':''}`}>
                  {da.employeeEmail}
                </Link>
              </TableCell>
              <TableCell>
                <Link href={`/providentfund/${da._id}`}>{da.designation}</Link>
              </TableCell>

              <TableCell>
                <Link href={`/updateemployeedata/${da._id}`} className={`link ${pathname===`/providentfund/${da._id}`? 'cursor-pointer':''}`}>
                  <MdEditNote className="text-2xl text-green-700" />
                </Link>
              </TableCell>
              <TableCell>
                <RiDeleteBin2Line
                  onClick={() => {
                    handledeleteEmployee(da?._id);
                  }}
                  className="text-2xl text-red-700"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default EmployeeList;

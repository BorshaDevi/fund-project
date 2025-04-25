'use client'
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const DatePicker=({value , onChange})=>{
    
    return(
        <div>
           <Popover >
            <PopoverTrigger asChild>
                <Button className='border border-black rounded-md'>
                    <CalendarIcon className="mr-2 h-4 w-4 " />
                    {value ? format(value, "dd/MM/yyyy") : "Select Date"}
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
                <Calendar 
                mode='single'
                selected={value}
            onSelect={onChange}
                initialFocus
                className='bg-white'
                />
                </PopoverContent>
           </Popover>
        </div>
    )
}
export default DatePicker;
"use client"

import { SidebarIcon } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function SiteHeader({user}) {
  
  const { toggleSidebar } = useSidebar()
  
  return (
    (<header
      className="flex sticky top-0 z-50 w-full items-center border-b bg-white dark:bg-slate-950">
      <div className="flex h-[--header-height] w-full items-center gap-2 px-4">
        <Button className="h-8 w-8" variant="ghost" size="icon" onClick={toggleSidebar}>
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />
        
       <div className='lg:ml-auto ml-auto flex'>
       <div>
        <h1 className="uppercase font-bold">{user.name}</h1>
        <p>{user.email}</p>
       </div>
       <Avatar >
        <AvatarImage></AvatarImage>
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>
       </div>
        
      </div>
    </header>)
  );
}

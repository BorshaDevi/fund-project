'use client'
import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";



const Dashboard=()=>{
  return(
    <SidebarProvider>
      <AppSidebar/>
            <SidebarTrigger/>
    </SidebarProvider>
  )
}
export default Dashboard;
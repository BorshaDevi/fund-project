import AppSidebar from "@/components/app-sidebar";

const { SidebarProvider, SidebarTrigger } = require("@/components/ui/sidebar")

const Dashboard=()=>{
  return(
    <SidebarProvider>
      <AppSidebar/>
            <SidebarTrigger/>
    </SidebarProvider>
  )
}
export default Dashboard;
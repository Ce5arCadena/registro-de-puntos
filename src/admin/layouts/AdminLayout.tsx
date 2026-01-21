import { Outlet } from "react-router"
import SidebarAdmin from "../components/SidebarAdmin"

const AdminLayout = () => {
  return (
    <div className="bg-dark-bg w-screen h-screen flex text-dark-text">
      <SidebarAdmin/>
      <div className="p-4 w-full">
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminLayout
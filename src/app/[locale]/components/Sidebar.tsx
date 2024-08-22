import { urls } from "@/app/contants/urls";
import SidebarItem from "./SidebarItem";
import Image from "next/image";
import HomeIcon from '@mui/icons-material/Home';
import CoffeeIcon from '@mui/icons-material/Coffee';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import SecurityIcon from '@mui/icons-material/Security';
import CategoryIcon from '@mui/icons-material/Category';

const sidebarItem = [
  {
    name: "Dashboard",
    url: urls.dashboard,
    icon: <HomeIcon/>
  },
  {
    name: "RoleManagement",
    url: urls.role_management,
    icon: <SecurityIcon/>
  },
  {
    name: "CategoryManagement",
    url: urls.category_management,
    icon: <CategoryIcon/>
  },
  {
    name: "UsersManagement",
    url: urls.users_management,
    icon: <PersonIcon/>
  },
  {
    name: "ProductsManagement",
    url: urls.products_management,
    icon: <CoffeeIcon/>
  },
  {
    name: "OrdersManagement",
    url: urls.orders_management,
    icon: <ShoppingBagIcon/>
  }
]

export default function SideBar() {
  return (
    <div className="bg-primary pt-8 h-screen shadow-sm">
      <div className="mb-8 flex items-center justify-center">
        <Image src={"/images/logo.svg"} alt="logo" width={183} height={36}/>
      </div>
        {sidebarItem.map(sidebarItem =><SidebarItem key={sidebarItem.url} {...sidebarItem}/>)}
    </div>
  );
}

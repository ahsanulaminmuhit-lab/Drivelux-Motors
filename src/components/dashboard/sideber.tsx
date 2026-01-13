import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function AppSidebar() {
  const { user } = useAuth();
  console.log(user);
  // const user = "user"

  const projects = [
    { name: "Home", url: "/", icon: "HomeIcon" },
    { name: "Profile", url: "/dashboard/profile", icon: "FaTrademark" },
  ];

  const adminMenuItems = [
    { name: "Manage Users", url: "/dashboard/users", icon: "FaTrademark" },
    {
      name: "Manage Products",
      url: "/dashboard/products",
      icon: "ShoppingCartIcon",
    },
    {
      name: "Manage Orders",
      url: "/dashboard/adminOrders",
      icon: "ShoppingCartIcon",
    },
  ];

  const userMenuItems = [
    { name: "View Orders", url: "/dashboard/orders", icon: "ShoppingCartIcon" },
  ];

  const menuItems =
    user?.role === "admin"
      ? [...projects, ...adminMenuItems]
      : [...projects, ...userMenuItems];
  return (
    <Sidebar>
      <SidebarContent className="bg-gray-100">
        <SidebarGroup>
          <SidebarGroupLabel> <h2  className="font-semibold text-2xl">Drive<span className="text-amber-600">Lux</span></h2></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

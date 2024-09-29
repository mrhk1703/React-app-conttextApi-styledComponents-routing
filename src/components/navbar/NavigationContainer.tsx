import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { DashboardContainer } from "./NavbarStyles";
import { NavLinkItem } from "./NavLinkItem";
export const NavigationContainer = ({ children }: any) => {
  return (
    <>
      <div className="header">
        <MenuIcon className="menuIcon" />
      </div>
      <nav>
        <ul>
          <NavLinkItem to="/home">Home</NavLinkItem>
          <NavLinkItem to="/tables">Tables</NavLinkItem>
          <NavLinkItem to="/menu">Menu</NavLinkItem>
          <NavLinkItem to="/products">Products</NavLinkItem>
          <NavLinkItem to="/customers">Customers</NavLinkItem>
        </ul>
      </nav>
      <DashboardContainer>
        <Outlet />
      </DashboardContainer>
    </>
  );
};

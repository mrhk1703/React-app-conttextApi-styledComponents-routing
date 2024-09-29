import { Link, useLocation } from "react-router-dom";

export const NavLinkItem = (props: any) => {
  const { pathname } = useLocation();
  var isActive = pathname === props.to;
  var className = isActive ? "active" : "";
  return (
    <li className={className}>
      <Link {...props}>{props.children}</Link>
    </li>
  );
};

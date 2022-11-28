import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";

// Factory Imports
import MainDashboard2 from "views/factory/default";
import NFTMarketplace2 from "views/factory/marketplace";
import Profile2 from "views/factory/profile";
import DataTables2 from "views/factory/dataTables";

// Dealer Imports
import MainDashboard3 from "views/dealer/default";
import NFTMarketplace3 from "views/dealer/marketplace";
import Profile3 from "views/dealer/profile";
import DataTables3 from "views/dealer/dataTables";

// Insurance Imports
import MainDashboard4 from "views/insurance/default";
import NFTMarketplace4 from "views/insurance/marketplace";
import Profile4 from "views/insurance/profile";
import DataTables4 from "views/insurance/dataTables";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "Product Portfolio",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Account Management",
    layout: "/admin",
    path: "/account",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Product Tracking",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/tracking",
    component: DataTables,
  },
  {
    name: "Quantity In Stock",
    layout: "/factory",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard2,
  },
  {
    name: "Exported Product",
    layout: "/factory",
    path: "/exported",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace2,
    secondary: true,
  },
  {
    name: "Defective Product",
    layout: "/factory",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/defective",
    component: DataTables2,
  },
  {
    name: "Quantity In Stock",
    layout: "/dealer",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard3,
  },
  {
    name: "Products Sold",
    layout: "/dealer",
    path: "/sold",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace3,
    secondary: true,
  },
  {
    name: "Warranty Claim",
    layout: "/dealer",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/warranty",
    component: DataTables3,
  },
  {
    name: "Profile 3",
    layout: "/dealer",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile3,
  },
  {
    name: "Warranty Claim",
    layout: "/insurance",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard4,
  },
  {
    name: "Statistic",
    layout: "/insurance",
    path: "/statistic",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace4,
    secondary: true,
  },
];

export default routes;

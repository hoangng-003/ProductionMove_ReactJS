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
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "/nft-marketplace",
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
    name: "Data Tables",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "Main Dashboard 2",
    layout: "/factory",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard2,
  },
  {
    name: "NFT Marketplace 2",
    layout: "/factory",
    path: "/nft-marketplace",
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
    name: "Data Tables 2",
    layout: "/factory",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables2,
  },
  {
    name: "Profile 2",
    layout: "/factory",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile2,
  },
  {
    name: "Main Dashboard 3",
    layout: "/dealer",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard3,
  },
  {
    name: "NFT Marketplace 3",
    layout: "/dealer",
    path: "/nft-marketplace",
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
    name: "Data Tables 3",
    layout: "/dealer",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
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
    name: "Main Dashboard 4",
    layout: "/insurance",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard4,
  },
  {
    name: "NFT Marketplace 4",
    layout: "/insurance",
    path: "/nft-marketplace",
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
  {
    name: "Data Tables 4",
    layout: "/insurance",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables4,
  },
  {
    name: "Profile 4",
    layout: "/insurance",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile4,
  },
];

export default routes;

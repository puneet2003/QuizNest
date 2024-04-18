/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import Logo from "./Logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useNavigate } from "react-router-dom";

//  but it is same as header.js

const Navbar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      route: ''
    },
    {
      text: "About",
      icon: <InfoIcon />,
      route: 'about'
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      route: 'contact'
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        {/* <img className="logo" src={Logo} alt="" /> */}
      </div>
      <div className="navbar-links-container">
        <a onClick={()=>navigate('/')} style={{cursor: 'pointer'}}>Home</a>
        <a onClick={()=>navigate('/about')} style={{cursor: 'pointer'}}>About</a>
        {/* <a href="">Testimonials</a> */}
        <a onClick={()=>navigate('/contact')} style={{cursor: 'pointer'}}>Contact</a>
        {/* <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a> */}
        {/* <button className="primary-button">Bookings Now</button> */}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} onClick={()=>navigate(`/${item.route}`)}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
         
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};
// done p

export default Navbar;
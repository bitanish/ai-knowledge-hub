// src/components/SidebarLayout.jsx
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText, Toolbar, AppBar, Typography, Box } from "@mui/material";

const drawerWidth = 240;

const SidebarLayout = () => {
  const location = useLocation();

  const menuItems = [
    { text: "Upload", path: "/upload" },
    { text: "Chat", path: "/chat" },
    { text: "Dashboard", path: "/dashboard" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            AI Knowledge Hub
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default SidebarLayout;

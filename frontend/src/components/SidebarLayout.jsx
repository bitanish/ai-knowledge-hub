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
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center"},
        }}
      >
        <Toolbar />
        <List sx={{ flexGrow: 1 }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                selected={isActive}
                sx={{textAlign: "center", "&.Mui-selected": {bgcolor: "primary.main", color: "white", fontWeight: "bold",  "&:hover": { bgcolor: "primary.dark" }}}}
              >
                <ListItemText primary={item.text} slotProps={{primary: {sx:{fontWeight: isActive ? "bold" : "medium", fontSize: "1rem",}}}}/>
              </ListItem>
            );
          })}
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

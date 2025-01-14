'use client';

import React, { useState } from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Divider,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const miniDrawerWidth = 72;
const drawerWidth = 240;

export default function AnotherSidebar() {
  const [open, setOpen] = useState(false); // Drawer state

  const toggleDrawer = () => setOpen(!open); // Toggle drawer open/close

  return (
    <Box sx={{ display: "flex" }}>
      {/* Mini Sidebar */}
      <Drawer
        variant="permanent"
        PaperProps={{
          sx: {
            width: miniDrawerWidth,
            overflowX: "hidden",
            backgroundColor: "#333", // Static color
            color: "#fff", // Static text color
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "64px",
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <MenuIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ justifyContent: "center" }}>
              <ListItemIcon sx={{ minWidth: "auto", color: "#fff" }}>
                <MenuIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Expandable Drawer */}
      <Drawer
        open={open}
        onClose={toggleDrawer}
        variant="temporary"
        PaperProps={{
          sx: {
            width: drawerWidth,
            overflowY: "auto",
            backgroundColor: "#444",
            color: "#fff",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 2,
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <MenuIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
        <Divider />
        {/* Placeholder List Items */}
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MenuIcon sx={{ color: "#fff" }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

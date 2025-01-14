// components/ControlPanel.js
import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

const ControlPanel = () => {
  // Define control panel buttons
  const controls = [
    { icon: <FavoriteIcon />, title: "Favorites" },
    { icon: <StarIcon />, title: "Starred" },
    { icon: <Brightness4Icon />, title: "Dark Mode" },
    { icon: <ZoomOutMapIcon />, title: "Zoom Out" },
    // Add more controls here as needed
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {controls.map((control, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center space-y-2"
        >
          <Tooltip title={control.title} placement="top">
            <IconButton>{control.icon}</IconButton>
          </Tooltip>
          <span className="text-sm text-gray-600">{control.title}</span>
        </div>
      ))}
    </div>
  );
};

export default ControlPanel;

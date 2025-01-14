"use client";
import React, { useState, useEffect } from "react";
import ControlPanel from "./ControlPanel"; // Import the ControlPanel component
import { SwapHoriz as SwapHorizIcon } from "@mui/icons-material"; // Import an icon

export default function ExpandableSidebar() {
  const [isExpanded, setIsExpanded] = useState(false); // Sidebar state
  const [isLeftAligned, setIsLeftAligned] = useState(true); // Sidebar alignment state
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  const dummyProjects = Array.from({ length: 20 }, (_, i) => ({
    name: `Project ${i + 1}`,
    avatar: `https://placehold.co/32x32`, // Placeholder avatars
  }));

  useEffect(() => {
    // Check system's dark mode preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const toggleSidebar = () => setIsExpanded(!isExpanded);
  const toggleSidebarPosition = () => setIsLeftAligned(!isLeftAligned);

  return (
    <>
      {/* Overlay for Temporary Expanded Sidebar */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 ${
          isLeftAligned ? "left-0" : "right-0"
        } shadow-lg transition-all duration-300 z-20 ${
          isExpanded
            ? "w-[95vw] sm:w-[30vw]" // Take 95% width on small screens, 30% on larger screens
            : "w-[10vw] sm:w-[5vw]" // 10% width on small screens, 5% on larger screens
        } ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        {/* Sidebar Header */}
        <div
          className="flex items-center justify-between p-4 border-b cursor-pointer"
          onClick={toggleSidebar}
        >
          {isExpanded ? (
            <h2 className="text-lg font-semibold">Projects</h2>
          ) : (
            <span className="text-xl font-bold">P</span> // Placeholder icon
          )}
        </div>

        {/* Control Panel */}
        <div className="border-b">
          {isExpanded ? (
            <ControlPanel />
          ) : (
            <div className="flex flex-col items-center p-2 gap-2">
              {/* Toggle Sidebar Position Button */}
              <button
                className="p-2 rounded shadow-lg bg-blue-500 text-white flex justify-center items-center"
                onClick={toggleSidebarPosition}
              >
                <SwapHorizIcon sx={{ color: isDarkMode ? "#fff" : "#000" }} />
              </button>
            </div>
          )}
        </div>

        {/* Project List */}
        {isExpanded && (
          <nav className="mt-4 overflow-y-auto h-[calc(100vh-64px)]">
            {dummyProjects.map((project, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-2 transition-all justify-start ${
                  isDarkMode
                    ? "hover:bg-blue-700 cursor-pointer"
                    : "hover:bg-blue-100 cursor-pointer"
                }`}
              >
                {/* Avatar */}
                <img
                  src={project.avatar}
                  alt={project.name}
                  className="rounded-full"
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                />
                {/* Project Name */}
                <span className="text-sm">{project.name}</span>
              </div>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}

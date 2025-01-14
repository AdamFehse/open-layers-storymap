"use client";

import React, { useEffect, useRef } from "react";
import "ol/ol.css"; // Import default OpenLayers styles
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

export default function OpenLayersMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return; // Ensure mapRef is not null

    // Initialize the map
    const map = new Map({
      target: mapRef.current, // Use the HTML element
      layers: [
        new TileLayer({
          source: new OSM(), // Use OpenStreetMap
        }),
      ],
      view: new View({
        center: [0, 0], // Center at [longitude, latitude]
        zoom: 2, // Initial zoom level
      }),
    });

    return () => {
      map.setTarget(undefined); // Cleanup the map instance , should not be NULL
    };
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "100vh" }} />;
}

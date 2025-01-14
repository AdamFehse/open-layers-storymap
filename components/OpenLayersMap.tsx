"use client";

import XYZ from "ol/source/XYZ";
import React, { useEffect, useRef } from "react";
import "ol/ol.css"; // Import default OpenLayers styles
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import StadiaMaps from 'ol/source/StadiaMaps.js';

export default function OpenLayersMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return; // Ensure mapRef is not null

    // Define the bounding box for the Tucson region
    const bounds = [
      fromLonLat([-112.842731 - 1, 32.25422 + 1]), // Why, Arizona
      fromLonLat([-109.928396 + 1, 31.448154]), // Bisbee, Arizona
      fromLonLat([-111.834762, 30.712017 - 0.5]), // Altar, Mexico
    ];

    // Calculate the center point of the bounding box
    const center = fromLonLat([-111.151345, 31.439679]); // center

    // Initialize the map
    const map = new Map({
      target: mapRef.current,
      layers: [
        // NOTE: Layers from Stadia Maps do not require an API key for localhost development or most production
        // web deployments. See https://docs.stadiamaps.com/authentication/ for details.
        new TileLayer({
          source: new StadiaMaps({
            layer: 'alidade_smooth_dark',
            retina: true,
            // apiKey: 'OPTIONAL'
          }),
        }),
      ],
      view: new View({
        center: center,
        zoom: 6,
        maxZoom: 19,
        minZoom: 6,
        extent: [bounds[0][0], bounds[2][1], bounds[1][0], bounds[0][1]], // Bounding box extent
      }),
    });

    return () => {
      map.setTarget(undefined); // Cleanup the map instance , should not be NULL
    };
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "100vh" }} />;
}

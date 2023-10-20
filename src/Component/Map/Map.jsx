import React, { useState } from "react";
import WebMap from "@arcgis/core/WebMap.js";
import MapView from "@arcgis/core/views/MapView.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { useRef, useEffect } from "react";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle.js";
import Search from "@arcgis/core/widgets/Search.js";
import SearchResultRenderer from "@arcgis/core/widgets/Search/SearchResultRenderer.js";

import "./Map.css";
function Map(props) {
  const [reslt, setResult] = useState();

  useEffect(() => {
    props.onresult(reslt);
  }, [reslt]);

  setTimeout(() => {
    const webmap = {
      basemap: "topo-vector",
      ground: "world-elevation",
    };
    const view = new MapView({
      map: webmap,
      container: "viewDiv",
    });
    const basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: "satellite",
    });
    view.ui.add(basemapToggle, {
      position: "top-right",
    });
    const layer = new FeatureLayer({
      url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/World_Countries/FeatureServer/0",
    });
    const searchWidget = new Search({
      view: view,
      sources: [
        {
          layer: layer,

          displayField: "Country",
          exactMatch: false,
          outFields: ["*"],
          name: "Country",

          url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/World_Countries/FeatureServer/0",
        },
      ],
    });

    view.ui.add(searchWidget, {
      position: "top-left",
      index: 2,
    });

    searchWidget.on("select-result", function (event) {
      view.goTo({
        target: event.result.feature.geometry,
        zoom: 5,
      });
    });

    searchWidget.on("search-complete", function (event) {
      setResult(event);
    });

    view.map.add(layer);
  }, 1000);

  return <></>;
}

export default Map;

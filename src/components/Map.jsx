import React from "react";
import BingMapsReact from "bingmaps-react";
const Map = ({ coordinates }) => {
  const bingMapApiKey =
    "AqGrMcJvoHh0AwTxWEVhPsT4sdT5xxgOVRe_T-CUas8poD6tGAQuuMLGDBDHDMDj";
  return (
    <BingMapsReact
      bingMapsKey={bingMapApiKey}
      mapOptions={{
        navigationBarMode: "square",
      }}
      viewOptions={{
        center: coordinates,
        zoom: 12,
      }}
    />
  );
};

export default Map;

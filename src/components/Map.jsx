import React, { useEffect, useState } from "react";
import BingMapsReact from "bingmaps-react";

const Map = ({ coordinates, hotelCoordinates }) => {
  const [pushPins, setPushPins] = useState([]);

  useEffect(() => {
    if (hotelCoordinates && hotelCoordinates.length > 0) {
      const newPushPins = [
        {
          center: coordinates,
          options: {},
        },
        // Add pushpins for each hotel coordinate
        ...hotelCoordinates.map((coord, index) => ({
          center: coord,
          options: {
            title: `Hotel ${index + 1}`,
            // Custom pushpin
            
          },
        })),
      ];
      setPushPins(newPushPins);
    }
  }, [coordinates, hotelCoordinates]);


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
        zoom: 15,
      }}
      pushPins={pushPins}
    />
  );
};

export default Map;

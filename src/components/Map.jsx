import React, { useEffect, useState } from "react";
import BingMapsReact from "bingmaps-react";
import star from "../images/star.png";

const Map = ({ coordinates, hotelCoordinates, hotelDetails }) => {
  const [pushPins, setPushPins] = useState([]);
  const [infoboxes, setInfoboxes] = useState([]);

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
            title: `${hotelDetails[index].name} - Rating: ${hotelDetails[index].rating}`,
          },
        })),
      ];
      setPushPins(newPushPins);
    }
  }, [coordinates, hotelCoordinates]);

  useEffect(() => {
    if (hotelCoordinates && hotelCoordinates.length > 0) {
      const newInfoboxes = hotelDetails.map((detail) => ({
        options: {
          title: `${detail.name} - Rating: ${detail.rating}`,
          description: getRatingStars(detail.rating),
          visible: false,
        },
      }));
      setInfoboxes(newInfoboxes);
    }
  }, [hotelDetails]);

  const getRatingStars = (rating) => {
    const starIcons = [];
    for (let i = 0; i < rating; i++) {
      starIcons.push('<img src="' + star + '" alt="Star" />');
    }
    return starIcons.join("");
  };

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
        zoom: 13,
      }}
      pushPins={pushPins}
      infoboxesWithPushPins={infoboxes}
    />
  );
};

export default Map;

import React from 'react'
import BingMapsReact from "bingmaps-react";
import { useCoordinateContext } from './CoordinateContext';

const Map = () => {
    
  const {coordinates} = useCoordinateContext();

  const pushPin = {
    center: coordinates,
    options: {
     
    },
  }
  
  const pushPins = [pushPin];
  
  const bingMapApiKey = "AqGrMcJvoHh0AwTxWEVhPsT4sdT5xxgOVRe_T-CUas8poD6tGAQuuMLGDBDHDMDj"
    return (
        <BingMapsReact
          bingMapsKey={bingMapApiKey}
        
          mapOptions={{
            navigationBarMode: "square",
          }}
      
          viewOptions={{
            center: coordinates,
            zoom : 12
          }}
          pushPins={pushPins}
        />
      );
}

export default Map
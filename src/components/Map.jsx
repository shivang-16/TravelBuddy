import React from 'react'
import BingMapsReact from "bingmaps-react";
import { useCoordinateContext } from './CoordinateContext';

const Map = () => {
    
  const {coordinates} = useCoordinateContext();

    return (
        <BingMapsReact
          bingMapsKey="AqGrMcJvoHh0AwTxWEVhPsT4sdT5xxgOVRe_T-CUas8poD6tGAQuuMLGDBDHDMDj"
        
          mapOptions={{
            navigationBarMode: "square",
          }}
      
          viewOptions={{
            center: coordinates,
          
          }}
        />
      );
}

export default Map
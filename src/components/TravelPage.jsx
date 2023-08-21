import React from 'react'
import Map from './Map'
import Sidebar from './Sidebar'
import { CoordinateProvider } from './CoordinateContext'

const Travel= () => {
  return (
    <CoordinateProvider>
    <div className='travel-page-area'>
    <div className='sidebar-area travel-page-section'>
       <Sidebar/>
       
    </div>
    <div className='map-area travel-page-section'>
     <Map/>
    </div>
</div>
</CoordinateProvider>
  )
}

export default Travel
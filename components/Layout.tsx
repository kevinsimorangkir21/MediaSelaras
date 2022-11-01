import React from 'react'
import SideNavbar from '../components/SideNavbar'
import {useState} from 'react'
import Medcast from '../components/Medcast'
import ContentWriter from '../components/ContentWriter'
import Dashboard from './Dashboard'

export default function Layout() {
  const [displayPage, setDisplayPage] = useState(0)
  const [linkMedcast, setLinkMedcast] = useState({
    link: ""
  })
  const PageDisplay = () => {
  if (displayPage == 0) return <Dashboard/>
  else if (displayPage == 1) return <Medcast linkMedcast={linkMedcast} setLinkMedcast={setLinkMedcast}/>
  else if (displayPage == 2) return <ContentWriter/>
  }
  console.log(linkMedcast.link)
  return (
    <div className="h-screen flex flex-row">
        <SideNavbar setDisplayPage={setDisplayPage} /> 
        <div className='flex-1 self-center'>
          {PageDisplay()}        
        </div>
    </div>
  )
}

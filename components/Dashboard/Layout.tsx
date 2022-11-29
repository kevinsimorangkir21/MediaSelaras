import React from 'react'
import SideNavbar from './SideNavbar'

type DashboardLayoutProps = {
  children: React.ReactNode,
};

export default function Layout({children}: DashboardLayoutProps) {
  return (
    <div className="flex flex-row relative">
        <SideNavbar />
        <div className='flex-1 w-screen'>
          {children}        
        </div>
    </div>
  )
}

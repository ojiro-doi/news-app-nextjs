import React from 'react'
import SideVavList from '../../molecules/sideNavList/SideNavList'

const SideNav = () => {
  return (
    <div className='bg-orange-200 w-72 h-screen' data-testid='sideNav'>
      <SideVavList />
    </div>
  )
}

export default SideNav
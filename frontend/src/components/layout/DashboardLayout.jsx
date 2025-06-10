import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import Navbar from './Navbar'
import SideMenu from './SideMenu'
import UserDetailsCard from '../cards/UserDetailsCard'
import TrendingPolls from './TrendingPolls'

const DashboardLayout = ({children,activeMenu,stats,showStats}) => {
    const {user} = useContext(UserContext)
    // console.log(user,"useurueur")
  return (
    <div className=''>
      <Navbar activeMenu={activeMenu}/>
      {user && (
        <div className='flex'>
         <div className='max-[1080px]:hidden'>
            <SideMenu activeMenu={activeMenu}/>
         </div>
         <div className='grow mx-5'>{children}</div>
         <div className='hidden md:block mr-5'>
          <UserDetailsCard
           profileImageUrl={user && user.profileImageUrl}
           fullname={user && user.fullName}
           username={user && user.username}
           totalPollsVotes={user && user.totalPollsVotes}
           totalPollsCreated={user && user.totalPollsCreated}
           totalPollsBookmarked={user && user.totalPollsBookmarked}
           />

           {showStats && stats?.length > 0 && <TrendingPolls stats={stats}/> }
         </div>
         </div>
      )}
    </div>
  )
}

export default DashboardLayout

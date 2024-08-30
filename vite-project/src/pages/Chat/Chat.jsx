import React from 'react'
import LeftSidebar from '../../Compnonets/LeftSidebar/LeftSidebar.jsX'
import ChatBox from '../../Compnonets/ChatBox/ChatBox'
import RightSidebar from '../../Compnonets/RightSidebar/RightSidebar'

const Chat= () => {
  return (
   <>
   <div className='flex w-full py-20 px-32 bg-gradient-to-r from-indigo-500 to-blue-500 '>
    <LeftSidebar/>
    <ChatBox/>
    <RightSidebar/>
   </div>
   </>
  )
}

export default Chat
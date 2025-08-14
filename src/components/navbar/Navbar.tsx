import React, { useState } from 'react'
import List from '../list/List'

const Navbar: React.FC = () => {
  const [data, setData] = useState<any[]>([])

  return (
    <>
    <div className='flex_row bg-[#d6d5d5] '>
        <div className='w-full cursor-pointer flex_nor  p-2  border-black border-r-3'>সব</div>
        <div className='w-full cursor-pointer  flex_nor p-2  border-black bg-green-300'>সম্পূর্ণ</div>
    </div>
    <div className='mt-7 px-2 '>
        <List data={data} setData={setData} />
    </div>
    </>
  )
}

export default Navbar
import React from 'react'

interface NavbarItemProps {
    label:string
}
function NavbarItem({label}:NavbarItemProps) {
  return (
    <div className='text-white cursor-pointer hover:text-gray-300 transition'>
     {label}

    </div>
  )
}

export default NavbarItem
"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navlink = ({link}) => {
    const pathname = usePathname()
  return (
    <div>
      <Link href={link.href} className={`p-2 rounded-md text-md font-semibold ${pathname === link.href ? 'bg-black text-white' : 'text-gray-700'}`}>
        {link.label}
      </Link>
    </div>
  )
}

export default Navlink
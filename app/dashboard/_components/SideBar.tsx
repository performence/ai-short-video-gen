'use client'

import clsx from 'clsx'
import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SideBar() {
  const pathname = usePathname()

  const menuOption = [
    { id: 1, name: 'Dashboard', href: '/dashboard', icon: PanelsTopLeft },
    {
      id: 2,
      name: 'Create new',
      href: '/dashboard/create-new',
      icon: FileVideo
    },
    { id: 3, name: 'Upgrade', href: '/dashboard/upgrade', icon: ShieldPlus },
    { id: 4, name: 'Account', href: '/dashboard/account', icon: CircleUser }
  ]

  return (
    <div className="w-full h-screen shadow-md p-5">
      <div className="grid gap-3">
        {menuOption.map(item => (
          <Link key={item.id} href={item.href}>
            <div
              className={clsx(
                'flex items-center gap-x-3 p-3 rounded-md cursor-pointer hover:bg-primary hover:text-primary-foreground',
                pathname === item.href && 'bg-primary text-primary-foreground'
              )}
            >
              <item.icon />
              <h3>{item.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

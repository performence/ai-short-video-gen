import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="flex items-center justify-between p-3 shadow-md">
      <div className="flex gap-x-3 items-center">
        <Image src={'/logo.svg'} alt="" width={30} height={30} />
        <h2 className="font-bold text-xl">AI short video generator</h2>
      </div>
      <div className="flex gap-x-3 items-center">
        <Button>Dashboard</Button>
        <UserButton />
      </div>
    </div>
  )
}

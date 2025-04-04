'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import EmptyState from './_components/EmptyState'

export default function page() {
  const [videoList, setVideoList] = useState([])

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-2xl text-primary">Dashboard</p>
        <Link href={'/dashboard/create-new'}>
          <Button>+ Create New</Button>
        </Link>
      </div>

      {videoList.length === 0 && <EmptyState />}
    </div>
  )
}

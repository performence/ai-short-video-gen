import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function EmptyState() {
  return (
    <div className="flex flex-col gap-y-3 items-center mt-10 border-dashed border-2 p-5 py-24">
      <h2>You don&apos;t have any short video created </h2>
      <Link href={'/dashboard/create-new'}>
        <Button>Create new short video</Button>
      </Link>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import img from '../../public/house.webp'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-3 font-bold font-serif">
            <div className="flex size-6 items-center justify-center rounded-md">
              <span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden">
                <Image src={'/logo.svg'} alt="" width={30} height={30} />
              </span>
            </div>
            AI-short-video-gen
          </Link>
        </div>
        {children}
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image src={img} alt="" fill />
      </div>
    </div>
  )
}

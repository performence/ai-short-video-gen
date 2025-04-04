import React from 'react'
import Header from './_components/Header'
import SideBar from './_components/SideBar'

export default function layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className="hidden md:block w-64 fixed mt-[65px]">
        <SideBar />
      </div>
      <Header />
      <div className="md:ml-64 p-10">{children}</div>
    </>
  )
}

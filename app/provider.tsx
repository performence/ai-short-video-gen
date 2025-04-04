import { db } from '@/configs/db'
import { Users } from '@/configs/schema'
import { currentUser } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import React from 'react'

export default async function provider({ children }: React.PropsWithChildren) {
  const user = await currentUser()

  if (user && user.primaryEmailAddress?.emailAddress) {
    const existingUser = await db.select().from(Users).where(eq(Users.email, user.primaryEmailAddress.emailAddress))

    if (!existingUser[0]) {
      await db
        .insert(Users)
        .values({ name: user.fullName!, email: user.primaryEmailAddress.emailAddress, imageUrl: user.imageUrl })
    }
  }

  return <div>{children} </div>
}

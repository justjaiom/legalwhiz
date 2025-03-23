// src/app/dashboard/page.tsx
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'

export default async function DashboardPage() {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in')
  }

  return (
    <div className="p-4">
      <h1>Welcome, {user.firstName}!</h1>
      <p>Your email: {user.emailAddresses[0].emailAddress}</p>
    </div>
  )
}

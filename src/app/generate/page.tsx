import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import DocumentGenerator from '../components/DocumentGenerator'


export default async function GeneratePage() {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in')
  }

  return (
    <div className="container mx-auto px-6 py-24 text-center">
       <DocumentGenerator />
    </div>
  )
}

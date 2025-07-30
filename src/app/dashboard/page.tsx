'use client'

import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { PlusCircle, FileText, Settings } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function DashboardPage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [documents, setDocuments] = useState<any[]>([])
  const [loadingDocs, setLoadingDocs] = useState(true)

  // useEffect(() => {
  //   if (isLoaded && !user) {
  //     router.push('/sign-in')
  //   }

  //   if (user) {
      // fetchDocuments()
  //   }

  //   async function fetchDocuments() {
  //     setLoadingDocs(true)
  //     const { data, error } = await supabase
  //       .from('documents')
  //       .select('*')
  //       .eq('user_id', user?.id)
  //       .order('created_at', { ascending: false })

  //     if (!error) {
  //       setDocuments(data)
  //     }
  //     setLoadingDocs(false)
  //   }
  // }, [isLoaded, user])

  // if (!isLoaded || (user && loadingDocs)) {
  //   return <div className="p-4">Loading dashboard...</div>
  // }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome, {user?.firstName}!</h1>
        <p className="text-gray-600">Manage your documents, settings, and more.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlusCircle className="w-5 h-5 text-orange-500" />
              New Document
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Start a new legal document using AI.
            </p>
            <Link href="/generate">
              <Button className="w-full">Generate</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-500" />
              Your Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            {documents.length > 0 ? (
              <ul className="space-y-2 text-sm text-gray-700 max-h-60 overflow-auto">
                {documents.map((doc) => (
                  <li key={doc.id} className="border rounded px-3 py-2">
                    <strong>{doc.title}</strong>
                    <p className="text-xs text-gray-500">{new Date(doc.created_at).toLocaleString()}</p>
                    <pre className="text-xs mt-1 max-h-24 overflow-hidden">{doc.content.slice(0, 200)}...</pre>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No documents yet.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-gray-600" />
              Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Manage your profile and preferences.
            </p>
            <Button variant="secondary" className="w-full" disabled>
              Coming Soon
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
